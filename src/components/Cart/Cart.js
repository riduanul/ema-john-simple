import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total,pdt) => total + pdt.price,0)
    let total = 0;
    for (let i = 0; i< cart.length; i++){
        let product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = (total/10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    function formatNumber(num){
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
             <h3>Order Summary</h3>
            <h4>Items ordered: {cart.length}</h4>
            <p>Product Price:{formatNumber(total)}</p>
            <p>Shipping Cost:{shipping}</p>
             <p>Tax + VAT: {tax}</p>
            <h3>Total Price:{grandTotal}</h3>
            <button className="cart-button">Review your order</button>
        </div>
    );
};

export default Cart;