import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import FeaturedProducts from './components/FeaturedProducts';
import ProductListingPage from './components/ProductListingPage';
import ProductDetailPage from './components/ProductDetailPage';
import ShoppingCartPage from './components/ShoppingCartPage';
import CheckoutPage from './components/CheckoutPage';
import UserAuthPage from './components/UserAuthPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import ProfileSettingsPage from './components/ProfileSettingsPage';
import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUsPage';

const HomePage = () => (
  <div>
    <HeroSection />
    <CategoriesSection />
    <FeaturedProducts />
  </div>
);

const App = () => {
  // Step 1: Manage cart state
  const [cartItems, setCartItems] = useState([]);

  // Step 2: Add item to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Step 3: Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header cartItems={cartItems} /> {/* Pass cartItems to Header */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage addToCart={addToCart} />} />
            <Route path="/products/:id" element={<ProductDetailPage addToCart={addToCart} />} />
            <Route path="/cart" element={<ShoppingCartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<UserAuthPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/settings" element={<ProfileSettingsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
