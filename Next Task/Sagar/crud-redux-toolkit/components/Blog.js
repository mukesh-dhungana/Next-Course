import React from "react";
import { deleteBlog, editToggle } from "../redux/slice";
// import  from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";

// import { shallowEqual, useSelector } from "react-redux";

const Blog = ({
  blog: { title, description, user, id },

  setEditData,
}) => {
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.BLOGS.editMode);
  // console.log("eee", edit);
  console.log("id", dispatch(deleteBlog));

  const onEditHandler = (e) => {
    setEditData({ id, user, title, description });
    dispatch(editToggle(edit));
  };

  return (
    <div>
      <h3>
        {title}
        <span>
          <button onClick={() => dispatch(deleteBlog({ id }))}>
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
