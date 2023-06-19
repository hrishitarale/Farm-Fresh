import React from 'react';
import './Vegetable.css';
import Product from './Product';
import potato from "./img/potato.png";
import gawar from "./img/gawar.png";
import flower from "./img/flower.png";
import karal from "./img/karal.png";
import cucumber from "./img/cucumber.png"
import cabage from "./img/cabage.png";
import shimla from "./img/shimla.png";
import tomato from "./img/tomato.png";
import Header from './Header';
import Footer from './Footer';
import banner2 from './img/banner2.png';
const Vegetable = () => {
  return (
    <div className='main_container'>
        <Header />
        <img className='banner' src={banner2} alt="banner" />
        <div className='product_row'>
            <Product id="111" title='Potato' price={25.00} image={potato}  />
            <Product id="112" title='Cluster Beans' price={50.00} image={gawar}  />
            <Product id="113" title="Cauliflower" price={30.00} image={flower} />
            <Product id="114" title="Bitter gourd (Karela)" price={40.00} image={karal} />
        </div>
        <div className='product_row2'>
            <Product id="115" title='cucumber' price={120.00} image={cucumber}  />
            <Product id="116" title='Cabage' price={80.00} image={cabage}  />
            <Product id="117" title="Capsicum" price={120.00} image={shimla} />
            <Product id="118" title="Tomato" price={90.00} image={tomato} />
        </div>
        <Footer />
    </div>
  )
}
export default Vegetable
