import ProtectedRoute from './ProtectedRoute';
import FindJobs from './FindJobs';
import PostJob from './PostJob';
import Signup from './Signup';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';  // Import Login component

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />  {/* Login route */}
  <Route path="/signup" element={<Signup />} />
  <Route
    path="/post-job"
    element={
      <ProtectedRoute>
        <PostJob />
      </ProtectedRoute>
    }
  />
  <Route path="/find-jobs" element={<FindJobs />} />
</Routes>

      </div>
    </Router>
  );
}

export default App;