import React from "react";
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
        <h1 className="md:text-8xl sm:text-7xl  font-bold text-lime-400 text-center drop-shadow-lg">
          ELEVATE YOUR WARRIOR SPIRIT
        </h1>
        <p className="md:text-3xl sm:text-2xl text-center max-w-2xl text-gray-300 mt-6 drop-shadow-lg">
          Premium Christian & gym-wear designed for the bold, the disciplined,
          and the unstoppable.
        </p>

        <button className="mt-12 py-3 px-6 text-gray-900 bg-lime-400 rounded-lg font-semibold hover:bg-lime-600 hover:scale-105 transition duration-300 drop-shadow-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
};
