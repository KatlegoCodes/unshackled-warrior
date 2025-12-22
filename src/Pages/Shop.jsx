import React from "react";
import { ProductCard } from "../Components/ProductCard";
import { projectData } from "../assets/assets";

export const Shop = () => {
  return (
    <section className="bg-gray-950 min-h-screen text-white py-20 px-6">
      <div>
        <div className="flex flex-col justify-center items-center my-10">
          <h1 className="text-6xl mb-5 font-semibold">Shop Collection</h1>
          <p className="text-lg text-gray-400 text-center max-w-lg">
            Premium athletic wear engineered for performance and comfort
          </p>
        </div>

        <div className="flex gap-10">
          <aside className="border border-white/20 w-64 h-[312px] p-4 rounded-lg mt-5">
            <h1 className="font-semibold text-2xl">Category</h1>

            <ul className="flex flex-col p-2 text-lg">
              <li className="hover:bg-lime-400 hover:text-black transition duration-200 block rounded-lg p-2 mb-1 cursor-pointer  ">
                All
              </li>
              <li className="hover:bg-lime-400 hover:text-black transition duration-200 block rounded-lg p-2 mb-1 cursor-pointer  ">
                T-shirts
              </li>
              <li className="hover:bg-lime-400 hover:text-black transition duration-200 block rounded-lg p-2 mb-1 cursor-pointer  ">
                Hoodies
              </li>
              <li className="hover:bg-lime-400 hover:text-black transition duration-200 block rounded-lg p-2 mb-1 cursor-pointer  ">
                Shorts
              </li>
              <li className="hover:bg-lime-400 hover:text-black transition duration-200 block rounded-lg p-2 mb-1 cursor-pointer  ">
                Accessories
              </li>
            </ul>
          </aside>

          <aside>
            <div>
              <p className="text-2xl mb-5">Showing Products</p>
            </div>

            <div className="grid grid-cols-3 w-4xl gap-6">
              {projectData.map((product) => {
                return <ProductCard key={projectData.id} product={product} />;
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
