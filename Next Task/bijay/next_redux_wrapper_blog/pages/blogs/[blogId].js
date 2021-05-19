import React from "react";

const Blog = () => {
  return (
    <>
      <div className="blog-container">
        <div className="action">
          <button className="btn edit-btn">EDIT</button>
          <button className="btn delete-btn" onClick={onDelete}>
            DELETE
          </button>
        </div>
        <Card blog={blog} />
      </div>
      <div className="back-link">
        <Link href="/blogs">GO BACK</Link>
      </div>
    </>
  );
};

export default Blog;
