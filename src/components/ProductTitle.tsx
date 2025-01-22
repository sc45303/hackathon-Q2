"use client";

import { useAppSelector } from "@/app/store/hooks";
import React from "react";
import Rating from "./ui/Rating";

const ProductDetails = ({ params }: { params?: { category?: string } }) => {
  // Safely retrieve products from Redux state
  const products = useAppSelector((state) => state.products);

  // Safely access `params` and `params.category`
  const category = params?.category;

  // Filter products based on the category (handle undefined cases gracefully)
  const bestSell = category
    ? products.filter((product) => product.category === category)
    : [];

  // Handle case when no products match the category
  if (bestSell.length === 0) {
    return <p>No products found in this category.</p>;
  }

  // Use the first product from the filtered list
  const product = bestSell[0];

  return (
    <div className="mb-6">
      {/* Product Title */}
      <h1 className="text-3xl font-bold">{product.title}</h1>

      {/* Rating */}
      <div className="flex items-center space-x-2 mt-2">
        <Rating rating={product.rating} />
        <span className="text-gray-600 text-sm">{bestSell.length} Reviews</span>
      </div>

      {/* Price Section */}
      <div className="flex items-center mt-4">
        <span className="text-2xl font-bold">${product.price}</span>
        {product.originalPrice && (
          <>
            <span className="text-gray-500 line-through ml-2">
              ${product.originalPrice}
            </span>
            <span className="text-red-600 ml-2">-{product.discount}%</span>
          </>
        )}
      </div>

      {/* Product Description */}
      <p className="text-gray-600 mt-4">{product.discrption}</p>
    </div>
  );
};

export default ProductDetails;
