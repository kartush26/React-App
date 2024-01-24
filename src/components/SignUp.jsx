import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation:'',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
        const userData = {
            user: {
              name: formData.name,
              email: formData.email,
              password: formData.password,
              password_confirmation: formData.password_confirmation,
            },
          };
      // Make API call to sign up using Axios
      const response = await axios.post('http://localhost:3001/signup', userData);

      // Handle response as needed
      console.log(response.data);

      // Optionally, redirect to login after successful sign-up
      navigate("/log_in");
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input
          type="password"
          name="password_confirmation"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
