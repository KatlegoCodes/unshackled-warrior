import React, { useState } from "react";
import { ProductCard } from "../Components/ProductCard";
import { projectData } from "../assets/assets";
import { Filter, Search, Grid, List } from "lucide-react";

export const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  const categories = ["All", "T-shirts", "Hoodies", "Shorts", "Accessories"];

  return (
    <section className="bg-gray-950 min-h-screen text-white py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col justify-center items-center mb-12">
          <h1 className="text-4xl md:text-6xl mb-4 font-semibold text-center">
            Shop Collection
          </h1>
          <p className="text-lg text-gray-400 text-center max-w-2xl">
            Premium athletic wear engineered for performance and comfort
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:w-1/4">
            <div className="sticky top-28">
              {/* Category Filter */}
              <div className="bg-gray-900 border border-white/10 rounded-xl p-6 mb-6">
                <h2 className="font-semibold text-2xl mb-4 flex items-center gap-2">
                  <Filter size={20} />
                  Category
                </h2>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block rounded-lg p-3 cursor-pointer transition-all duration-200 ${
                        selectedCategory === category
                          ? "bg-lime-400 text-black shadow-lg shadow-lime-400/30"
                          : "hover:bg-gray-800 hover:shadow-md hover:shadow-lime-400/10"
                      }`}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter - Optional */}
              <div className="bg-gray-900 border border-white/10 rounded-xl p-6">
                <h2 className="font-semibold text-2xl mb-4">Price Range</h2>
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full accent-lime-400"
                />
                <div className="flex justify-between text-gray-400 mt-2">
                  <span>R0</span>
                  <span>R1000+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {/* Products Header with Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-semibold">
                  Showing {projectData.length} Products
                </h2>
                <p className="text-gray-400">
                  Category:{" "}
                  <span className="text-lime-400">{selectedCategory}</span>
                </p>
              </div>

              <div className="flex items-center gap-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="pl-10 pr-4 py-2 bg-gray-900 border border-white/10 rounded-lg focus:outline-none focus:border-lime-400 w-full sm:w-64"
                  />
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div
              className={`${
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "flex flex-col gap-4"
              }`}
            >
              {projectData.map((product) => (
                <ProductCard
                  key={product.id || product.name}
                  product={product}
                  variant={viewMode} // Pass view mode to ProductCard
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">
              <button className="px-4 py-2 bg-gray-900 border border-white/10 rounded-lg hover:bg-gray-800">
                Previous
              </button>
              <button className="px-4 py-2 bg-lime-400 text-black rounded-lg font-semibold">
                1
              </button>
              <button className="px-4 py-2 bg-gray-900 border border-white/10 rounded-lg hover:bg-gray-800">
                2
              </button>
              <button className="px-4 py-2 bg-gray-900 border border-white/10 rounded-lg hover:bg-gray-800">
                3
              </button>
              <button className="px-4 py-2 bg-gray-900 border border-white/10 rounded-lg hover:bg-gray-800">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
