import React, { useContext } from 'react'
import './Products.css'
import MainContext from '../../../context/context'
import axios from 'axios'
const Products = () => {
  const {data,setData}=useContext(MainContext)
  const deleteItem=(id)=>{
    axios.delete(`http://localhost:5000/category/${id}`).then(res=>{
      const uptaded=data.filter((x)=>x.id !=_id)
      setData([...uptaded])
    })
  }
  return (
    <table>
  <thead>
    <tr>
      <th>Id</th>
      <th>Image</th>
      <th>Name</th>
      <th>Price</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map((item,index)=>{ 
      return  (<tr key={index}>
        <td>{item._id}</td>
        <td><img width={"60px"} src={item.image} alt="" /></td>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td><button style={{padding:"10px",border:"none",background:"lightblue",color:"white"}}>Edit</button></td>
        <td><button onClick={()=>{
          deleteItem(item._id)
        }} style={{padding:"10px",border:"none",background:"red",color:"white"}}>Delete</button></td>
      </tr>)
      })
    }
  </tbody>
</table>
  )
}

export default Products
