import React, { useEffect, useState } from 'react';

const categories = [
  { name: 'Electronics', image: 'https://images.unsplash.com/photo-1721332154191-ba5f1534266e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsZWN0cm9uaWNzfGVufDB8fDB8fHww' },
  { name: 'Fashion', image: 'https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  // Additional categories...
];

const CategoriesSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const displayedCategories = [
    categories[startIndex],
    categories[(startIndex + 1) % categories.length],
    categories[(startIndex + 2) % categories.length],
  ];

  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="flex justify-center space-x-6">
        {displayedCategories.map((category, index) => (
          <div
            key={index}
            className="w-1/4 text-center transform transition duration-500 hover:scale-105"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-4 text-lg font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
