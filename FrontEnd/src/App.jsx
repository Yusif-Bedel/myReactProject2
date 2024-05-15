import {useEffect, useState } from 'react'
import './App.css'
import MainContext from './context/context'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ROUTES from './routes/routes'
import axios from 'axios'
function App() {
  const [data,setData]=useState([])
  const router=createBrowserRouter(ROUTES)
  useEffect(()=>{
    axios.get("http://localhost:5000/category").then(res=>{
      console.log(res.data)
      setData([...res.data])
    })
  },[])
  const contextData={
    data,setData
  }
  return (
    <>
     <MainContext.Provider value={contextData}>
        <RouterProvider router={router}/>
     </MainContext.Provider>
    </>
  )
}

export default App
