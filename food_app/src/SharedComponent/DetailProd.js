import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import ToggleButton from 'react-bootstrap/esm/ToggleButton';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../Redux/Actions';



function DetailProd({ array }) {
    const dispatch = useDispatch()
    const [count, setCount] = useState(1)
    const state = useSelector((state) => state.product)
    const [singleitem, setSingleitem] = useState({})
    const [checkboxarray, setCheckboxarray] = useState([])
    state.filter(i => i.id === singleitem.id)




    const [show, setShow] = useState(false);


    //modal close
    const handleClose = () => {
        setShow(false)
        setCount(1)
    };

    //modal open
    const handleShow = (item) => {
        setSingleitem(item)
        setShow(true)
        if (item.variants?.length > 0) {
            setCheckboxarray([item.variants[1]])
        }
    };



    //add product to cart
    const addproduct = (product, count) => {
        dispatch(addTocart(product, count, checkboxarray))
        setShow(false)
        setCount(1)
    }


    //extra items array
    const handleCheck = (event, item) => {
        let updatedList = [...checkboxarray];

        if (event.target.checked) {
            updatedList = [...checkboxarray, item];
        } else {
            updatedList.splice(checkboxarray.indexOf(event.target.value), 1);
        }
        setCheckboxarray(updatedList);
    };


    //checkbox onchange
    const buttoncheck = (event, i) => {
        let newarray = [...checkboxarray]
        newarray.splice(0, 1, i)
        setCheckboxarray(newarray)
    }

    // console.log(singleitem)

    return (
        <div>
            {/* {/ suncategory array /} */}
            {
                array.map((item) => {
                    return <div className='row product_box cursor-pointer' role="button"  onClick={() => handleShow(item)} key={item.id}  >
                        <span className='col-md-9 text-start'>
                            <span className=' Starter-soup-of-the'>{item.name}</span><br />
                            <span className='m-0 Chicken-Soup-with-mi'>{item.description}</span>
                        </span>
                    
                        <span className='col-md-3' style={{padding:"10px"}}>
                            <span className='price'>${item.price}</span>
                        </span>
                    </div>
                })}
            <div>

                {/* {/ canvas for individual product /} */}
                
                <Offcanvas show={show} onHide={handleClose}  placement="bottom" style={{ width: "375px", height: "78vh",borderTopLeftRadius: "21px",borderTopRightRadius:"21px",margin: "8px 0 0px",padding:"15px 0 0" }}>
                    <div style={{marginLeft:"29px" ,marginRight:"37px",marginBottom:"100px"}}>
                    <Offcanvas.Header className='m-0 p-1' closeButton>
                        <Offcanvas.Title> <h4 className='cat-heading'>{singleitem.name}</h4></Offcanvas.Title>
                    </Offcanvas.Header><hr />

                    <Offcanvas.Body className='m-0 p-1' >
                        {singleitem?.variants?.length > 0 ?
                            <div>
                                <p className='m-0' style={{fontWeight:"800",fontSize:"22px"}}>Size</p>
                                <div className='d-grid gap-2'>
                                    {
                                        singleitem.variants.map((i) => {
                                            return <ToggleButton
                                                className=" fs-5 text-capitalize fw-bolder subcat-button"
                                                id="toggle-check"
                                                type="radio"
                                                name="option1"
                                                variant={checkboxarray[0].price === i.price ? "warning" : "outline-warning"}
                                                value={i.price}
                                                onClick={(e) => buttoncheck(e, i)}
                                                key={i.name}
                                            ><div className='row'>
                                                    <span style={{fontWeight:"800",fontSize:"22px", color: "black" }} className="col-md-8 text-start">{i.name}</span>
                                                    <span style={{fontWeight:"800",fontSize:"22px", color: "black" }} className="col-md-4 text-end"> ${i.price}</span>
                                                </div>

                                            </ToggleButton>
                                        })}
                                    <hr />
                                </div>


                                {/* {/ if extra item available /} */}
                                <h4 className='fw-bolder'>Select option</h4>
                                <div> {singleitem?.extras?.length > 0 ?
                                    <>{singleitem.extras.map((item) => {
                                        return <div className='row' key={item.name}>
                                            <div className='col-md-10 py-1' style={{fontWeight:"800",fontSize:"20px"}}> {item.name} (+${item.price})</div>
                                            <div className='col-md-2'><input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="check1"
                                                name="option1"
                                                value={item.price}
                                                onChange={(e) => handleCheck(e, item)}
                                            /></div>
                                            <br />
                                        </div>
                                    })} <hr /></>
                                    : null}  </div>
                            </div> : null}

                        {/* {/ Quantity buttons /} */}
                        <div className='text-center'>
                            <button className="mx-3 qty_button" onClick={() => setCount(count - 1)} disabled={count ===1 ? true :false}>
                                <span className='fs-5 fw-bolder' >-</span>
                            </button>

                            <span className='fw-bolder fs-5' style={{ border: "solid 3px #ffd100", borderRadius: "10px", padding: "5px 20px" }}>{count}</span>

                            <button className='mx-3  qty_button' onClick={() => setCount(count + 1)}>
                                <span className="fs-5 fw-bold">+</span>
                            </button>  <br />

                            <div className='d-grid gap-2'><button className='my-3 btn btn-warning fw-bolder fs-5 subcat-button' onClick={() => addproduct(singleitem, count)}>Add to order</button></div>

                        </div>

                    </Offcanvas.Body>
                    </div>
                </Offcanvas>
            </div>
        </div>
    )
}

export default DetailProd