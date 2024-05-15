import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Detail = () => {
  const {id}=useParams();
  const [data,setData]=useState([])
  const [basket,setBasket]=useState(localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [])
  useEffect(()=>{
    axios.get(`http://localhost:5000/category/${id}`).then(res=>{
        setData(res.data)
        console.log(res.data,"salam")
    })
  },[])
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket)); 
  }, [basket]);
  const addToBasket = (id) => {
    let basketItem = basket.find((e) => e.id == id);
    if (!basketItem) {
     

      setBasket([...basket,{ ...data,
                             count: 1,
                            totalPrice: data.price,
                           },
      ]);
    } else {
      basketItem.count++;
      basketItem.totalPrice = basketItem.price * basketItem.count;
      setBasket([...basket]);
    }
  };
  return (
    <div className='detail' style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"50px"}}>
      <img width={"500px"} src={data.image}  alt="" />
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"30px",flexDirection:"column"}}>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <button onClick={()=>{
          addToBasket(data.id)
        }} style={{padding:"10px",border:"none",background:"lightblue",borderRadius:"10px",cursor:"pointer"}}>Add to Basket</button>
      </div>
    </div>

  )
}

export default Detail