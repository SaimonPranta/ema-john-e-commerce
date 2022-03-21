import { Routes, Route, Link } from "react-router-dom";
import Header from './conponents/Header/Header';
import Shop from './conponents/Shop/Shop.js';
import Inventory from './conponents/Inventory/Inventory';
import NotFound from './conponents/NotFound/NotFound.js';
import './App.css';
import ProductDetails from "./conponents/ProductDetails/ProductDetails";
import OrderReview from "./conponents/OrderReview/OrderReview";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/review" element={<OrderReview></OrderReview>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/product/:productKey" element={<ProductDetails></ProductDetails>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
