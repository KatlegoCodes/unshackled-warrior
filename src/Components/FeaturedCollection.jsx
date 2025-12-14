import React from "react";
import { assets, projectData } from "../assets/assets";
import { ShoppingCart } from "lucide-react";
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
        {projectData.map((item) => {
          return (
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              key={item.name}
              className="bg-gray-900 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition group border border-amber-50/10"
            >
              <div className="relative bg-gray-700 rounded-xl overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <h3 className="font-semibold text-lg text-white ml-2 m-2">
                {item.name}
              </h3>
              <p className="text-sm text-gray-400 m-2">{item.category}</p>

              <p className="mt-2 text-lg font-bold text-white m-2">
                {item.price}
              </p>

              <button className="flex items-center mt-4 gap-2 bg-lime-400 text-black px-16 py-2 rounded-2xl font-semibold transition hover:scale-105">
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-20">
        <button className="text-white border border-white rounded-2xl py-2 px-8 text-sm hover:scale-105 transition duration-300 hover:border-lime-400 hover:text-lime-400">
          View Products
        </button>
      </div>
    </section>
  );
};
