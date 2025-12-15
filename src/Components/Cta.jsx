import React from "react";
import background_image from "../assets/gym-3.jpg";

export const Cta = () => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <div className="absolute inset-0 bg-black/50 blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center text-white z-10">
        <h1 className="text-white text-7xl font-semibold">
          TRAIN WITH PURPOSE.
        </h1>

        <p className="text-center max-w-xl mt-8 mx-auto mb-10 text-gray-400 text-2xl drop-shadow-2xl">
          Faith-driven performance wear built for warriors who refuse to settle.
        </p>

        <div
          className="flex gap-6 justify-center"
          aria-label="Learn About Our Story"
        >
          <button className="text-gray-950 py-3 px-10 font-semibold bg-linear-to-br from-orange-500 to-orange-300 rounded-xl hover:scale-105 transform duration-300">
            Our Story
          </button>
        </div>
      </div>
    </section>
  );
};
