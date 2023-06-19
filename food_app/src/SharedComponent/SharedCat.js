import React, { useState } from 'react'


function SharedCat({array,handleclick}) {
    const [btnValue, setBtnValue] = useState(1);
    const [activeButton, setActiveButton] = useState(0);
  return (
    <div className='row subcategorybutton'>{array?.map((item, idx) => {
        return <p
          key={idx}
          id={`btn-${idx}`}
          type="radio"
          name="radio"
          style={{ textDecoration: activeButton === idx ? "underline" : "", textDecorationColor: activeButton === idx ? "#F7DD25" : "", textUnderlineOffset: "10px" }}
          className='col-md-4 fs-5 fw-bolder m-0 p-0'
          value={item.id}
          role="button"
          checked={btnValue === item.id}
          onChange={(e) => setBtnValue(+e.currentTarget.value)}
          onClick={() => {
            handleclick(item.id, idx)
            setActiveButton(idx)
        }}
        >
          {item.name}
        </p>
      })}
      </div>
  )
}

export default SharedCat