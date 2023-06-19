import React from 'react';
import "./Fruits.css";
import Product from './Product';
import Pomegranate from './img/Pomegranate.png';
import apple1 from "./img/apple1.png";
import orange from "./img/orange.png";
import mango from "./img/mango.png"; 
import peru from './img/peru.png';
import Watermelon from './img/watermelon.png';
import Header from './Header';   
const Fruits = () => {
  return (
    <div className='fruits_main'>
        <Header />
        <div className='product_row'>
            <Product id="200" title='Pomegranate' price={70.00} image={Pomegranate}  />
            <Product id="201" title='Apple' price={140.00} image={apple1}  />
            <Product id="202" title='Orange' price={150.00} image={orange}  />
            <Product id="203" title='Mango' price={120.00} image={mango} />
        </div>
        <div className='product_row'>
            <Product id='204' title='Guava' price={150.00} image={peru} />
            <Product id='205' title='Watermelon' price={80} image={Watermelon} />
        </div>
    </div>
  )
}

export default Fruits
