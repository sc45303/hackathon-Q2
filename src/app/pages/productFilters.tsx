// "use client";

// import { useState } from "react";

// interface FilterProps {
//   onFilterChange: (filters: {
//     minPrice: number;
//     maxPrice: number;
//     colors: string[];
//   }) => void;
// }

// const colors = [
//   "#FF0000",
//   "#00FF00",
//   "#0000FF",
//   "#FFFF00",
//   "#800080",
//   "#FFFFFF",
// ];

// export default function ProductFilters({ onFilterChange }: FilterProps) {
//   const [priceRange, setPriceRange] = useState([0, 1000]);
//   const [selectedColors, setSelectedColors] = useState<string[]>([]);

//   const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = parseInt(event.target.value);
//     setPriceRange([0, newValue]);
//     onFilterChange({
//       minPrice: 0,
//       maxPrice: newValue,
//       colors: selectedColors,
//     });
//   };

//   const handleColorToggle = (color: string) => {
//     const newColors = selectedColors.includes(color)
//       ? selectedColors.filter((c) => c !== color)
//       : [...selectedColors, color];

//     setSelectedColors(newColors);
//     onFilterChange({
//       minPrice: priceRange[0],
//       maxPrice: priceRange[1],
//       colors: newColors,
//     });
//   };

//   return (
//     <div className="w-full md:w-64 p-4  rounded-lg  h-fit">
//       <h3 className="text-xl font-Bold mb-6">Filters</h3>

//       {/* Price Filter */}
//       <div className="mb-8">
//         <h4 className="font-medium mb-4">Price Range</h4>
//         <input
//           type="range"
//           className="w-full range "
//           min="0"
//           max="500"
//           value={priceRange[1]}
//           onChange={handlePriceChange}
//         />
//         <div className="flex justify-between text-sm mt-2">
//           <span>${priceRange[0]}</span>
//           <span>${priceRange[1]}</span>
//         </div>
//       </div>

//       {/* Color Filter */}
//       <div className="mb-8">
//         <h4 className="font-Bold mb-4">Colors</h4>
//         <div className="grid grid-cols-3 gap-3">
//           {colors.map((color) => (
//             <button
//               key={color}
//               className={`w-8 h-8 rounded-full border-2 transition-all ${
//                 selectedColors.includes(color)
//                   ? "border-black scale-110"
//                   : "border-gray-200 hover:scale-105"
//               }`}
//               style={{ backgroundColor: color }}
//               onClick={() => handleColorToggle(color)}
//               aria-label={`Select ${color} color`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";

interface FilterProps {
  onFilterChange: (filters: {
    minPrice: number;
    maxPrice: number;
    colors: string[];
    sizes: string[];
    dressStyles: string[];
  }) => void;
}

const colors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#800080",
  "#FFFFFF",
  "#000000",
];
const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];
const dressStyles = ["Casual", "Formal", "Party", "Gym"];

export default function ProductFilters({ onFilterChange }: FilterProps) {
  const [priceRange, setPriceRange] = useState([50, 200]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedDressStyles, setSelectedDressStyles] = useState<string[]>([]);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setPriceRange([50, newValue]);
    onFilterChange({
      minPrice: 50,
      maxPrice: newValue,
      colors: selectedColors,
      sizes: selectedSizes,
      dressStyles: selectedDressStyles,
    });
  };

  const handleColorToggle = (color: string) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];

    setSelectedColors(newColors);
    onFilterChange({
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      colors: newColors,
      sizes: selectedSizes,
      dressStyles: selectedDressStyles,
    });
  };

  const handleSizeToggle = (size: string) => {
    const newSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];

    setSelectedSizes(newSizes);
    onFilterChange({
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      colors: selectedColors,
      sizes: newSizes,
      dressStyles: selectedDressStyles,
    });
  };

  const handleDressStyleToggle = (style: string) => {
    const newDressStyles = selectedDressStyles.includes(style)
      ? selectedDressStyles.filter((s) => s !== style)
      : [...selectedDressStyles, style];

    setSelectedDressStyles(newDressStyles);
    onFilterChange({
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      colors: selectedColors,
      sizes: selectedSizes,
      dressStyles: newDressStyles,
    });
  };

  return (
    <div className="w-[410px] max-w-md  md:max-w-[300px] ">
      <h3 className="text-xl font-Bold mb-6">Filters</h3>

      {/* Price Filter */}
      <div className="mb-8">
        <h4 className="font-medium mb-4">Price Range</h4>
        <input
          type="range"
          className=" range min-w-[300px] "
          min="50"
          max="500"
          value={priceRange[1]}
          onChange={handlePriceChange}
        />
        <div className="flex justify-between text-sm mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Color Filter */}
      <div className="mb-8">
        <h4 className="font-bold mb-4">Colors</h4>
        <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
          {colors.map((color) => (
            <button
              key={color}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                selectedColors.includes(color)
                  ? "border-black scale-110"
                  : "border-gray-200 hover:scale-105"
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorToggle(color)}
              aria-label={`Select ${color} color`}
            />
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-8">
        <h4 className="font-bold mb-4">Size</h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className={`px-3 py-1 border rounded-full text-sm transition-all ${
                selectedSizes.includes(size)
                  ? "bg-black text-white"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => handleSizeToggle(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Dress Style Filter */}
      <div className="mb-8">
        <h4 className="font-bold mb-4">Dress Style</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {dressStyles.map((style) => (
            <button
              key={style}
              className={`px-3 py-1 border rounded-full text-sm transition-all ${
                selectedDressStyles.includes(style)
                  ? "bg-black text-white"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => handleDressStyleToggle(style)}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button
        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
        onClick={() =>
          onFilterChange({
            minPrice: priceRange[0],
            maxPrice: priceRange[1],
            colors: selectedColors,
            sizes: selectedSizes,
            dressStyles: selectedDressStyles,
          })
        }
      >
        Apply Filter
      </button>
    </div>
  );
}
