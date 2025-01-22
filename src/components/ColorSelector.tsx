"use client";
import React, { useState } from "react";

interface Color {
  name: string;
  colorCode: string;
}

const colors: Color[] = [
  { name: "Olive", colorCode: "#6B4226" },
  { name: "Green", colorCode: "#3B7F4B" },
  { name: "Navy", colorCode: "#2C3A47" },
];

const ColorSelector: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<Color>(colors[0]);

  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium">Select Colors</h3>
      <div className="flex items-center space-x-4 mt-2">
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => setSelectedColor(color)}
            className={`w-8 h-8 rounded-full border-2 ${
              selectedColor.name === color.name ? "border-black" : "border-gray-300"
            }`}
            style={{ backgroundColor: color.colorCode }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
