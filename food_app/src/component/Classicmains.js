import React from 'react'
import DetailProd from '../SharedComponent/DetailProd'
import data from "../products.json"

function Classicmains() {
  const classicmainsarray = data.products.filter(i => i.parentId === 6)
  return (
    <div>
       <DetailProd array={classicmainsarray} />
    </div>
  )
}

export default Classicmains