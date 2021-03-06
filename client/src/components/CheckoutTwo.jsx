import React, {useRef} from 'react';

const CheckoutTwo = props => {
  const inputLineOne = useRef(null);
  const inputLineTwo = useRef(null);
  const inputCity = useRef(null);
  const inputZip = useRef(null);
  const inputPhone = useRef(null);
  return(
    <div className="scene_element scene_element--fadein">
      <div className="field"><h3>Address</h3></div>
      <div className="field">
        <label>Address Line 1:</label>
        <input type='text'
        defaultValue ={props.checkoutInfo.address.lineOne}
        ref={inputLineOne}></input>
      </div>
      <div className="field">
        <label>Address Line 2:</label>
        <input type='text'
        defaultValue ={props.checkoutInfo.address.lineTwo}
        ref={inputLineTwo}></input>
      </div>
      <div className="field">
        <label>City:</label>
        <input type='text'
        defaultValue ={props.checkoutInfo.address.city}
        ref={inputCity}></input>
      </div>
      <div className="field">
        <label>Zip Code:</label>
        <input type='text'
        defaultValue ={props.checkoutInfo.address.Zip}
        ref={inputZip}></input>
      </div>
      <div className="field">
        <label>Phone:</label>
        <input type='text'
        defaultValue ={props.checkoutInfo.Phone}
        ref={inputPhone}></input>
      </div>
      <button className="button field" onClick={()=>{
      props.changePage('checkoutOne');
      }}>Back</button>
      <button className='button field' onClick={()=> {
        props.changeCheckoutInfo({
          ...props.checkoutInfo,
          address: {
            lineOne: inputLineOne.current.value,
            lineTwo: inputLineTwo.current.value,
            city: inputCity.current.value,
            zip: inputZip.current.value
          },
          phone: inputPhone.current.value
        });
        props.changePage('checkoutThree');
        }}>Next</button>
    </div>
  )
}

export default CheckoutTwo;