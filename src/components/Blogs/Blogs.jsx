import { useEffect, useState } from "react";

export const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <div>Blogs</div>;
};
