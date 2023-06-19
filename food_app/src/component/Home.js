import React from 'react'
import data from "../categories.json"
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Home() {

  const [radioValue, setRadioValue] = useState(1);
  const navigate = useNavigate()
  const state = useSelector(state => state.product)
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)


  const handleclick = (id) => {
    setRadioValue(id)
    if (id === 1) {
      navigate("/")
    }
    else if (id === 2) {
      navigate("foods")
    }
    else {
      navigate("snacks")
    }
  }
  useEffect(() => {
    setQuantity(state?.map(item => item.qty).reduce((prev, next) => prev + next, 0))
    setPrice(state.map(item =>item.extra.length >0 ? item?.extra?.map(i => i.price).reduce((prev, next) => prev + next, 0) * item.qty : item.price).reduce((a, b) => a + b, 0))
  }, [state])

  return (
    <div className='px-1'>
    <span className="Kings-Arms-Cardingto">
          Kings Arms Cardington
          </span>
            <p className='-High-Street-Kem'>134, Hight Street, Kempston, Bedford,
            Bedfordshire, MK42 7BN.</p>
      <div className="test">
        <div className="test2">

        {data.data.slice(0, 3).map((radio, idx) =>
         {
           return  <button
           key={idx}
           id={`radio-${idx}`}
           type="radio"
           variant='outline-warning'
           name="radio"
           value={radio.id}
           style={{backgroundColor:radioValue===radio.id ? "#ffbb33" : "white"}}
           // checked={radioValue === radio.id}
           // onChange={(e) => setRadioValue(+e.target.value)}
           // className="fw-bolder Rectangle col-md-4"
           className={radio.name==="DRINKS" ? "drinks" : radio.name==="FOOD" ? "foods" : radio.name==="SNACKS" ? "snacks" : ""}
           onClick={() => handleclick(radio.id)}
           >
          <span className='DRINKS'>{radio.name}</span>
        </button>
         
        })}
  
        </div>
      </div>
      <Outlet />
      <div>
        {state.length !== 0 ? <Button variant="warning"  className='bottomCenter' onClick={() => navigate("checkout",{ state: { price: price, quantity: quantity }})}>
        <p className='fw-bolder fs-4 m-0'>View Basket</p>
        <p className='fw-bolder fs-4 m-0'>${price.toFixed(2)}/{quantity} ITEM</p>
      </Button> : null}
    </div>

    </div>
  )
}

export default Home