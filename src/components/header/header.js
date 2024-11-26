import React, { useState } from 'react';
import '../header/header.css';

function Header({ products }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.trim();
    setSearchQuery(query);

    if (query) {
      const results = products.filter((product) =>
        product.name?.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div>
      {/* Small Header */}
      <div className="bg-gray-800 text-white text-sm py-2 text-center">
        <p>The Jersey Shop: Use MK100 for discount!!</p>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md mb-6">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
          {/* Logo */}
          <div className="font text-3xl uppercase font-bold text-gray-800">
            <p>The Jersey Shop</p>
          </div>

          {/* Search Bar */}
          <div className="relative flex flex-1 max-w-md mx-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search for products"
              className="flex-1 border border-gray-300 rounded-l-md py-2 px-3 focus:outline-none"
            />
            <button className="search-button font text-white px-4 rounded-r-md bg-blue-500 hover:bg-blue-600">
              Search
            </button>
            {/* Dropdown */}
            {filteredProducts.length > 0 && (
              <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {product.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Account Section */}
            <div className="flex items-center cursor-pointer">
              <img src="/others/user.png" alt="User" className="w-6 h-6" />
            </div>

            {/* Cart Section */}
            <div className="flex items-center cursor-pointer">
              <img src="/others/cart.png" alt="Cart" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
