/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

export const Blog = ({ blog, handleBookMark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author_name,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-12">
      <img src={cover} alt="" />

      <div className="flex justify-between items-center m-3">
        <div className="flex gap-3">
          <img src={author_img} width={"50px"} alt="" />
          <div>
            <h3>{author_name}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleBookMark(blog)}
            style={{ marginLeft: "5px" }}
          >
            {" "}
            <CiBookmark />{" "}
          </button>
        </div>
      </div>
      <h3 style={{ fontSize: "24px", fontWeight: "700", padding: "10px 0" }}>
        {title}
      </h3>
      <div>
        {hashtags.map((hash, index) => (
          <span key={index} style={{ padding: "5px" }}>
            #{hash}
          </span>
        ))}
      </div>
      <button
        onClick={() => handleMarkAsRead(id, reading_time)}
        className="underline mt-3"
      >
        Mark as Read
      </button>
    </div>
  );
};

Blog.prototype = {
  blog: PropTypes.object.isRequired,
};
