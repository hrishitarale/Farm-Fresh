import React from "react";
import './Cart.css';
import Header from "./Header";
import Subtotal from "./Subtotal";
import { useStateValue } from  "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Footer from "./Footer";
import Imagecarousel from "./ImageCarousel";
function Cart(){
    const [{ cart }, dispatch] = useStateValue();
    return(
        <>
        <Header />
        <div className="checkout">
            <div className="checkout_left">
                {/*banner image */}
                <div>
                    <h2 className="checkout_title">Shopping Cart</h2>
                    {/*checkout product */}
                    {/* impliment react flip for animation */}
                    {cart.map(item =>(
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        />
                        
                    ))}

                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
        <Imagecarousel />
        <Footer />
        </>
    );
}
export default Cart;