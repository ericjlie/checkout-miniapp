import React, {useRef} from 'react';

const CheckoutTwo = props => {
  const inputLineOne = useRef(null);
  const inputLineTwo = useRef(null);
  const inputCity = useRef(null);
  const inputZip = useRef(null);
  const inputPhone = useRef(null);
  return(
    <div className="scene_element scene_element--fadein">
      <div>
        <label>Address Line 1:</label>
        <input type='text'
        defaultValue ={props.checkoutInfo.address.lineOne}
        ref={inputLineOne}></input>
      </div>
      <div>
        <label>Address Line 2:</label>
        <input type='text'
        defaultValue ={props.checkoutInfo.address.lineTwo}
        ref={inputLineTwo}></input>
      </div>
      <div>
        <label>City:</label>
        <input type='text'
        defaultValue ={props.checkoutInfo.address.city}
        ref={inputCity}></input>
      </div>
      <div>
        <label>Zip Code:</label>
        <input type='text'
        defaultValue ={props.checkoutInfo.address.Zip}
        ref={inputZip}></input>
      </div>
      <div>
        <label>Phone:</label>
        <input type='text'
        defaultValue ={props.checkoutInfo.Phone}
        ref={inputPhone}></input>
      </div>
      <button className='button' onClick={()=> {
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