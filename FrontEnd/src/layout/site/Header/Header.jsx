import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
    <div className="navTop">
      <div className="navTopLeft">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder='Search' />
      </div>
      <Link to={'/'} style={{padding:"10px",border:"3px solid black"}}>SHOPPERS</Link>
      <div className="navTopRight">
        <i class="fa-solid fa-user"></i>
        <i class="fa-regular fa-heart"></i>
        <Link to={'/basket'}><i class="fa-solid fa-cart-shopping"></i> <sup>0</sup></Link>
      </div>
    </div>
    <div className="navBottom">
      <ul>
        <li><Link to={'/'}>HOME</Link></li>
        <li><Link to={'/admin'}>ADMIN</Link></li>
        <li><a href="#">CATALOGUE</a></li>
        <li><a href="#">NEW ARRIVALS</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>

      
      
      
      
    </div>
    </nav>
  )
}

export default Header
