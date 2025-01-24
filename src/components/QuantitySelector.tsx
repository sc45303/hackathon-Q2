"use client"; // This ensures the component runs on the client side

import React from "react";

interface QuantitySelectorProps {
  onSelectQuantity: (quantity: number) => void; // Callback to pass selected quantity to parent
  initialQuantity?: number; // Optional initial quantity (default is 1)
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  onSelectQuantity,
  initialQuantity = 1,
}) => {
  const [quantity, setQuantity] = React.useState<number>(initialQuantity);

  // Increase quantity
  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onSelectQuantity(newQuantity); // Pass the new quantity to the parent
  };

  // Decrease quantity (minimum is 1)
  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onSelectQuantity(newQuantity); // Pass the new quantity to the parent
    }
  };

  // Handle manual input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
      onSelectQuantity(value); // Pass the new quantity to the parent
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleDecrease}
        className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        className="w-16 text-center border border-gray-300 rounded-lg focus:outline-none focus:border-black"
        min="1"
      />
      <button
        onClick={handleIncrease}
        className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
