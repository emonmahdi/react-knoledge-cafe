/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Blog } from "../Blog/Blog";

export const Blogs = ({ handleBookMark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="md:w-2/3 p-16">
      <h2>Blogs {blogs.legnth}</h2>
      {blogs.map((blog) => (
        <Blog handleBookMark={handleBookMark} key={blog.id} blog={blog} />
      ))}
    </div>
  );
};
