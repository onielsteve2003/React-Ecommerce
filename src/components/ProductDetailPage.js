import React, { useState } from 'react';

// Sample product data (replace this with your actual product data)
const productData = {
  title: "Wireless Bluetooth Headphones",
  price: 79.99,
  description: "Experience high-quality sound with these wireless Bluetooth headphones, perfect for music lovers.",
  images: [
    "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
  ],
  specifications: {
    Weight: "250 g",
    Dimensions: "20 x 15 x 10 cm",
    Color: "Black",
  },
};

// Sample data for related products
const relatedProductsData = [
  { id: 0, title: "Portable Bluetooth Speaker", price: 49.99, image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 1, title: "Noise-Cancelling Headphones", price: 99.99, image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 2, title: "Smartphone Wireless Charger", price: 29.99, image: "https://images.unsplash.com/photo-1520287636485-66d0e25add79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhcmdlcnxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 3, title: "USB-C Headphones", price: 59.99, image: "https://images.unsplash.com/photo-1520287636485-66d0e25add79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhcmdlcnxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 4, title: "Multi-device Bluetooth Keyboard", price: 39.99, image: "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGlhbm98ZW58MHx8MHx8fDA%3D" },
];

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${productData.title} to cart`);
  };

  return (
    <div className="container mx-auto p-6 mt-12">
      <div className="flex flex-col md:flex-row">
        {/* Product Images Gallery */}
        <div className="flex flex-col md:w-1/2">
          <img src={selectedImage} alt={productData.title} className="w-full h-96 object-cover rounded-lg shadow-lg mb-4" />
          <div className="flex space-x-2">
            {productData.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1} of ${productData.title}`}
                className="w-24 h-24 object-cover rounded-md cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-2">{productData.title}</h2>
          <p className="text-lg text-gray-800 mb-4">{`$${productData.price.toFixed(2)}`}</p>
          <p className="mb-4 text-gray-700">{productData.description}</p>
          
          {/* Quantity Selector */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, e.target.value))}
              className="border border-gray-300 p-2 w-16 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              min="1"
              aria-label="Quantity"
            />
          </div>
          
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200"
            aria-label={`Add ${quantity} ${productData.title} to cart`}
          >
            Add to Cart
          </button>

          {/* Product Specifications */}
          <div className="mt-8">
            <h3 className="font-semibold text-lg">Specifications:</h3>
            <ul className="list-disc list-inside mt-2">
              {Object.entries(productData.specifications).map(([key, value]) => (
                <li key={key} className="text-gray-600">
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Related Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relatedProductsData.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md mb-2" />
              <h4 className="font-semibold text-lg">{product.title}</h4>
              <p className="text-gray-700">{`$${product.price.toFixed(2)}`}</p>
              <button className="bg-blue-600 text-white py-1 px-2 mt-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
