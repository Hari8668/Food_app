import React from 'react'
import DetailProd from '../SharedComponent/DetailProd'
import data from "../products.json"

function Vodka() {
  const vodkaarray = data.products.filter(i => i.parentId === 9)
  return (
    <div>
       <DetailProd array={vodkaarray} />
    </div>
  )
}

export default Vodka