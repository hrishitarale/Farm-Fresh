import React from "react";
import { Link } from 'react-router-dom';
import Fruits from './img/Fruits.png';
import vegetables from './img/Vegetables.png';
import "./ProductCategory.css";
function ProductCategory(){
    return(
        <div className="main_category">
            <h2>Shop By Category</h2>
            <div className="product_category">
                <div className="wrap">
                <Link to="Vegetable">
                    <img src={vegetables} alt="vegetables" />
                    <p>Vegetables</p>
                </Link>
                </div>
                <div className="wrap">
                <Link to="Fruits">
                    <img src={Fruits} alt="fruits" />
                    <p>Fruits</p>
                </Link>
                </div>
                <div className="wrap">
                <Link to="ExoticVegetable">
                    <img src={vegetables} alt="exotic vegetables" />
                    <p>Exotic Vegetables</p>
                </Link>
                </div>
                <div className="wrap">
                <Link to="ExoticFruits">
                    <img src={Fruits} alt="exotic fruits" />
                    <p>Exotic Fruits</p>
                </Link>
                </div>
            </div>
        </div>
    );
}
export default ProductCategory;