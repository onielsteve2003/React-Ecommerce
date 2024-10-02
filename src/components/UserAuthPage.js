import React, { useState } from 'react';

const UserAuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic here
      console.log('Login:', { email, password });
    } else {
      // Handle registration logic here
      if (password === confirmPassword) {
        console.log('Register:', { email, password });
      } else {
        alert("Passwords don't match!");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-darkGray mb-6">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-darkGray mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 p-3 w-full rounded focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-darkGray mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 p-3 w-full rounded focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
            />
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-darkGray mb-1" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="border border-gray-300 p-3 w-full rounded focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              />
            </div>
          )}
          <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded hover:bg-primaryDark transition-all duration-200 mb-4">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <p className="text-center text-sm text-darkGray">
          {isLogin ? 'Don’t have an account? ' : 'Already have an account? '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary font-semibold underline transition-colors duration-200"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
        {isLogin && (
          <p className="mt-4 text-center">
            <a href="/forgot-password" className="text-primary font-semibold underline transition-colors duration-200">
              Forgot Password?
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default UserAuthPage;
