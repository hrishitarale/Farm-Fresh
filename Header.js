import React, {useState} from 'react';
import './Header.css';
import logo3 from './img/logo3.png';
import { HiShoppingCart } from "react-icons/hi";
import {FaUserAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';
function Header () {
    const [showCategories, setShowCategories] = useState(false);
    
    const toggleCategories = (e) => {
        if (e.type === "mouseenter"){
            setShowCategories(true);
        } else{
            setShowCategories(false);
        }
    };

    const categoryMenu ={
        vegetables:[
            {name:"Vegetables", link:"/Vegetable"},
            {name:"Exotic Vegetables" },
        ],
        fruits:[
            {name:"Fruits", link:"/Fruits"},
            {name:"Exotic Fruits" },
        ],
    };

    return(
    <>
    <div className='header'>
        <Link to="/">
            <img className='header_logo' src={logo3} alt='logo' /> 
        </Link>
        <div className='category_list' onMouseEnter={toggleCategories} onMouseLeave={toggleCategories}>
            <div className='category_module'>
                <span className='category_module_title'>Categories</span>
                <div className='category_dropdown'>
                    {showCategories && 
                        Object.keys(categoryMenu).map((category) =>(
                            <ul className='category_list_items' key={category}>
                            <li className='category_list_items'>
                                <Link to={`/${category}`}>{category}</Link>{" "} 
                                <ul className='sub_category_list'>
                                    {categoryMenu[category].map((subCategory) =>(
                                        <li className='sub_category_list_items' key={subCategory.name}>
                                            <Link to={subCategory.link}>{subCategory.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                        ))}
                </div>  
            </div> 
        </div>
        <div className='header_nav'>
            <Link to='/ScheduleWeekPage'>
                <div className='header_option'>
                     <span className='header_optionLineTwo'>
                        Schedule Week
                     </span>
                </div>
            </Link>
            <Link to='/LoginPage'>
                <div className='header_option'>
                     <span className='header_optionUser'>
                        <FaUserAlt />
                     </span>
                </div>
            </Link>
            {/* <div className='header_option'>
                <span className='header_optionLineOne'>
                    Returns
                </span>
                <span className='header_optionLineTwo'>
                    & Orders
                </span>
            </div> */}
            <Link to="/Cart" >
                <div className='header_optionBasket'>
                    <span className='header_Basket'>
                        <HiShoppingCart />  
                    </span>   
                </div>
            </Link>
        </div>
    </div>
    </>
    )
    

}
export default Header;


