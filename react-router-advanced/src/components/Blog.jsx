// import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPost from "./BlogPost";

const Blog = () => {
  return (
    <Routes>
      <Route path="post/:postId" element={<BlogPost />} />
    </Routes>
  );
};

export default Blog;
