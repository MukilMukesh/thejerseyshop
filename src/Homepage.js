import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import TargetPage from "./pages/newarrivalpage";
import RetroPage from "../src/pages/retropage";
import { products, retro } from "./components/data/productData";
import MainCover from "./components/banners/Mainbanner";
import MainCover2 from "./components/banners/secondbanner";
import Cover3 from "./components/banners/Thirdbanner";

function Homepage() {
  return (
    <div className="home-div">
      <MainCover />
      <TargetPage />
      <MainCover2 />
      <RetroPage />
      <Cover3 />
    </div>
  );
}

export default Homepage;
