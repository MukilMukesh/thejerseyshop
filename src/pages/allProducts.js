import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, retro } from '../components/data/productData';

const ProductList = () => {
  // Combine products and retro arrays
  const allProducts = [...products, ...retro];
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [productId]: size,
    }));
  };

  return (
    <div className="home-div">
      <div className="product-list-container w-10/12 mx-auto p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {allProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="product-card border rounded-lg p-4 shadow hover:shadow-md transition transform hover:scale-105"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="product-image w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Product Name */}
            <h2 className="product-name font text-xl text-gray-600 font-semibold mb-2 text-left">
              {product.name}
            </h2>

            {/* Product Price */}
            <p className="product-price font text-lg text-gray-500 mb-4 text-left">
              {product.price}
            </p>

            <div className="sizes flex gap-2 mb-4 text-left">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(product.id, size)}
                  className={`size-button px-3 py-1 text-sm border rounded-md ${selectedSizes[product.id] === size
                    ? 'bg-#718ba6 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Details Button */}
            <div className="flex justify-between items-center">
              <button
                className="product-button font text-white bg-blue-500 px-4 py-2 rounded transition hover:bg-blue-600"
                onClick={(e) => e.stopPropagation()} // Prevent navigation when clicking the button
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
