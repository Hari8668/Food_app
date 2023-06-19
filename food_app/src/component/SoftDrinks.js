import React from 'react'
import DetailProd from '../SharedComponent/DetailProd'
import data from "../products.json"

function SoftDrinks() {
  const softdrinkarray = data.products.filter(i => i.parentId === 8)
  return (
    <div>
       <DetailProd array={softdrinkarray} />
    </div>
  )
}

export default SoftDrinks