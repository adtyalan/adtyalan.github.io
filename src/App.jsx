import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Portfolio from "./components/GraphicDesign";
import Photography from "./components/Photography";
import UIUXDesign from "./components/UIUXDesign";
import Web from "./components/Web";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graphic" element={<Portfolio />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/uiux" element={<UIUXDesign />} />
        <Route path="/web" element={<Web />} />
        {/* Add a 404 Not Found route if necessary */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
