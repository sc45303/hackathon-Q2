"use client";

import React from "react";
import FilterSidebar from "./components/FilterSideBar";
import { useAppSelector } from "../store/hooks";
import ProductCard from "../components/productCard";

const Casual = () => {
  const products = useAppSelector((state) => state.products);

  // Define products per page for pagination purposes.
  const productsPerPage = 10;
  const displayedProducts = products.slice(0, productsPerPage);

  return (
    <div className="flex flex-col lg:flex-row gap-4 mt-9">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 bg-white p-4 rounded mt-16">
        <FilterSidebar />
      </aside>

      {/* Products Section */}
      <section className="w-full lg:w-3/4">
        <div className=" mb-6 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-Bold capitalize">Casual</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 font-satoshi">
          {displayedProducts.map((product: any, i) => (
            <ProductCard
              key={i}
              src={product.image[0]}
              title={product.name}
              rating={product.rating}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              priceAfterDiscount={
                product.price - (product.price * product.discount) / 100
              }
              category={product.category}
              slug={product.slug}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-8">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:bg-gray-100"
            disabled={true} // Disable for now, logic can be added for pages.
          >
            Previous
          </button>
          <span className="text-gray-600">Page 1 of 10</span>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Casual;
