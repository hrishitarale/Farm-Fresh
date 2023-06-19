import React, { useEffect, useState } from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function Product({ id, title, image, price }) {
  const [{ cart }, dispatch] = useStateValue();
  const [weight, setWeight] = useState('Kg');
  const [currentPrice, setCurrentPrice] = useState(price);
  const [showWeightOptions, setShowWeightOptions] = useState(true);
  const [showPieceOptions, setShowPieceOptions] = useState(false); // new state variable

  const weights = ['1 Kg', '500 gm', '250 gm'];
  const pieces = ['1 Piece', '2 Pieces','3piece'];

  useEffect(() => {
    if (weight === '1 Kg') {
      setCurrentPrice(price);
    } else if (weight === '500 gm') {
      setCurrentPrice(price / 2);
    } else if (weight === '250 gm') {
      setCurrentPrice(price / 4);
    }
  }, [weight]);

  useEffect(() => {
    if (id === '205') {
      setShowWeightOptions(false);
      setShowPieceOptions(true); // set showPieceOptions to true when id is 205
    }
  }, [id]);

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: currentPrice,
        weight: weight,
      },
    });
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handlePieceChange = (event) => {
    const selectedPiece = event.target.value;
    
    if (selectedPiece === '1 Piece') {
      setCurrentPrice(price);
      setWeight('Kg');
    } else if (selectedPiece === '2 Pieces') {
      setCurrentPrice(price * 2);
      setWeight('Kg');
    } else if (selectedPiece === '3 Pieces') {
      setCurrentPrice(price * 3);
      setWeight('Kg');
    }
  };
  

  const scheduleWeek = () => {
    dispatch({
      type: 'SCHEDULE_WEEK',
      item: {
        id: id,
        title: title,
        image: image,
        price: currentPrice,
        weight: weight,
        scheduleweek: true,
      },
    });
  };

  return (
    <>
      <div className="product">
        <div className="product_info">
          <p>{title}</p>
          <p className="product_price">
            {showWeightOptions ? (
              <div>
                <small>₹ </small>
                <strong>{currentPrice}/</strong>
                <small>{weight}</small>
              </div>
            ) : showPieceOptions ? (
              <div>
                <strong>{price}/</strong>
                <select id="pieces" value={weight} onChange={handlePieceChange}>
                  {pieces.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div>
                <small>₹</small>
                <strong>{price}/</strong>
                <small>per piece</small>
              </div>
            )}
          </p>
        </div>
        <img src={image} alt="/" />
        {showWeightOptions && (
          <div className="product_options">
            <label htmlFor="weight">weight :</label>
            <select id="weight" value={weight} onChange={handleWeightChange}>
              {weights.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}

        <button className='addtocart' onClick={addToCart}>Add to cart</button>
        <button className='scheduleweek' onClick={scheduleWeek}>Schedule Week</button>
        <Link to={`/ProductDetails/${id}`}>
          <button className="moreinfo">More Information</button>
        </Link>
      </div>
    </>
  );
}

export default Product;
