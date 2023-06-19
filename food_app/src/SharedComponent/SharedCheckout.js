import React from 'react'

function SharedCheckout({array,catname}) {
  return (
    <>
    {array.length !== 0 ? 
        <>
         <h4 className='cat_checkout_name'> {catname}({array.length})</h4>
       { array.map((item,index) => {
            return <div className='row' key={index}>
                <div className='col-md-8 m-0'>
                    <p className='item_name'>{item.qty} * {item.name}</p>
                    <p className='m-0'>{item?.extra?.map((i)=> i.name.concat(" "))}</p>
                    </div>
                <span className='text-end fs-6 col-md-4 fw-bolder'>${item.extra.length > 0 ?(item?.extra?.map(item => item.price).reduce((prev, next) => prev + next,0)) * item.qty : item.price}</span>
            </div>
        })}<hr /></> : null}
        </>
  )
}

export default SharedCheckout