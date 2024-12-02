import React, { useState } from "react";
import { motion } from "framer-motion";
import Filter from "./Filter";
import ProductList from "./ProductList";
import products from "../data/products";

function App() {
  const [filters, setFilters] = useState({
    color: "",
    price: "",
    category: "",
    size: "",
    available: "",
  });

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredProducts = products.filter((product) => {
    const matchesColor = filters.color ? product.color === filters.color : true;
    const matchesPrice = filters.price
      ? product.price <= parseInt(filters.price, 10)
      : true;
    const matchesCategory = filters.category
      ? product.category === filters.category
      : true;
    const matchesSize = filters.size ? product.size === filters.size : true;
    const matchesAvailability = filters.available
      ? product.available === (filters.available === "yes")
      : true;

    return (
      matchesColor &&
      matchesPrice &&
      matchesCategory &&
      matchesSize &&
      matchesAvailability
    );
  });

  return (
    <motion.div
      className="min-h-screen p-6 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">Product Filters</h1>
      <div className="flex flex-col gap-6 lg:flex-row">
        <Filter onFilterChange={handleFilterChange} />
        <ProductList products={filteredProducts} />
      </div>
    </motion.div>
  );
}

export default App;
