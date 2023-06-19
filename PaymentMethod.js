import React, { useState } from 'react';
import './PaymentMethod.css';

function PaymentMethodPage() {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  const handleProceedToBuy = () => {
    // Add your logic here to handle the payment and navigate to the next page
    alert('Your payment is done!');
  
  };
  return (
    <div className="payment-method-page">
      <h3>Select Payment Method:</h3>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="credit-debit-card"
          checked={paymentMethod === 'credit-debit-card'}
          onChange={handlePaymentMethodChange}
        />
        Credit/Debit Card
      </label>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="upi"
          checked={paymentMethod === 'upi'}
          onChange={handlePaymentMethodChange}
        />
        UPI
      </label>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="cash-on-delivery"
          checked={paymentMethod === 'cash-on-delivery'}
          onChange={handlePaymentMethodChange}
        />
        Cash on Delivery
      </label>

      <button className="proceed-button" onClick={handleProceedToBuy}>
        Proceed to Buy
      </button>
    </div>
  );
}

export default PaymentMethodPage;
