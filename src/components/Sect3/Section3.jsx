import React, { useContext } from 'react'
import './Section3.css'
import MainContext from '../../context/context'
import Card from '../Card/Card'
const Section3 = () => {
    const{data,setData}=useContext(MainContext)
  return (
    <section className='section3'>
        <span></span>
        <h2>Featured Products</h2>
        <div className='section3Cards'>
        {
            data.map((item,index)=>{
                return(<Card key={index} item={item} />)
            })
        }
        </div>
    </section>
  )
}

export default Section3
