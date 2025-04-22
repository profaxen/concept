import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login (we’ll replace this with real validation after backend)
    localStorage.setItem('isLoggedIn', 'true');
    alert("Logged in successfully!");
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Login
        </button>
      </form>
      <p className="mt-4 text-center">Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link></p>
    </div>
  );
}

export default Login;
