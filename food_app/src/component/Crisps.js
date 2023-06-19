import React from 'react'
import data from "../products.json"
import DetailProd from '../SharedComponent/DetailProd';

function Crisps() {
    const crispsarray = data.products.filter(i => i.parentId === 10)

    return (
        // 
        <DetailProd array={crispsarray} />
    )
}

export default Crisps