import React  from 'react'
import data from "../categories.json"
import { Outlet } from "react-router-dom"; 
import { useNavigate } from "react-router-dom"; 
import SharedCat from '../SharedComponent/SharedCat';

function Foods() {
    const foodcat=data.data.filter(i=>i.parent===2)
    const navigate=useNavigate()
  
    const handleclick=(id,idx)=>{
        if(id===4){
            navigate("/foods")
        }
        else if(id===5){
            navigate("burgers")
        }
        else{
            navigate("classicmains")
        }
    }
  return (
    <>
    <SharedCat array={foodcat} handleclick={handleclick} />
    <Outlet />
    </>
  )
}

export default Foods