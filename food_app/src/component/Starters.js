import React from 'react'
import DetailProd from '../SharedComponent/DetailProd'
import data from "../products.json"

function Starters() {
  const starterarray = data.products.filter(i => i.parentId === 4)
  return (
    <div>
       <DetailProd array={starterarray} />
    </div>
  )
}

export default Starters