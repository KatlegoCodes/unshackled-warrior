import React from "react";

export const FeaturedCollection = () => {
  return (
    <section
      id="#Shop"
      className="bg-gray-900 h-screen w-full flex flex-col items-center py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-5xl text-center font-semibold">
          Featured Collection
        </h2>
        <p className="md:text-2xl sm:text-xl text-gray-500 mt-6 font-light max-w-xl mx-auto text-center">
          Discover our top-selling pieces designed for peak perfomance
        </p>
      </div>
    </section>
  );
};
