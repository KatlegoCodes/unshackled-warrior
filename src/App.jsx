import React from "react";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Footer } from "./Components/Footer";
import { FeaturedCollection } from "./Components/FeaturedCollection";
import { Cta } from "./Components/Cta";

export const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <Cta />
      <Footer />
    </div>
  );
};

export default App;
