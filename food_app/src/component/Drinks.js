import React from 'react'
import data from "../categories.json"
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SharedCat from '../SharedComponent/SharedCat';


function Drinks() {
  const drinkcat = data.data.filter(i => i.parent === 1)
  const navigate = useNavigate()


  const handleclick = (id, idx) => {
    if (id === 7) {
      navigate("/")
    }
    else if (id === 8) {
      navigate("softdrinks")
    }
    else if (id === 8) {
      navigate("abc")
    }
    else {
      navigate("vodka")
    }
  }
  return (
    <>
    <SharedCat array={drinkcat} handleclick={handleclick} />
    <Outlet />
    </>
  )
}

export default Drinks