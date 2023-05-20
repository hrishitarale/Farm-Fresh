import React from 'react';
import './Vegetable.css';
import Product from './Product';
import potato from "./img/potato.png";
import gawar from "./img/gawar.png";
import flower from "./img/flower.png";
import karal from "./img/karal.png";
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
            <Product id="113" title="Flower" price={30.00} image={flower} />
            <Product id="114" title="Karal" price={30.00} image={karal} />
        </div>
        <div className='product_row'>
            <Product id="111" title='Potato' price={25.00} image={potato}  />
            <Product id="112" title='Cluster Beans' price={50.00} image={gawar}  />
            <Product id="113" title="Flower" price={30.00} image={flower} />
            <Product id="114" title="Karal" price={30.00} image={karal} />
        </div>
        <div className='product_row'>
            <Product id="111" title='Potato' price={25.00} image={potato}  />
            <Product id="112" title='Cluster Beans' price={50.00} image={gawar}  />
            <Product id="113" title="Flower" price={30.00} image={flower} />
            <Product id="114" title="Karal" price={30.00} image={karal} />
        </div>
        <div className='product_row'>
            <Product id="111" title='Potato' price={25.00} image={potato}  />
            <Product id="112" title='Cluster Beans' price={50.00} image={gawar}  />
            <Product id="113" title="Flower" price={30.00} image={flower} />
            <Product id="114" title="Karal" price={30.00} image={karal} />
        </div>
        <Footer />
    </div>
  )
}

export default Vegetable
