import React, {Component, useState, useEffect} from 'react';
import Shop from './Shop.jsx';
import CheckoutOne from './CheckoutOne.jsx';
import CheckoutTwo from './CheckoutTwo.jsx';
import CheckoutThree from './CheckoutThree.jsx';
import Confirm from './Confirm.jsx';


const App = () => {
  const [page, changePage] = useState('index');
  const [cart, changeCart] = useState([]);
  const [checkoutInfo, changeCheckoutInfo] = useState({
    name: '',
    address: {},
    payment: {}
  });

  return (
    <div className="main scene_element scene_element--fadein">
      <div className='navbar'>
        <span>
          {page === 'index' && <button className='button' onClick={()=>changePage('checkoutOne')}>Checkout</button>}
          {page !== 'index' && <button className='button' onClick={()=>changePage('index')}>Cancel</button>}
        </span>
      </div>
      {page === 'index' && <Shop />}
      {page === 'checkoutOne' && <CheckoutOne changePage={changePage}
      changeCheckoutInfo={changeCheckoutInfo}
      checkoutInfo={checkoutInfo}/>}
      {page === 'checkoutTwo' && <CheckoutTwo changePage={changePage}
      changeCheckoutInfo={changeCheckoutInfo}
      checkoutInfo={checkoutInfo}/>}
      {page === 'checkoutThree' && <CheckoutThree changePage={changePage}
      changeCheckoutInfo={changeCheckoutInfo}
      checkoutInfo={checkoutInfo}/>}
      {page === 'confirm' && <Confirm changePage={changePage}
      changeCheckoutInfo={changeCheckoutInfo}
      checkoutInfo={checkoutInfo}/>}

    </div>
  )
 }


export default App;