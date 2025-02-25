import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Uzbekistan from "../pages/Navbar/Uzbekistan";
import World from "../pages/Navbar/world";
import Sport from "../pages/Navbar/Sport";
import Society from "../pages/Navbar/society";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Uzbekistan" element={<Uzbekistan />} />
      <Route path="/World" element={<World />} />
      <Route path="/Sport" element={<Sport />} />
      <Route path="/Society" element={<Society/>} />
    </Routes>
  );
};

export default Router;
