import React, {useRef} from 'react';

const CheckoutOne = (props) => {
  const inputName = useRef(null)
  const inputEmail = useRef(null)
  const inputPass = useRef(null)
  return(
    <div className="scene_element scene_element--fadein">
        <div>
          <label>Name: </label>
          <input type='text' defaultValue={props.checkoutInfo.name} ref={inputName}></input>
        </div>
        <div>
          <label>Email: </label>
          <input type='text' defaultValue={props.checkoutInfo.email} ref={inputEmail}></input>
        </div>
        <div>
          <label>Password: </label>
          <input type='text' defaultValue={props.checkoutInfo.password} ref={inputPass}></input>
        </div>
        <button className="button" onClick={()=>{props.changeCheckoutInfo({

          ...props.checkoutInfo,
          name: inputName.current.value,
          email: inputEmail.current.value,
          password: inputPass.current.value
          });
          props.changePage('checkoutTwo');
          }}>Next</button>
    </div>
  )
}

export default CheckoutOne;