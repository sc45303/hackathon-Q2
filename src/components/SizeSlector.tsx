"use client"; // This ensures the component runs on the client side

import React from "react";

interface SizeSelectorProps {
  onSelectSize: (size: string) => void; // Callback to pass selected size to parent
  sizes?: string[]; // Optional list of sizes (default is ["S", "M", "L", "XL"])
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  onSelectSize,
  sizes = ["S", "M", "L", "XL"],
}) => {
  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSize = e.target.value;
    onSelectSize(selectedSize); // Pass the selected size to the parent
  };

  return (
    <div>
      <p>Select Size:</p>
      <select
        onChange={handleSizeChange}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
      >
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SizeSelector;
