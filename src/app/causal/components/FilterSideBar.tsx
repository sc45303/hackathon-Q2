import React from "react";

const FilterSidebar = () => {
  return (
    <div className="w-full lg:w-[300px] p-4 border rounded-lg shadow-sm space-y-6 bg-white">
      {/* Category Filter */}
      <div>
        <h4 className="font-Bold text-lg mb-2">Category</h4>
        <ul className="space-y-1">
          {["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map(
            (category, index) => (
              <li
                key={index}
                className="text-gray-700 hover:text-black cursor-pointer"
              >
                {category}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Price Filter */}
      <div>
        <h4 className="font-bold text-lg mb-2">Price</h4>
        <div className="flex items-center space-x-2">
          <input
            type="range"
            className="w-full"
            min="50"
            max="200"
            defaultValue="100"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>$50</span>
          <span>$200</span>
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h4 className="font-bold text-lg mb-2">Colors</h4>
        <div className="flex flex-wrap gap-3">
          {[
            "#FF5722",
            "#FFC107",
            "#8BC34A",
            "#00BCD4",
            "#3F51B5",
            "#FFFFFF",
          ].map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full border"
              style={{
                backgroundColor: color,
                borderColor: color === "#FFFFFF" ? "#E5E7EB" : "transparent",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div>
        <h4 className="font-bold text-lg mb-2">Size</h4>
        <div className="grid grid-cols-3 gap-2">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className="border px-2 py-1 rounded text-sm text-center hover:bg-gray-100"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Dress Style Filter */}
      <div>
        <h4 className="font-bold text-lg mb-2">Dress Style</h4>
        <ul className="space-y-1">
          {["Casual", "Formal", "Party", "Gym"].map((style, index) => (
            <li
              key={index}
              className="text-gray-700 hover:text-black cursor-pointer"
            >
              {style}
            </li>
          ))}
        </ul>
      </div>

      {/* Apply Filter Button */}
      <button className="px-4 py-2 bg-black text-white rounded-md w-full hover:bg-gray-800">
        Apply Filter
      </button>
    </div>
  );
};

export default FilterSidebar;
