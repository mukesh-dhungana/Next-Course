import React from "react";

function index({
  post: { title, detail, author } = {},
  removePost,
  editPost,
} = {}) {
  return (
    <div>
      <h3>
        {title}
        <span>
          <button onClick={removePost}>Remove Post</button>
        </span>
      </h3>
      <p>{detail}</p>
      <small>{author}</small>
      <button onClick={editPost}>Edit Post</button>
    </div>
  );
}

export default index;
