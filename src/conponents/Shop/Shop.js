import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


import './Shop.css';

import fakeProduct from '../../New folder/fakeData/products.json';
import { addToDb } from '../../New folder/utilities/fakedb';


const Shop = () => {
    // const firstTen = fakeProduct.slice(0, 10);
    const [product, setProduct] = useState([]);

    const shuffleAarray = array => {
        for(let i = array.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    const shuffleProduct = shuffleAarray(fakeProduct);
    
    useEffect(() => {
        setProduct(shuffleProduct);
    }, [])
    
    const productHandeler = (addProduct) => {
        addToDb(addProduct.key);
        window.location.reload()
    }
    return (
        <div className='tween-conatiner'>
            <div className="product-container">
                {
                    product.slice(0, 10).map(product => <Product product={product} productHandeler={productHandeler} addCart={true} key={product.key}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart product={product}></Cart>
            </div>

        </div>
    );
};

export default Shop;