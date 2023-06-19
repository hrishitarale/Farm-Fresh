import React from "react";
import "./ExoticVegetable.css";
import Header from "./Header";
import Footer from "./Footer";
import Product from "./Product";
import red_cabbage from './img/red_cabbage.png';
import cherry_tomato from "./img/cherry_tomato.png";
import Brocolli from "./img/Brocolli.png";
import Red_Peprika from "./img/Red_Peprika.png";
import yellow_pepper from "./img/yellow_pepper.png";
import musroom from "./img/mushroom.png";
import babycorn from "./img/babycorn.png";
import green_lettuce from "./img/green_lettuce.png";
import banner2 from './img/banner2.png';
const ExoticVegetable = () =>{
    return(
        <div className='main_container'>
        <Header />
        <img className='banner' src={banner2} alt="banner" />
        
        <div className='product_row'>
            <Product id="300" title='Brocolli' price={180.00}  image={Brocolli}  />
            <Product id="301" title='Red Bell Pepper' price={190.00} image={Red_Peprika} />
            <Product id="302" title="Yellow Bell Pepper" price={190.00} image={yellow_pepper} />
            <Product id="303" title='Button Mushroom' price={150.00} image={musroom}  />
        </div>
        <div className='product_row2'>
            <Product id="304" title='Red cabbage' price={220.00} image={red_cabbage}  />
            <Product id="305" title='Red Cherry Tomato' price={140.00} image={cherry_tomato} />
            <Product id="306" title='Baby Corn' price={210.00} image={babycorn} />
            <Product id="307" title='Green Lettuce' price={210.00} image={green_lettuce} />
        </div>
        <div className='product_row'>
            
        </div>
        <Footer />
    </div>
    )
}
 export default ExoticVegetable;