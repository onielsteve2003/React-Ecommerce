import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1555529669-2269763671c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg text-center max-w-xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white leading-tight">
          Discover Amazing Products
        </h1>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          Explore our latest collections and hottest deals curated just for you.
        </p>
        <Link to="/products">
          <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
