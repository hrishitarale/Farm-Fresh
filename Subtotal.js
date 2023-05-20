import React,{ useEffect, useState }  from 'react'
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
//we are going to install a library named as react-currency format "npm install react-currency-format" It allows you to show money
import {useStateValue} from "./StateProvider";
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from './reducer';
import PaymentMethod from './PaymentMethod';

function Subtotal() {
  const navigate = useNavigate();
  const [{ cart }] = useStateValue();
  console.log(cart);

  const handleProceedToBuy = () => {
    // Add your logic here to handle the navigation to the payment method page
    // For example, you can use a routing library like React Router to navigate to the PaymentMethod component
    // Replace "YOUR_ROUTE_PATH" with the actual path for the payment method page
    navigate('/PaymentMethod');
  };

  return ( 
    <div className='subtotal'>
        <CurrencyFormat
          renderText={(value) => (
            <p>
                Subtotal ({cart?.length} Item): <strong>{value}</strong>
            </p>
          )}
          decimalScale={2}
          value={getCartTotal(cart)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₹ "}
        />
        
        <button onClick={()=> handleProceedToBuy()}>Proceed to Buy</button>
    </div>
  )
}

export default Subtotal;
