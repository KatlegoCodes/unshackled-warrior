import React from "react";
import { motion } from "framer-motion";
import background from "../assets/background.jpg";

export const Hero = () => {
  return (
    <section
      id="#Home"
      className="bg-cover bg-center h-screen w-full flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="mt-16 flex flex-col items-center justify-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:text-8xl sm:text-7xl  font-bold text-lime-400 text-center drop-shadow-lg"
        >
          ELEVATE YOUR WARRIOR SPIRIT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="md:text-3xl sm:text-2xl sm:max-w-md sm:mt-10 text-center md:max-w-2xl text-gray-300 mt-6 drop-shadow-lg"
        >
          Premium Christian & gym-wear designed for the bold, the disciplined,
          and the unstoppable.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-12 py-3 px-6 text-gray-900 bg-lime-400 rounded-lg font-semibold hover:bg-lime-600 hover:scale-105 transition duration-300 drop-shadow-lg"
        >
          Shop Now
        </motion.button>
      </div>
    </section>
  );
};
