import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Product from "./Product";
import banner2 from './img/banner2.png'
const ExoticVegetable = () =>{
    return(
        <div className='main_container'>
        <Header />
        <img className='banner' src={banner2} alt="banner" />
        
        <div className='product_row'>
            <Product id="" title='Brocolli' price={25.00}   />
            <Product id="" title='Red Peprika' price={50.00}  />
            <Product id="" title="Purple Cabbage" price={30.00} />
            <Product id="" title="Karal" price={30.00} />
        </div>
        <div className='product_row'>
        
        </div>
        <div className='product_row'>
           
        </div>
        <div className='product_row'>
            
        </div>
        <Footer />
    </div>
    )
}
 export default ExoticVegetable;