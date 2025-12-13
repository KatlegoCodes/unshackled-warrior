import React from "react";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Footer } from "./Components/Footer";
import { FeaturedCollection } from "./Components/FeaturedCollection";

export const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <Footer />
    </div>
  );
};

export default App;
