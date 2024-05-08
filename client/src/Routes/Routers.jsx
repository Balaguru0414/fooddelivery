import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Buy from "../Pages/Buy/Buy";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default Routers;
