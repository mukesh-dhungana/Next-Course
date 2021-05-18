import React from "react";

const Card = ({ blog, onClick, onDelete, onEdit }) => {
  return (
    <>
      <div className="wrapper">
        <div className="delete" onClick={onDelete && (() => onDelete(blog.id))}>
          <span>X</span>
        </div>
        <div className="edit" onClick={onEdit && (() => onEdit(blog.id))}>
          <button className="edit-button">Edit</button>
        </div>
        <div className="card" onClick={onClick && onClick}>
          <div className="card-title">
            <h4>{blog.title}</h4>
          </div>
          <div className="card-body">
            <p>{blog.body}</p>
          </div>
        </div>
      </div>
    </>
  );
};

Card.defaultProps = {
  blog: {
    title: "This is Blog Title",
    body: "This is Blog Body.",
  },
};

export default Card;
