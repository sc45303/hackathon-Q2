"use client";

import React, { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantitySelector: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
     <h3 className="text-lg font-medium">Quantity</h3>
    <div className="flex flex-wrap items-center gap-4 mt-6">
      
      {/* Quantity Selector */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
        <button
          onClick={decreaseQuantity}
          className="px-4 py-2 text-black font-bold rounded-l-full hover:bg-gray-200"
        >
          <FaMinus />
        </button>
        <span className="px-4 py-2">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="px-4 py-2 text-base  rounded-r-full hover:bg-gray-200 font-bold"
        >
          <FaPlus />
        </button>
      </div>

      {/* Add to Cart Button */}
      <div className="flex-grow ">
        <AddToCartButton />
      </div>
    </div>

    </>
  );
};

export default QuantitySelector;
