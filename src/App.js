import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css"
import { Header } from './Header';
import { Pagination } from './Pagination';

const App = () => {
  const [data, setData] = useState([])
  const [currentPage,setCurrentPage]=useState(1)
  const [postsPerPage,setPostsPerPage]=useState(12)

  useEffect(() => {
    axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then((response) => {
        // console.log(response.data);
        setData(response.data)
      })
      .catch((err) => {
        // console.log(err);
      })
  }, [])
  const indexOfLastPost=currentPage * postsPerPage
  const indexOfFirstPost=indexOfLastPost - postsPerPage
  const currentPost=data.slice(indexOfFirstPost,indexOfLastPost)

  // change page

  const paginate=(pageNumber)=>{
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }
  return (
    <div>
    <Header/>
      <div className=' heading'>
        {/* <h1 className='text-center'>AMAZON BEAUTY <br /> PRODUCTS</h1> */}

      </div>
      <div className='forflex'>
      {
        currentPost.map((element, key) => {
          return <div key={element.id}>




            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
              </div>
              <div className="col">
                <div className="card h-100">
                  <img src={element.image_link} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text">Every information is written here. you can read it carefully.</p>
                  </div>
                  <div className="card-footer text-center">
                    <button className="btn btn-primary text-center">BUY ${element.price}</button>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
          </div>
        })
      }
      </div>
      <Pagination totalPosts={data.length} postsPerPage={postsPerPage} paginate={paginate}/>
    </div>

  )

}
export default App
