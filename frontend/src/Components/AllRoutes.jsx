import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
}

export default AllRoutes;
