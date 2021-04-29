import React from 'react';
import "./checkout.css";
import Subtotal from "./subtotal";
import CheckoutProduct from "./checkoutProduct";
import { useStateValue } from "./stateprovider";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img
             className="checkout_ad"
             src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
             alt=""/>
            <div className="checkout_tile">
                <h3>Hello ,{!user? "Guest" : user.email} </h3>
                <h1>Your Shopping Basket</h1>
                {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
              ))}
            </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>


        </div>
    )
}

export default Checkout;
