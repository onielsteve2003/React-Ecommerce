import React, { useState, useEffect } from 'react';

const products = [
  { id: 1, name: 'Smartphone X Pro', price: 299.99, image: 'https://images.unsplash.com/photo-1613588718956-c2e80305bf61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnRwaG9uZSUyMFglMjBQcm98ZW58MHx8MHx8fDA%3D' },
  { id: 2, name: 'Running Shoes', price: 49.99, image: 'https://images.unsplash.com/photo-1529339944280-1a37d3d6fa8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww' },
  { id: 3, name: 'Bluetooth Speaker', price: 19.99, image: 'https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 4, name: 'Laptop Z 2024', price: 599.99, image: 'https://plus.unsplash.com/premium_photo-1675538078410-2cec60aa046c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGFwdG9wJTIwWiUyMDIwMjR8ZW58MHx8MHx8fDA%3D' },
  { id: 5, name: 'Wireless Earbuds', price: 39.99, image: 'https://images.unsplash.com/photo-1499914845977-69a48b1aea28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lyZWxlc3MlMjBlYXJib2RzfGVufDB8fDB8fHww' },
  { id: 6, name: 'Men’s Watch', price: 24.99, image: 'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
  { id: 7, name: 'Digital Camera', price: 159.99, image: 'https://images.unsplash.com/photo-1719937206491-ed673f64be1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y2FtZXJhfGVufDB8fDB8fHww' },
  { id: 8, name: 'Gaming Console', price: 499.99, image: 'https://images.unsplash.com/photo-1513599898445-1c34777500ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwY29uc29sZXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 9, name: 'Tablet A10', price: 299.99, image: 'https://plus.unsplash.com/premium_photo-1673968280716-ca0c00af8a39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV0fGVufDB8fDB8fHww' },
  { id: 10, name: 'Smartwatch', price: 89.99, image: 'https://plus.unsplash.com/premium_photo-1713795721832-0f33126b4abd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 11, name: 'Leather Wallet', price: 49.99, image: 'https://images.unsplash.com/photo-1629958513881-a086d21383cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMHdhbGxldHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 12, name: 'Electric Kettle', price: 39.99, image: 'https://plus.unsplash.com/premium_photo-1663133646496-f74226a2b263?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWMlMjBrZXR0bGV8ZW58MHx8MHx8fDA%3D' },
  { id: 13, name: 'Backpack R1', price: 29.99, image: 'https://plus.unsplash.com/premium_photo-1680371834671-26c3d8f0e0d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFja3BhZCUyMHIxfGVufDB8fDB8fHww' },
  { id: 14, name: '4K TV Ultra HD', price: 999.99, image: 'https://plus.unsplash.com/premium_photo-1683141392308-aaa39d916686?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NGslMjBUVnxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 15, name: 'Noise Cancelling Headphones', price: 149.99, image: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D' },
  { id: 16, name: 'Mountain Bike', price: 899.99, image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 17, name: 'Portable Power Bank', price: 14.99, image: 'https://images.unsplash.com/photo-1706275399494-fb26bbc5da63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG93ZXIlMjBiYW5rfGVufDB8fDB8fHww' },
  { id: 18, name: 'Coffee Maker', price: 79.99, image: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 19, name: 'Drone X5', price: 799.99, image: 'https://images.unsplash.com/photo-1486611367184-17759508999c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D' },
  { id: 20, name: 'Fitness Tracker', price: 55.99, image: 'https://plus.unsplash.com/premium_photo-1681433386259-1ea114ca923d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHx8MHx8fDA%3D' },
];

const ProductListingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState('popularity');
  const [filterCategory, setFilterCategory] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 8 : 9);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to handle adding products to the cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="flex flex-col md:flex-row mt-12">
      {/* Filter Sidebar */}
      <aside className="w-full md:w-1/4 p-4 bg-gray-200 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Filter by</h2>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Category</h3>
          <select
            className="border border-gray-300 rounded p-2 w-full focus:ring-2 focus:ring-blue-500 transition duration-200"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
          </select>
        </div>
      </aside>

      {/* Main Product Section */}
      <div className="w-full md:w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4">Products</h2>

        {/* Sorting Options */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <select
            className="border border-gray-300 rounded p-2 mb-4 md:mb-0 focus:ring-2 focus:ring-blue-500 transition duration-200"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="popularity">Sort by popularity</option>
            <option value="priceLowHigh">Sort by price: Low to High</option>
            <option value="priceHighLow">Sort by price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 text-center bg-white shadow-lg transition-transform transform hover:scale-105">
              <img src={product.image} alt={product.name} className="mb-4 h-40 w-full object-cover rounded" />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 transition duration-200"
          >
            Previous
          </button>
          <span className="mx-2">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 transition duration-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;