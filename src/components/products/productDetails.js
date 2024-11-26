import React from 'react';
import { useParams } from 'react-router-dom';
import { products, retro } from '../data/productData';
import Footer from "../footer/footer";
import Header from "../header/header";


const ProductDetails = () => {
  const { id } = useParams();
  
  // Find the product by ID (search in both product arrays)
  const product = products.find((p) => p.id === parseInt(id)) || retro.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-red-500 mt-8">Product not found!</p>;
  }

  return (
    <div className="home-div">
    <div className="product-details-container max-w-4xl mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1">
          <img src={product.image} alt={product.name} className="w-full rounded-md shadow" />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg font-semibold text-gray-800 mb-2">{product.price}</p>
          <p className="text-gray-600 mb-6">This is a placeholder description for the product.</p>

          <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;
