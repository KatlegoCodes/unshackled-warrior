import React from "react";
import { Routes, Router, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Shop } from "./Pages/Shop";
import { Contact } from "./Pages/Contact";
import { Cart } from "./Pages/Cart";
import { Footer } from "./Components/Footer";
import { ScrollToTop } from "./Components/ScrollToTop";

export const App = () => {
  return (
    <div className="w-full">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
