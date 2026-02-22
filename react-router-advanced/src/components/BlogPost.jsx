import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams(); // gets the dynamic part of the URL
  return (
    <div>
      <h2>Blog Post Page</h2>
      <p>Blog Post ID: {id}</p>
    </div>
  );
}

export default BlogPost;