import React, { useState } from "react";
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
          <ShoppingCart className="text-white hover:text-lime-200 cursor-pointer" />

          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
