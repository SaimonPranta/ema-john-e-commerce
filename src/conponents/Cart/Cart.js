import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../New folder/utilities/fakedb';
import './Cart.css';
import fakeData from '../../New folder/fakeData/products.json';


const Cart = () => {
    const [carts, setCarts] = useState({});
    let finalProducts = [];
    let totalPrice = 0;
    let shiping = 0;
    
    
    
    useEffect(()=>{
        setCarts(getStoredCart());
        
    },[]);

    // const product = keys.map(key => {
    //     const product = fakeData.find(pd => pd.key === key)
    //     product.quantity = carts[key];
    //     return product
    // })
    // setFakeproducts(product)


    
    

    function numberHandler(num){
        const pureNumber = num.toFixed(2);
        return pureNumber;
    };

    const keyss = Object.keys(carts);
    
    const products = keyss.map(key => {
        const newProduct = fakeData.find(pd => pd.key === key)
        newProduct['quantity'] = carts[key];
        return newProduct;
    });
    products.map(pd => { 
        for(let i = 1; i <= pd.quantity; i++){
            finalProducts = [...finalProducts, pd];
        }
    });

for(let i = 0; i < finalProducts.length; i++){
    totalPrice = totalPrice + finalProducts[i].price
}


if(200 < totalPrice){
    shiping = 0;
}else if(100 < totalPrice){
    shiping = 3;
}else if(1 < totalPrice){
    shiping = 7;
}

const beforTex = totalPrice + shiping;
const tex = beforTex * .10 ;
    
  

    
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p className='p-control'> Items: {products.length}</p>
            <p>Product Price: ${numberHandler(totalPrice)}</p>
            <p>Shippng & Handling: ${shiping}</p>
            <p>Total before tax: ${numberHandler(beforTex)}</p>
            <p>Estimate Tax: ${numberHandler(tex)}</p>
            <h4>Order Total: ${numberHandler(totalPrice + shiping + beforTex + tex)}</h4>
        </div>
    );
};

export default Cart;
