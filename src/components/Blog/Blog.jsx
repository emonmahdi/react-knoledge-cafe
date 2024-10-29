import PropTypes from "prop-types";

export const Blog = ({ blog }) => {
  console.log(blog);
  return <div>Blog</div>;
};

Blog.prototype = {
  blog: PropTypes.object.isRequired,
};
