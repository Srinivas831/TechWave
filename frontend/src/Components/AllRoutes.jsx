import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SingleCoursePage from "./SingleCoursePage";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/singlecourse" element={<SingleCoursePage />} />
    </Routes>
  );
}

export default AllRoutes;
