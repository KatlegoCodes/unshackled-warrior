import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Shop } from "./Pages/Shop";
import { Cart } from "./Pages/Cart";
import { Footer } from "./Components/Footer";

export const App = () => {
  return (
    <div className="w-full">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
