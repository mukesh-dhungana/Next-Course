import React from "react";
import { shallowEqual, useSelector } from "react-redux";

const Blog = ({
  blog: { title, description, user, id },
  dispatch,
  setEditData,
}) => {
  const edit = useSelector((state) => state.blogs.editMode, shallowEqual);
  console.log("eee", edit);

  const onEditHandler = (e) => {
    setEditData({ id, user, title, description });
    dispatch({
      type: "EDIT_TOGGLE",
      payload: { edit: edit },
    });
  };

  return (
    <div>
      <h3>
        {title}
        <span>
          <button
            onClick={() => dispatch({ type: "DELETE_BLOG", payload: { id } })}
          >
            Remove Post
          </button>
          <button onClick={(e) => onEditHandler(e)}>Edit</button>
        </span>
      </h3>
      <p>{description}</p>
      <small>{user}</small>
    </div>
  );
};

export default Blog;
