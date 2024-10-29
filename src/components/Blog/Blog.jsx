/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

export const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author_name,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  console.log(blog);
  return (
    <div className="mb-12">
      <img src={cover} alt="" />
      <h3>{title}</h3>
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <img src={author_img} width={"50px"} alt="" />
          <div>
            <h3>{author_name}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
    </div>
  );
};

Blog.prototype = {
  blog: PropTypes.object.isRequired,
};
