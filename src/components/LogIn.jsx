// Login.js

import React, { useState } from 'react';
import axios from 'axios';


const LogIn = () => {
  
  const [user,setUser] = useState({
    
    email: '',
    password: '',

});

  
const handleChange = (e) => {
  setUser({ ...user, [e.target.name]: e.target.value });
};

const handleLogin = async (e) => {
    e.preventDefault()
    try {
      debugger
      const response = await axios.post('http://localhost:3001/login', user);

      const { token } = response.data;

      // Save the token to local storage or a secure storage mechanism
      localStorage.setItem('token', token);

      // Notify the parent component that the user has successfully logged in
      
    } catch (error) {
      console.error('Login failed:', error.message);
      // Handle login error
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mt-4 mb-4">Login</h2>
          <form>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

