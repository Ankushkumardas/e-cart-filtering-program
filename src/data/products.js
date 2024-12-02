const products = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 500) + 50,
    category: ["clothing", "electronics", "home"][
      Math.floor(Math.random() * 3)
    ],
    color: ["red", "blue", "green", "black"][Math.floor(Math.random() * 4)],
    size: ["S", "M", "L"][Math.floor(Math.random() * 3)],
    available: Math.random() > 0.5,
    image: `https://via.placeholder.com/150?text=Product+${i + 1}`,
  }));
  
  export default products;
  