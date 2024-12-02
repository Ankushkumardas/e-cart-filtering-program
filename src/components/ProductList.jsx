import React from "react";
import { motion } from "framer-motion";

function ProductList({ products }) {
  return (
    <div className="flex flex-wrap justify-start gap-6 w-full lg:w-3/4">
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
          <p className="text-sm text-gray-600 mb-1">Price: ${product.price}</p>
          <p className="text-sm text-gray-600 mb-1">Category: {product.category}</p>
          <p className="text-sm text-gray-600 mb-1">Size: {product.size}</p>
          <p className="text-sm text-gray-600">
            Available: {product.available ? "Yes" : "No"}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default ProductList;
