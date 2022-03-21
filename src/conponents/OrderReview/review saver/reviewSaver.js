import React, { useEffect, useState } from 'react';
import {deleteFromDb, getStoredCart} from '../../New folder/utilities/fakedb';
import fakeDatat from '../../New folder/fakeData/products.json';
import Product from '../Product/Product';

const ProductReview = () => {
    const [cart, setCart] = useState({});
    const [products, setProducts]= useState([]);
    const keys = Object.keys(cart);
    useEffect(()=>{
        setCart(getStoredCart());
        setProducts(fakeDatat);

    },[]);


    
    // =============================
    // keys.map( key => {
    //     const product = products.find(pd => key ===  pd.key)
    //     product["quantity"] = cart[key];
    //     return product
    // })

    // =============================

    const newProduct = keys.map( key => {
        const product = fakeDatat.find(pd => key ===  pd.key)
        product["quantity"] = cart[key];
        return product
    })
   
    
    

    const removeHandeler = (key)=>{
        const finalProduct = newProduct.filter(pd => pd.key !== key);
        
        deleteFromDb(key)  
    }


    return (
        <div>
            {
            newProduct.map(pd => <Product product={pd} addCart={false} quantity={true} removeHandeler={removeHandeler} key={pd.key}></Product>)
            }
        </div>
    );
};

export default ProductReview;