import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import IndexPage from './IndexPage';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevent default form submission
    const postData = {
      email,
      password,
    };

    try {
      console.log(email, password);
      const response = await axios.post("http://localhost:3001/api/v1/login", postData);
      console.log("Response from server:", response.data);
      alert("User login successfully!");
    } catch (error) {
      console.error("Error while login:", error.response ? error.response.data : error.message);
      alert("Failed to login user.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <IndexPage />

      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Login</h1>

        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 border border-gray-200">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Login
              </button>
            </div>

            <div>
              <p className="text-sm text-gray-600">
                Don&apos;t have an account?{' '}
                <span>
                  <Link to="/register" className="text-blue-500 hover:underline">
                    Register
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
