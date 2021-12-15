import React, {useRef} from 'react';

const CheckoutThree = (props) => {
  const inputCC = useRef(null);
  const inputExpDate = useRef(null);
  const inputCVV = useRef(null);
  const inputZip = useRef(null);

  return(
    <div className="scene_element scene_element--fadein">
      <div className="field"><h3>Payment Info</h3></div>
      <div className="field">
        <label>Credit Card Number:</label>
        <input type='text'
        defaultValue={props.checkoutInfo.payment.cc}
        ref={inputCC}
        ></input>
      </div>
      <div className="field">
        <label>Expiration Date:</label>
        <input type='text'
        defaultValue={props.checkoutInfo.payment.expDate}
        ref={inputExpDate}
        ></input>
      </div>
      <div className="field">
        <label>CVV: </label>
        <input type='text'
        defaultValue={props.checkoutInfo.payment.cvv}
        ref={inputCVV}
        ></input>
      </div>
      <div className="field">
        <label>Billing Zip: </label>
        <input type='text'
        defaultValue={props.checkoutInfo.payment.zip}
        ref={inputZip}
        ></input>
      </div>
      <button className="button field" onClick={()=>{props.changeCheckoutInfo({
      ...props.checkoutInfo,
      payment: {
        cc: inputCC.current.value,
        expDate: inputExpDate.current.value,
        cvv: inputCVV.current.value,
        zip: inputZip.current.value
      }
      });
      props.changePage('confirm');
      }}>Next</button>
    </div>
  )
}

export default CheckoutThree;