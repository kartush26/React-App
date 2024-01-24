// PostsList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo192 from '../assets/logo192.png'



  


const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
  async function fetchlist (){
    // Fetch all posts from your API using Axios
    axios.get('http://localhost:3001/api/posts')
      .then(response => {
        setPosts(response.data);
        
      })
      .catch(error => {
        setError(error);
        
      });
  }
  fetchlist()}, []); // Run this effect only once when the component mounts

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  
  const handleDelete = async (post) => {
    try {
      // Make a DELETE request to delete the post
      await axios.delete(`http://localhost:3001/api/posts/${post.id}`);
      // Call the index to update the post list
      const response = await axios.get('http://localhost:3001/api/posts');
      setPosts(response.data);
      
    } catch (error) {
      console.error('Error deleting post:', error);
      // Handle the error as needed
    }

}

  

  return (
    <div>
      <img src={logo192}/>
      <h2>All Posts</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post =>{
          return (
            <tr key={post.id}>
            <td><strong>{post.title}</strong></td>
            <td>{post.content}</td>
            <td>
              <Link to={`showlist/${post.id}`} className="btn btn-primary">
                Show Post
              </Link>
              <Link
                to= {`UpdatePost/${post.id}`}
                state={{ postObject: post }}
                className="btn btn-success"
              >
                Update Post
              </Link>
              <button onClick={() => handleDelete(post)} className="btn btn-danger">
               Delete
              </button>
            </td>
          </tr>
          )}
          )}
        </tbody>
      </table>

      <Link to="/addpost" className="btn btn-primary">
        Add Post
      </Link>
    </div>
  );
};

export default PostsList;
