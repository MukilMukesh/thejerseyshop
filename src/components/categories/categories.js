import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { products } from '../data/productData';


function Category() {
    // State to track selected category
    const [selectedCategory, setSelectedCategory] = useState('Home');

    // React Router's navigation hook
    const navigate = useNavigate();

    // Handle category selection
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);

        // Navigate to ProductList when "All" is clicked
        if (category === 'All') {
            navigate('/allProducts'); // Assumes '/' is the route for ProductList
        }
        if (category === 'New') {
            navigate('/newarrivalpage'); // Assumes '/' is the route for ProductList
        }
        if (category === 'Retro') {
            navigate('/retropage'); // Assumes '/' is the route for ProductList
        }
        if (category === 'Home') {
            navigate('/Homepage'); // Assumes '/' is the route for ProductList
        }
    };

    // Filter products based on the selected category
    const filteredProducts = products.filter((product) => {
        if (selectedCategory === 'Home') return true;
        if (selectedCategory === 'All') return product.isAll;
        if (selectedCategory === 'New') return product.isNew;
        if (selectedCategory === 'Retro') return product.isRetro;
        return false;
    });

    return (
        <div className="category-container py-6">
            {/* Category Header */}
            <div className="category-header flex justify-center gap-4">
                {['Home', 'All', 'New', 'Retro'].map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className={`category-button px-4 py-2 rounded ${selectedCategory === category
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Category;
