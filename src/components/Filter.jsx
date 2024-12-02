import React from "react";
import { motion } from "framer-motion";

function Filter({ onFilterChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <motion.div
      className="w-full lg:w-1/4 bg-white p-4 shadow-lg rounded-lg flex flex-col space-y-4"
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
    >
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Color</label>
        <select
          name="color"
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          <option value="">All</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Price (Up to)</label>
        <input
          type="number"
          name="price"
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Category</label>
        <select
          name="category"
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          <option value="">All</option>
          <option value="clothing">Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="home">Home</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Size</label>
        <select
          name="size"
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          <option value="">All</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Availability</label>
        <select
          name="available"
          onChange={handleInputChange}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          <option value="">All</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </motion.div>
  );
}

export default Filter;
