import React from "react";
import "./ExoticVegetable.css";
import Header from "./Header";
import Footer from "./Footer";
import Product from "./Product";
import passion_fruit from "./img/passion_fruit.png";
import avocado from "./img/avocado.png";
import berry from "./img/berry.png";
import lichi from "./img/lichi.png";
import mangosteen from "./img/mangosteen.png";
import cashew_apple from "./img/cashew_apple.png";
import persimmon from "./img/Persimmon.png";
import dragon_fruit from "./img/dragon_fruit.png";
const ExoticFruits = () =>{
    return(
        <div className='main_container'>
        <Header />
        
        <div className='product_row'>
            <Product id="400" title='Avocado' price={275.00} image={avocado}   />
            <Product id="401" title='Lychees' price={390.00} image={lichi} />
            <Product id="402" title='Passion Fruit' price={140.00} image={passion_fruit} />
            <Product id="403" title='Blue Berry' price={375.00} image={berry}  />
        </div>
        <div className='product_row2'>
            <Product id="404" title='Persimmon' price={980.00} image={persimmon}  />
            <Product id="405" title='Dragon Fruit' price={180.00} image={dragon_fruit}/>
            <Product id="406" title='Mangosteen' price={835.00} image={mangosteen}/>
            <Product id="407" title='cashew apple' price={900.00} image={cashew_apple}/>
        </div>
        <Footer />
    </div>
    )
}
 export default ExoticFruits;