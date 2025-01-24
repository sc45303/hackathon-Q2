"use client"; // Ensure this is a client component

import React from "react";

interface AddToCartButtonProps {
  onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white w-[300px] py-2 rounded-lg"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
