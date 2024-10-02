import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample data for cart items (replace with actual cart state from context or Redux)
const initialCartItems = [
  {
    id: 1,
    title: 'Fitness Tracker',
    price: 29.99,
    quantity: 1,
    image: 'https://plus.unsplash.com/premium_photo-1681433386259-1ea114ca923d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 2,
    title: 'Drone',
    price: 91.49,
    quantity: 3,
    image: 'https://images.unsplash.com/photo-1486611367184-17759508999c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D',
  }
];

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Function to update quantity
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent negative quantity
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Function to remove item
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6 mt-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center p-4 bg-white shadow-lg rounded-lg">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg mr-4" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-700">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{`$${item.price.toFixed(2)}`}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                    className="border border-gray-300 w-16 text-center py-1 rounded focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-100 p-4 mt-6 rounded-lg shadow-sm">
            <div className="flex justify-between">
              <h3 className="text-xl font-bold text-gray-800">Total:</h3>
              <p className="text-xl font-semibold text-gray-800">{`$${totalPrice.toFixed(2)}`}</p>
            </div>
          </div>

          <Link to="/checkout">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg mt-6 w-full text-center font-semibold hover:bg-blue-600 transition-colors">
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default ShoppingCartPage;
