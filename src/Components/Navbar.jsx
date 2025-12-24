import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800">
      <div className="h-16 flex items-center justify-between px-6">
        <Link to="/">
          <h1 className="text-3xl font-bold text-lime-400 font-['Saira_Stencil_One']">
            UNSHACKLED WARRIOR
          </h1>
        </Link>

        <ul className="hidden md:flex gap-15 md:text-lg font-light text-white">
          <li>
            <Link to="/" className="hover:text-lime-200">
              home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-lime-200">
              shop
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-lime-200">
              contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-lime-200">
              about
            </Link>
          </li>
        </ul>

        <div className=" relative flex items-center gap-4">
          <ShoppingCart className="text-white hover:text-lime-300 cursor-pointer " />

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-lime-400 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}

          <button
            className="text-white md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 md:hidden bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed right-0 top-0 h-full w-64 bg-gray-800 p-6 flex flex-col gap-6 md:hidden z-50"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="text-white self-end mb-4 cursor-pointer"
              >
                <X size={28} />
              </button>

              <Link
                to="/"
                className="block text-white hover:bg-lime-300 hover:text-gray-800 transition-colors duration-700 p-2 rounded-xl"
              >
                home
              </Link>
              <Link
                to="/shop"
                className="block text-white hover:bg-lime-300 hover:text-gray-800 transition-colors duration-700 p-2 rounded-xl "
              >
                shop
              </Link>
              <Link
                to="/contact"
                className="block text-white hover:bg-lime-300 hover:text-gray-800 transition-colors duration-700 p-2 rounded-xl"
              >
                contact
              </Link>
              <Link
                to="/about"
                className="block text-white hover:bg-lime-300 hover:text-gray-800 transition-colors duration-700 p-2 rounded-xl"
              >
                about
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
