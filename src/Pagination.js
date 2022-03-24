import React from 'react'
// import paginate from './App'
export const Pagination = ({ totalPosts, postsPerPage,paginate }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers)
    return (
        <div style={{display:"flex",justifyContent:"center"}}>

            <nav aria-label="...">
                <ul className=" pagination pagination-lg">
                    
                    {
                        pageNumbers.map((element,key)=>{
                            
                    
                            return <li className="page-item "><button onClick={()=>paginate(element)} className="page-link" tabindex="-1">{element}</button></li>
                        })
                    }
                        
                </ul>
            </nav>


        </div>
    )
}
