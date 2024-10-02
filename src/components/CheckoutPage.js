import React, { useState } from 'react';

const CheckoutPage = () => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    phone: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    billingAddress: '',
  });

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Order placed:', { shippingInfo, paymentInfo });
  };

  return (
    <div className="container mx-auto p-4 mt-12">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Shipping Information</h3>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={shippingInfo.name}
              onChange={handleShippingChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              value={shippingInfo.address}
              onChange={handleShippingChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={shippingInfo.phone}
              onChange={handleShippingChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Payment Information</h3>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handlePaymentChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div className="flex mb-4">
            <div className="mr-2 w-full">
              <label className="block mb-1" htmlFor="expirationDate">Expiration Date</label>
              <input
                type="text"
                name="expirationDate"
                id="expirationDate"
                value={paymentInfo.expirationDate}
                onChange={handlePaymentChange}
                required
                className="border border-gray-300 p-2 w-full"
                placeholder="MM/YY"
              />
            </div>
            <div className="w-full">
              <label className="block mb-1" htmlFor="cvv">CVV</label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                value={paymentInfo.cvv}
                onChange={handlePaymentChange}
                required
                className="border border-gray-300 p-2 w-full"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="billingAddress">Billing Address</label>
            <input
              type="text"
              name="billingAddress"
              id="billingAddress"
              value={paymentInfo.billingAddress}
              onChange={handlePaymentChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
          {/* Here you can display the items in the cart */}
          {/* Example static items; replace with dynamic items */}
          <div className="border border-gray-300 p-4">
            <p>Product 1: $20.00</p>
            <p>Product 2: $15.00</p>
            <p>Total: $35.00</p>
          </div>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-all">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
