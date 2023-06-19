import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-bootstrap/Modal';
import {  useLocation, useNavigate } from 'react-router-dom';
import SharedCheckout from '../SharedComponent/SharedCheckout';
import { emptycart } from '../Redux/Actions';
import img1 from "../assets/abc.gif"


function MyVerticallyCenteredModal(props) {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title"
            centered
            
        >
            <Modal.Body className='text-center p-1'>
                <p className='text-center fs-4 fw-bolder'>Confirm Order</p>
                <img src={img1} className="m-0 p-0" style={{height:"100px"}} alt="imagess"></img>
                <p className='fw-bolder p-3'>
                By placing this order you agree that you are present in Kings Arms and over 18 years old.
                </p>
                <div className='row px-4 py-2'>
                <Button variant='outline-warning'style={{borderRadius:"10px"}} onClick={props.onHide} className="fw-bolder col-md-5">Cancel</Button>
                <span className='col-md-1'></span>
                <Button className='fw-bolder col-md-6' style={{borderRadius:"10px"}} variant='warning' onClick={()=>{ 
                    navigate("/")
                    dispatch(emptycart())
                    }}>Place order</Button>
                    </div>
            </Modal.Body>
          
                
        
        </Modal>
    );
}
function Checkout() {
    const state = useSelector((state) => state.product)
    const [modalShow, setModalShow] = React.useState(false);
    const beerarray = state.filter(i => i.parentId === 7 || i.parentId === 8 || i.parentId === 9)
    const foodarray = state.filter(i => i.parentId === 4 || i.parentId === 5 || i.parentId === 6)
    const snacksrarray = state.filter(i => i.parentId === 10)
    const receivedstate=useLocation()
    const price=receivedstate.state.price
    const quantity=receivedstate.state.quantity





    return (
        <div className='text-start px-4'>
            <p className='py-2 Kings-Arms-Cardingto'>Checkout</p>
            <p className='m-0 p-0 fw-bold'>Kempston hammmers sports & social club</p>
            <p className='m-0 p-0'>134, Hight Street, Kempston, Bedford,
            Bedfordshire, MK42 7BN.</p>

           <div className=' checkout-comp my-3'>
          <SharedCheckout array={beerarray} catname="Drinks" />
          <SharedCheckout array={foodarray} catname="Foods" />
          <SharedCheckout array={snacksrarray} catname="Snacks" />
         


            <p className='my-3 fw-bolder fs-4'>Add Notes:</p>
            <textarea type="textarea" cols='33' rows="10" style={{ border: "3px solid #F7DD25",borderRadius:"10px" }}></textarea> </div>
            {/* {/ <p className='fs-2 text-center fw-bolder'>Table Number:  <span style={{border:"3px solid #F7DD25",padding:"5px"}}>60</span></p> /} */}
            <div className="d-grid gap-2">
                <Button className="btn btn-warning  bottomCenter fixed-bottom" type="button" onClick={() => setModalShow(true)}>
                    <p className='fw-bolder fs-4 m-0'>Confirm Order</p>
                    <p className='fw-bolder fs-4 m-0'> ${price.toFixed(2)}/{quantity} ITEM</p>  
                </Button>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    className="center-modal "
                />
            </div>
        </div>
    )
}

export default Checkout
