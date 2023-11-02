import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SingleCoursePage from "./SingleCoursePage";
import { Checkout } from "../Pages/Checkout";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/singlecourse" element={<SingleCoursePage />} />
      <Route path="/checkout" element={<Checkout />}/>
    </Routes>
  );
}

export default AllRoutes;
