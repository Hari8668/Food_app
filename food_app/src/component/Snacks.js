import React from 'react'
import data from "../categories.json"
import { Outlet } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
import SharedCat from '../SharedComponent/SharedCat';

function Snacks() {
    const snackcat=data.data.filter(i=>i.parent===3)
    const navigate=useNavigate()
    // const [activeButton, setActiveButton] = useState(0);

    const handleclick=(id,idx)=>{
      // setActiveButton(idx)
      if (id === 10) {
        navigate("/snacks")
      }
  }
  return (
    <>
    <SharedCat array={snackcat} handleclick={handleclick} />
    <Outlet />
    </>
  )
}

export default Snacks