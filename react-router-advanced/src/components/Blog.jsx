// import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPost from "./BlogPost";

const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      {/* Other blog-related components can be added here */}
      <Routes>
        <Route path="post/:postId" element={<BlogPost />} />
      </Routes>
    </div>
  );
};

export default Blog;
