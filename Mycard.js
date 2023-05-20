import React, {useState, useEffect} from 'react';
import './Mycard.css';
import { useStateValue } from './StateProvider';

function Mycard({id, title,image,price}) {
  const [{ cart }, dispatch] = useStateValue();
  const [weight, setWeight] = useState('Kg');
  const [currentPrice, setCurrentPrice] = useState(price);
  const weights = ['1 Kg','500 gm', '250 gm'];
  console.log('this is the cart')

  useEffect(() =>{
    if (weight==='1 Kg'){
      setCurrentPrice(price);
    } else if(weight==='500 gm'){
      setCurrentPrice(price / 2);
    }else if(weight==='250 gm'){
      setCurrentPrice(price / 4);
    }
  }, [weight]);

  const addToCart = () =>{
    //dispatch the item into data layer
    dispatch({
      type: 'ADD_TO_CART',
      item:{
        id:id,
        title: title,
        image: image,
        price: currentPrice,
        weight: weight
      },
    });
  };
  const handleWeightChange = (event) =>{
    setWeight(event.target.value);
  };
  return (
    <div className="carousel_product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>₹</small>
                <strong>{currentPrice}/</strong>
                <small>{weight}</small>
            </p>
        </div>
        <img src={image} alt="/" />
        <div className='product_options'>
          <label htmlFor='weight'>weight :</label>
          <select id='weight' value={weight} onChange={handleWeightChange}>
            {weights.map((option, index) =>(
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        
        <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default Mycard
