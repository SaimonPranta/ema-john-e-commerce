import React from "react";
import { NavLink } from "react-router-dom";
import './Product.css';

const Product = (props) =>{
    const {img, name, seller, price, stock, key}= props.product;

    return(
        <div className="porduct-container">
            <div className="image">
                <img src={img} alt="logo" />
            </div>

            <div className="product-details">
                <div>
                    <NavLink to={"/product/"+key}>{name}</NavLink>
                     <p>by: {seller}</p>
                     <h5>${price}</h5>
                     {
                       stock > 0 &&  <span>only {stock} left in stock - order soon</span>
                     } <br></br>
                      {
                          props.quantity && <h6>Quantity: {props.product.quantity}</h6>
                      }
                     {
                        props.addCart && <button onClick={ ()=> props.productHandeler(props.product)}>add to cart</button>
                     }
                     {
                        props.removeHandeler && <button onClick={()=> props.removeHandeler(key)}>Remove</button>
                     }
                </div>
            </div>
        </div>
    )
}

export default Product;