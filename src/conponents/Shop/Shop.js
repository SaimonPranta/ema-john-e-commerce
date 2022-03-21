import React, { useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


import './Shop.css';

import fakeProduct from '../../New folder/fakeData/products.json';
import { addToDb } from '../../New folder/utilities/fakedb';


const Shop = () => {
    const [addProducts, setProducts] = useState([]);
    
    const firstTen = fakeProduct.slice(0, 10);
    const [product, setProduct] = useState(firstTen);
    const productHandeler = (addProduct)=>{
        //   let newProduct = [...addProducts, addProduct];
        //   setProducts(newProduct)
          addToDb(addProduct.key)
          
          
    }
    return (
        <div className='shop-conatiner'>
            <div className="product-container">
                {
                    product.map(product => <Product product={product} productHandeler={productHandeler} addCart={true} key={product.key}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
            
        </div>
    );
};

export default Shop;