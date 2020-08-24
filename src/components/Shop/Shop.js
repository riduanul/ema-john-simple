import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css';
import Product from '../Product/Product.js';
import Cart from '../Cart/Cart.js';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [Products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    
    const handleAddProduct = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        
        <div className="shop-container">
           <div className="product-container">
                
                {
                   Products.map(pd => <Product handleAddProduct= {handleAddProduct} product={pd}></Product>)
                }
            </div> 
        <div className="cart-container">
           <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Shop;