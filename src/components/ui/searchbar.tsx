import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  // Ensure that showSearch is false when the page is refreshed or loaded
  useEffect(() => {
    setShowSearch(false);
  }, []);

  const handleToggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="relative flex-1 max-w-3xl ml-4 lg:ml-0">
      {/* Mobile View */}
      <div className="lg:hidden">
        {!showSearch ? (
          // Search Icon Button
          <button
            className="p-2 bg-gray-100 rounded-full focus:outline-none"
            onClick={handleToggleSearch}
          >
            <Search className="text-gray-400 h-6 w-6" />
          </button>
        ) : (
          // Search Bar in Top Position
          <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md p-4 flex items-center">
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search for products..."
                className="w-full px-4 py-2 pl-10 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-black"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <button
                className="absolute  top-1/5 transform -translate-y-1/2 text-black"
                onClick={handleToggleSearch}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block relative">
        <input
          type="search"
          placeholder="Search for products..."
          className="px-4 py-2 pl-10 bg-gray-100 rounded-full focus:outline-none focus:ring-1 focus:ring-black w-[500px]"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
      </div>
    </div>
  );
};

export default SearchBar;
