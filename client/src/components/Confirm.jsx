import React from 'react';
import sendData from '../network/sendData.js'

const Confirm = (props) => {
  return (
    <div className="scene_element scene_element--fadein">
      <div>
        <h3>Contact Info</h3>
        <br/>
        <span>Name: {props.checkoutInfo.name}</span>
        <br/>
        <span>Password: {'*'.repeat(props.checkoutInfo.password.length)}</span>
        <br/>
        <span>Email: {props.checkoutInfo.email}</span>
      </div>
      <div>
        <h3>Billing Address</h3>
        <br/>
        <span>{props.checkoutInfo.name}</span>
        <br/>
        <span>{props.checkoutInfo.address.lineOne}</span>
        <br/>
        <span>{props.checkoutInfo.address.lineTwo}</span>
        <br/>
        <span>{props.checkoutInfo.address.city}</span>
        <br/>
        <span>{props.checkoutInfo.address.zip}</span>
        <br/>
      </div>
      <div>
        <h3>Payment Method</h3>
        <br/>
        <span>{props.checkoutInfo.name}</span>
        <br/>
        <span>{props.checkoutInfo.payment.cc}</span>
        <br/>
        <span>Exp:{props.checkoutInfo.payment.expDate}</span>
        <br/>
        <span>CVV:{'*'.repeat(props.checkoutInfo.payment.cvv.length)}</span>
        <br/>
        <span>Zip:{props.checkoutInfo.payment.zip}</span><br/>
      </div>
      <button className="button" onClick={()=>{
      props.changePage('index');
      sendData(props.checkoutInfo);
      }}><a href="https://en.wikipedia.org/wiki/Emperor_Norton">Confirm</a></button>
    </div>
  )
}

export default Confirm;