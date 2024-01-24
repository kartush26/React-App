import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdatePost = () => {
  const { postId } = useParams();

  const navigate = useNavigate();

  const location = useLocation();
  const [post, setPost] = useState({ post:{ title: "", content: "" }});
  const [error] = useState(null);

  useEffect(() => {
    // Retrieve the post object from the location state
    const { postObject } = location.state || {};
    if (postObject) {
      setPost(postObject);
    }
  }, [location]);

  const handleUpdate = async (a) => {
  a.preventDefault()
    
    let title = {
      post: {
        title: a.target.elements.title.value,
        content: a.target.elements.content.value,
      },
    };

    console.log("handleupdate");
    try {
      // Make a PUT request to update the post
      const res = await axios.put(
        `http://localhost:3001/api/posts/${postId}`,
        title
      );
      // Redirect back to the post list after updating
      
      navigate("/");
    } catch (error) {
      console.error("Error updating post:", error);
      // Handle the error as needed
    }
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Update Post</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={post.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            className="form-control"
            value={post.content}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Post
        </button>
        <Link to="/" className="btn btn-secondary">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default UpdatePost;
