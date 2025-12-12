import React from "react";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Footer } from "./Components/Footer";

export const App = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
