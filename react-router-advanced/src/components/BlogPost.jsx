import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { postId } = useParams(); // gets the dynamic part of the URL
  return (
    <div>
      <h2>Blog Post Page</h2>
      <p>Blog Post ID: {postId}</p>
    </div>
  );
}

export default BlogPost;