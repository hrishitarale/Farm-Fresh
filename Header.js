import React, { useState } from 'react';
import './Header.css';
import logo3 from './img/logo3.png';
import { HiShoppingCart } from 'react-icons/hi';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  const [showCategories, setShowCategories] = useState(false);

  const toggleCategories = (e) => {
    if (e.type === 'mouseenter') {
      setShowCategories(true);
    } else {
      setShowCategories(false);
    }
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="header_logo" src={logo3} alt="logo" />
        </Link>
        <div className="header_nav">
          <Link to="/ScheduleWeekPage">
            <div className="header_option">
              <span className="header_optionLineTwo">Schedule Week</span>
            </div>
          </Link>
          <Link to="/Vegetable">
            <div className="header_option">
              <span className="header_optionLineTwo">Vegetable</span>
            </div>
          </Link>
          <Link to="/fruits">
            <div className="header_option">
              <span className="header_optionLineTwo">Fruits</span>
            </div>
          </Link>
          <Link to="/ExoticVegetable">
            <div className="header_option">
              <span className="header_optionLineTwo">Exotic Vegetables</span>
            </div>
          </Link>
          <Link to="/ExoticFruits">
            <div className="header_option">
              <span className="header_optionLineTwo">Exotic Fruits</span>
            </div>
          </Link>
          <Link to="/LoginPage">
            <div className="header_option">
              <span className="header_optionUser">
                <FaUserAlt />
              </span>
            </div>
          </Link>
          <Link to="/Cart">
            <div className="header_optionBasket">
              <span className="header_Basket">
                <HiShoppingCart />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
