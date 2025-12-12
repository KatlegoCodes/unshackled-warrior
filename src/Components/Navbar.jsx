import React from "react";

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10">
      <div className="bg-gray-800 w-full h-15 flex items-center mx-auto justify-between">
        <div>
          <h1 className="text-lime-300 text-2xl ml-2 font-bold">
            UNSHACKLED WARRIOR
          </h1>
        </div>

        <ul className="flex gap-7 text-white mx-auto ">
          <li>
            <a href="#Home" className="hover:text-lime-300">
              Home
            </a>
          </li>
          <li>
            <a href="#Shop" className="hover:text-lime-300">
              Shop
            </a>
          </li>
          <li>
            <a href="#About" className="hover:text-lime-300">
              About
            </a>
          </li>
          <li>
            <a href="#Contact" className="hover:text-lime-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
