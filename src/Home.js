import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation

function Home() {
  return (
    <div>
      <h1>Welcome to Our Job Platform</h1>
      
      {/* Login and Sign Up Links */}
      <div>
        <Link to="/login">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Sign Up
          </button>
        </Link>
      </div>

      {/* Other navigation buttons */}
      <div>
        <Link to="/post-job">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Post a Job
          </button>
        </Link>
        <Link to="/find-jobs">
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
            Find Jobs
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
