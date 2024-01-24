import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ShowList = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  
  const [error, setError] = useState(null);

  useEffect(() => {
   async function fetchData(){
      try {
        const response = await axios.get(`http://localhost:3001/api/posts/${postId}`);
        setPost(response.data);
        console.log(response)
      } catch (error) {
        console.error('Error fetching post details:', error);
        setError(error);
        
      }
    }
    fetchData()
    },[postId]);

    

  

  if (error) {
    return <p>Error fetching post details: {error.message}</p>;
  }

  const handleClosePost = () =>{
    
  }

  return (
    <div>
      <h2>Post Details</h2>
      <p><strong>Title:</strong> {post?.title}</p>
      <p><strong>Content:</strong> {post?.content}</p>
      
      <Link to={'/'} className="btn btn-primary">
        index
      </Link>
    </div>
  );
};

export default ShowList;
