import React from 'react'
import './App.css'

export const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a style={{fontSize:'28px'}} className="navbar-brand ">&nbsp;&nbsp;&nbsp;&nbsp;Beauty Products</a>
                <form className="form-inline" style={{display:'flex'}}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </div>
    )
}
