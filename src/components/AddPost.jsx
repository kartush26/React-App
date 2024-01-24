// AddPost.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../css_components/Styles.css';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to create a new post
      const response = await axios.post('http://localhost:3001/api/posts', {
        title,
        content,
      });

      // Assuming the server responds with the newly created post
      

      // Clear the form fields
      setTitle('');
      setContent('');

      // Navigate back to the list of posts
      navigate('/');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <div className="Add-post">
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div >
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div >
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Post
        </button>
        <Link to="/" className="btn btn-secondary">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default AddPost;
