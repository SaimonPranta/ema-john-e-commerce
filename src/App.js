import { Routes, Route, Link } from "react-router-dom";
import Header from './conponents/Header/Header';
import Shop from './conponents/Shop/Shop.js';
import Inventory from './conponents/Inventory/Inventory';
import NotFound from './conponents/NotFound/NotFound.js';
import './App.css';
import ProductDetails from "./conponents/ProductDetails/ProductDetails";
import OrderReview from "./conponents/OrderReview/OrderReview";
import OrderImage from "./conponents/OrderImage/OrderImage";
import { useEffect, useState } from "react";
import { getStoredCart } from "./New folder/utilities/fakedb";
import EmptyReview from "./conponents/EmptyReview/EmptyReview";

function App() {

  const [cart, setCart]=useState({});
  const keys = Object.keys(cart);
  useEffect(()=>{
    setCart(getStoredCart())
  }, [])


  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/shop" element={<Shop></Shop>}></Route>
       {
         keys.length > 0 &&  <Route path="/review" element={<OrderReview></OrderReview>}></Route>
       }
       {
         keys.length === 0 &&  <Route path="/review" element={<EmptyReview></EmptyReview>}></Route>
       }
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/orderImage" element={<OrderImage></OrderImage>}></Route>
        <Route path="/product/:productKey" element={<ProductDetails></ProductDetails>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
