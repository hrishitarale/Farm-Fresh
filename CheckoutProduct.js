import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, quantity }) {
  const [{ cart, subtotal }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // Remove the item from cart
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  };

  const incrementProduct = () => {
    dispatch({
      type: 'INCREMENT_PRODUCT',
      id: id,
    });
    // Update the subtotal
    const newSubtotal = subtotal + price;
    dispatch({
      type: 'UPDATE_SUBTOTAL',
      subtotal: newSubtotal,
    });
  };

  const decrementProduct = () => {
    if (quantity === 1) {
      dispatch({
        type: 'REMOVE_FROM_CART',
        id: id,
      });
    } else {
      dispatch({
        type: 'DECREMENT_PRODUCT',
        id: id,
      });
      const newSubtotal = subtotal - price;
      dispatch({
        type: 'UPDATE_SUBTOTAL',
        subtotal: newSubtotal,
      });
    }
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="/" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_quantity">
          {/* Increment and decrement button */}
          <button onClick={decrementProduct}>-</button>
          <h3>{quantity}</h3>
          <button onClick={incrementProduct}>+</button>
        </div>
        <button onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
