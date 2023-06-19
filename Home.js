import React from 'react'; 
import './Home.css';
import banner1 from './img/banner1.jpg';
import Product from './Product';
import potato from "./img/potato.png";
import gawar from "./img/gawar.png";
import flower from "./img/flower.png";
import karal from "./img/karal.png";
import Header from './Header';
import Footer from './Footer';
import Imagecarousel from './ImageCarousel';
import ProductCategory from './ProductCategory';
function Home() {
  return (
    <>
    <div className='main'>
      <Header />
      <div className='home'>
          <div className="home_container">
              <img className="home_image" src={banner1} alt="/" />
              <ProductCategory />
              <div className="home_row1">
              </div>
              <div className="home_row1">
                  <Product id="111" title='Potato' price={25.00} image={potato}  />
                  <Product id="112" title='Cluster Beans' price={50.00} image={gawar}  />
                  <Product id="113" title="Flower" price={30.00} image={flower} />
                  <Product id="114" title="Karal" price={30.00} image={karal} />
              </div>
              <div className="home_row2">
                <Imagecarousel />
              </div>
          </div>        
      </div>
    </div>
    <Footer />
    </>
  )
}
export default Home
