import React from 'react'
import './Section2.css'
const Section2 = () => {
  return (
    <section className='section2'>
        <div className="section2Card">
            <img src="https://preview.colorlib.com/theme/shoppers/images/women.jpg" alt="" />
            <div className='section2Text'>
                <span>COLLECTIONS</span>
                <h2>Women</h2>
            </div>
        </div>
        <div className="section2Card">
            <img src="https://preview.colorlib.com/theme/shoppers/images/children.jpg" alt="" />
            <div className='section2Text'>
                <span>COLLECTIONS</span>
                <h2>Children</h2>
            </div>
        </div>
        <div className="section2Card">
            <img src="https://preview.colorlib.com/theme/shoppers/images/men.jpg" alt="" />
            <div className='section2Text'>
                <span>COLLECTIONS</span>
                <h2>Men</h2>
            </div>
        </div>
    </section>
  )
}

export default Section2
