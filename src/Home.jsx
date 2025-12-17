import React from "react";
import { Hero } from "../Components/Hero";
import { FeaturedCollection } from "../Components/FeaturedCollection";
import { Cta } from "../Components/Cta";

export const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <Cta />
    </>
  );
};
