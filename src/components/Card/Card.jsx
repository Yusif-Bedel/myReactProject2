import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
const Card = ({item}) => {
  return (
    <div className='card3'>
      <img style={{width:"250px",height:"250px"}} src={item.image} alt="" />
      <h3 style={{fontSize:"24px"}}>{item.title}</h3>
      <pre style={{fontSize:"20px",fontWeight:"bold"}}>{item.price}</pre>
      <Link to={`detail/${item.id}` } style={{padding:"10px",border:"none",background:"green",borderRadius:"10px",color:"white",cursor:"pointer"}}>Detail page</Link>
    </div>
  )
}

export default Card
