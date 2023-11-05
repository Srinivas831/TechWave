import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SingleCoursePage from "./SingleCoursePage";
import { Checkout } from "../Pages/Checkout";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import { Blog } from "../Pages/Blog";
import { Courses } from "../Pages/Courses";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />}></Route>
      <Route path="/singlecourse" element={<SingleCoursePage />} />

      <Route path="/checkout" element={<Checkout />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AllRoutes;
