"use client";
import React, { useState } from "react";

type Size = "Small" | "Medium" | "Large" | "X-Large";

const sizes: Size[] = ["Small", "Medium", "Large", "X-Large"];

const SizeSelector: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<Size>("Large");

  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium">Choose Size</h3>
      <div className="flex items-center space-x-4 mt-2">
        {sizes.map((size, index) => (
          <button
            key={index}
            onClick={() => setSelectedSize(size)}
            className={`px-4 py-2 rounded-full border ${
              selectedSize === size
                ? "bg-black text-white"
                : "bg-gray-100 text-black"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
