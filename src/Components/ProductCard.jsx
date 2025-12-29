import React from "react";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export const ProductCard = ({ product, showCategory = true }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      className="bg-gray-900 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition group border border-amber-50/10"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="relative bg-gray-700 rounded-xl overflow-hidden mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover hover:scale-105 transition duration-300"
        />
      </div>

      <h3 className="font-semibold text-lg text-white m-2">{product.name}</h3>

      {showCategory && (
        <p className="text-sm text-gray-400 m-2">{product.category}</p>
      )}

      <p className="mt-2 text-lg font-bold text-white m-2">R{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="flex items-center justify-center w-full mt-4 gap-2 bg-lime-400 active:bg-lime-200 text-black px-16 py-2 rounded-2xl font-semibold transition hover:scale-105 cursor-pointer"
      >
        <ShoppingCart size={18} />
        Add to cart
      </button>
    </motion.div>
  );
};
