import React from "react";
import { ShoppingCart } from "lucide-react";

export const ProjectCard = ({ item }) => {
  return (
    <div>
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

        <p className="mt-2 text-lg font-bold text-white m-2">{item.price}</p>

        <button className="flex items-center mt-4 gap-2 bg-lime-400 text-black px-16 py-2 rounded-2xl font-semibold transition hover:scale-105">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </motion.div>
    </div>
  );
};
