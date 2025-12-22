import React from "react";
import { projectData } from "../assets/assets";
import { ProductCard } from "./ProductCard";
import { motion } from "framer-motion";

export const FeaturedCollection = () => {
  return (
    <section
      id="#Shop"
      className="bg-gray-900 h-full w-full flex flex-col items-center py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-5xl text-center font-semibold">
          Featured Collection
        </h2>
        <p className="md:text-2xl sm:text-xl text-gray-500 mt-6 font-light max-w-xl mx-auto text-center">
          Discover our top-selling pieces designed for peak perfomance
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-12 max-w-7xl mx-auto">
        {projectData.slice(0, 4).map((item) => (
          <ProductCard key={item.name} product={item} />
        ))}
      </div>

      <div className="mt-20">
        <button className="text-white border border-white rounded-2xl py-2 px-8 text-sm hover:scale-105 transition duration-300 hover:border-lime-400 hover:text-lime-400">
          View Products
        </button>
      </div>
    </section>
  );
};
