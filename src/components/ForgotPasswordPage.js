import React, { useState } from 'react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    // Handle forgot password logic here (e.g., send email to server)
    console.log('Email submitted:', email);
    
    // Simulating success response
    setMessage('A password reset link has been sent to your email address.');
    setError(''); // Clear any previous errors
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 p-2 w-full rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-200 w-full"
          >
            Submit
          </button>
        </form>
        {message && <p className="mt-4 text-green-500 text-center">{message}</p>}
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
