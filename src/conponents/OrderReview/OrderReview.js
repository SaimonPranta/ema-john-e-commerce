import React, { useEffect, useState } from 'react';
import {getStoredCart} from '../../New folder/utilities/fakedb';
import fakeData from '../../New folder/fakeData/products.json';
import Product from '../Product/Product';

const OrderReview = () => {
    const [cart, setCart]=useState({});
    const [products, setProducts]=useState([]);
    
    let keys = Object.keys(cart);

    useEffect(()=>{
        setCart(getStoredCart());

        let filterProduct = keys.map(key =>{
            const product = fakeData.find( pd => pd.key === key)
            product['quantity'] = cart[key]
        return product
        })
        setProducts(filterProduct)
        
    }, [])
    
    
    const removeHandeler = ()=>{
        console.log('click')
    }
    console.log(products)
    return (
        <div>
            {
        products.map(pd => <Product product={pd} removeHandeler={removeHandeler}></Product>)
            }
        </div>
    );
};

export default OrderReview;