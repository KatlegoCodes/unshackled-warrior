import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800">
      <div className="h-16 flex items-center justify-between px-6">
        <h1 className="text-3xl font-bold text-lime-400">UNSHACKLED WARRIOR</h1>

        <ul className="hidden md:flex gap-15 md:text-lg font-light text-white">
          <li>
            <a href="#Home" className="hover:text-lime-200">
              home
            </a>
          </li>
          <li>
            <a href="#Shop" className="hover:text-lime-200">
              shop
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-lime-200">
              contact
            </a>
          </li>
          <li>
            <a href="#About" className="hover:text-lime-200">
              about
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <ShoppingCart className="text-white hover:text-lime-200 cursor-pointer md:block hidden" />

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

              <a href="#Home" className="block text-white hover:text-lime-300">
                home
              </a>
              <a href="#Shop" className="block text-white hover:text-lime-300">
                shop
              </a>
              <a
                href="#Contact"
                className="block text-white hover:text-lime-300"
              >
                contact
              </a>
              <a
                href="#About"
                className="block text-white hover:text-lime-300 mb-5"
              >
                about
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
