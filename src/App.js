import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css"

const App=()=>{
  const [data,setData]=useState([])

  useEffect(() => {
    axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then((response)=>{
      // console.log(response.data);
      setData(response.data)
    })
    .catch((err)=>{
      // console.log(err);
    })
  }, [])
  return (
    <div>
    <h1 className='text-center'>AMAZON BEAUTY PRODUCTS</h1>
    {
      data.map((element,key)=>{
        return <div key={element.id}>




        <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={element.image_link} className="card-img-top" alt="..."/>
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
    <nav aria-label="...">
  <ul className="pagination">
    <li className="page-item"><button className="page-link" >1</button></li>
    <li className="page-item"><button className="page-link">2</button></li>

    <li className="page-item"><button className="page-link">3</button></li>
  </ul>
</nav>
    </div>

  )
  
}
export default App
