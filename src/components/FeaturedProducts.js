import React from 'react';

const products = [
  {
    name: 'Smartphone',
    price: '$499',
    image: 'https://plus.unsplash.com/premium_photo-1680459838836-a8433c8f664e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Smartphone',
    price: '$499',
    image: 'https://plus.unsplash.com/premium_photo-1680459838836-a8433c8f664e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'Smartphone',
    price: '$499',
    image: 'https://plus.unsplash.com/premium_photo-1680459838836-a8433c8f664e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhvbmV8ZW58MHx8MHx8fDA%3D',
  },
];

const FeaturedProducts = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-lg font-bold text-gray-900 mb-4">{product.price}</p>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-lg font-medium hover:bg-blue-700 transition-all">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
