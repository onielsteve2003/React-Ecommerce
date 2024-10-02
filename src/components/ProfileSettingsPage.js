import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

const ProfileSettingsPage = () => {
  // User state
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    password: '',
  });

  const [message, setMessage] = useState('');

  // Favorite Products state
  const [favoriteProducts, setFavoriteProducts] = useState([
    { id: 1, name: 'Wallet', price: 29.99, image: 'https://images.unsplash.com/photo-1629958513881-a086d21383cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMHdhbGxldHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 2, name: 'Fitness Tracker', price: 49.99, image: 'https://plus.unsplash.com/premium_photo-1681433386259-1ea114ca923d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D' },
    { id: 3, name: 'Kettle', price: 19.99, image: 'https://plus.unsplash.com/premium_photo-1663133646496-f74226a2b263?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWMlMjBrZXR0bGV8ZW58MHx8MHx8fDA%3D' },
  ]);

  // Order History state
  const [orderHistory, setOrderHistory] = useState([
    { id: 1, date: '2024-08-20', total: 59.99, status: 'Delivered' },
    { id: 2, date: '2024-09-05', total: 29.99, status: 'Pending' },
  ]);

  // Address Book state
  const [addressBook, setAddressBook] = useState([
    { id: 1, name: 'Home', address: '123 Main St, Anytown, USA' },
    { id: 2, name: 'Office', address: '456 Corporate Ave, Business City, USA' },
  ]);

  // Function to remove a product from favorites
  const removeFavorite = (id) => {
    setFavoriteProducts(favoriteProducts.filter((product) => product.id !== id));
  };

  // Function to remove an address
  const removeAddress = (id) => {
    setAddressBook(addressBook.filter((address) => address.id !== id));
  };

  // Function to edit an address
  const editAddress = (id) => {
    const addressToEdit = addressBook.find((address) => address.id === id);
    const newAddress = prompt('Enter the new address:', addressToEdit.address);
    if (newAddress) {
      setAddressBook(
        addressBook.map((address) =>
          address.id === id ? { ...address, address: newAddress } : address
        )
      );
    }
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setMessage('Your password has been updated successfully.');
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-4xl mt-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Profile Settings</h2>
      
      {/* Profile Information Section */}
      <div className="mb-6 border-b pb-4">
        <h3 className="text-xl font-semibold mb-3 text-gray-700">Profile Information</h3>
        <div className="text-lg">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
        <button
          className="text-black mt-2 hover:underline"
          onClick={() => alert('Profile editing feature is under development')}
        >
          <FontAwesomeIcon icon={faPencilAlt} className="text-black" /> Edit Profile
        </button>
      </div>

      {/* Change Password Section */}
      <div className="mb-6 border-b pb-4">
        <h3 className="text-xl font-semibold mb-3 text-gray-700">Change Password</h3>
        <form onSubmit={handlePasswordChange}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1" htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            Update Password
          </button>
          {message && <p className="mt-4 text-green-600">{message}</p>}
        </form>
      </div>

      {/* Favorite Products Section */}
      <div className="mb-6 border-b pb-4">
        <h3 className="text-xl font-semibold mb-3 text-gray-700">Favorite Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteProducts.length > 0 ? (
            favoriteProducts.map((product) => (
              <div key={product.id} className="border rounded-lg shadow p-4">
                <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2 rounded" />
                <h4 className="font-semibold">{product.name}</h4>
                <p>${product.price.toFixed(2)}</p>
                <button
                  className="text-black mt-2 hover:underline"
                  onClick={() => removeFavorite(product.id)}
                >
                  <FontAwesomeIcon icon={faTrash} className="text-black" /> Remove
                </button>
              </div>
            ))
          ) : (
            <p>No favorite products added yet.</p>
          )}
        </div>
      </div>

      {/* Order History Section */}
      <div className="mb-6 border-b pb-4">
        <h3 className="text-xl font-semibold mb-3 text-gray-700">Order History</h3>
        {orderHistory.length > 0 ? (
          <table className="min-w-full bg-white border rounded-lg shadow-md">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left">Order ID</th>
                <th className="border px-4 py-2 text-left">Date</th>
                <th className="border px-4 py-2 text-left">Total</th>
                <th className="border px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((order) => (
                <tr key={order.id}>
                  <td className="border px-4 py-2">{order.id}</td>
                  <td className="border px-4 py-2">{order.date}</td>
                  <td className="border px-4 py-2">${order.total.toFixed(2)}</td>
                  <td className="border px-4 py-2">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>You have no recent orders.</p>
        )}
      </div>

      {/* Address Book Section */}
      <div className="mb-6 border-b pb-4">
        <h3 className="text-xl font-semibold mb-3 text-gray-700">Address Book</h3>
        <ul className="space-y-4">
          {addressBook.length > 0 ? (
            addressBook.map((address) => (
              <li key={address.id} className="flex items-center justify-between border rounded p-4">
                <div>
                  <strong>{address.name}:</strong> {address.address}
                </div>
                <div className="flex space-x-4">
                  <button
                    className="text-black hover:underline"
                    onClick={() => editAddress(address.id)}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} className="text-black" /> Edit
                  </button>
                  <button
                    className="text-black hover:underline"
                    onClick={() => removeAddress(address.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} className="text-black" /> Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>No addresses saved in your address book.</p>
          )}
        </ul>
      </div>

      {/* Logout Section */}
      <div className="mt-6 text-center">
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-900">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
