import React from 'react'
import DetailProd from '../SharedComponent/DetailProd'
import data from "../products.json"

function Starters() {
  const burgerarray = data.products.filter(i => i.parentId === 5)
  return (
    <div>
       <DetailProd array={burgerarray} />
    </div>
  )
}

export default Starters