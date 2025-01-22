"use client";
import React from "react";

const AddToCartButton: React.FC = () => {
  const handleAddToCart = () => {
    alert("Item added to cart!");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full max-w-xs py-3 bg-black text-white hover:bg-gray-800 text-lg font-medium rounded-full"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
