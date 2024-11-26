import React, { useState } from 'react';
import '../styles/newarrival.css';
import { products } from '../components/data/productData';
import { Link } from 'react-router-dom';

function TargetPage() {
  // State to track selected sizes for products
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [productId]: size,
    }));
  };

  return (
    <div className="App">
      <div className="webmain-div px-4 py-6 w-3/4 m-auto">
        <h1 className="font page-title text-4xl font-bold mb-6 text-center">New Arrivals</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
            to={`/product/${product.id}`}
            key={product.id}
          >
            <div key={product.id} className="product-card bg-white rounded-lg shadow-md p-4">
              <img
                src={product.image}
                alt={product.name}
                className="product-image w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="product-name font text-xl text-gray-600 font-semibold mb-2 text-left">{product.name}</h3>
              <p className="product-price font text-lg text-gray-500 mb-4 text-left">{product.price}</p>

              {/* Size Options */}
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

              {/* Add to Cart Button */}
              <button className="product-button font text-white bg-blue-500 px-4 py-2 rounded transition hover:bg-blue-600 flex text-left">
                Add to Bag
              </button>
            </div>
                  </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TargetPage;
