import React from 'react'
import data from "../products.json"
import DetailProd from '../SharedComponent/DetailProd';

function Beers() {
    const beerarray = data.products.filter(i => i.parentId === 7)
    return (
        <DetailProd array={beerarray} />
    )
}

export default Beers