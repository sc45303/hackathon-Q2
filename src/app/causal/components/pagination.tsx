import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center mt-6">
      <button className="flex items-center text-sm font-medium text-gray-600">
        <FaChevronLeft className="mr-2" />
        Previous
      </button>
      <div className="space-x-2">
        {Array.from({ length: 5 }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 border rounded-md ${
              i === 0 ? "bg-black text-white" : "hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button className="flex items-center text-sm font-medium text-gray-600">
        Next
        <FaChevronRight className="ml-2" />
      </button>
    </div>
  );
};

export default Pagination;
