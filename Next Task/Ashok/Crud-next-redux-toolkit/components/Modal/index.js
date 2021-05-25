import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, editPost } from "../../redux/postSlice";
import ModalStyle from "../../styles/Modal.module.css";

function Modal({ type, post, onCloseClick }) {
  const [postData, setPostData] = useState({ ...post });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === "Add") {
      postData.id = Date.now();
      dispatch(addPost(postData));
    } else if (type === "Edit") {
      dispatch(editPost(postData));
    }
    await fetch("http://localhost:3000/api/posts", {
      method: `${type === "Add" ? "POST" : "PUT"}`,
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(postData),
    });
    onCloseClick();
  };

  return (
    <div className={ModalStyle.modal}>
      <div className={ModalStyle.modal_content}>
        <span className={ModalStyle.close} onClick={onCloseClick}>
          &times;
        </span>
        <h3>{type} post</h3>
        <form onSubmit={handleSubmit}>
          <div className="input_field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={postData.title}
              onChange={handleChange}
            />
          </div>
          <div className="input_field">
            <label htmlFor="detail">Detail</label>
            <input
              type="text"
              name="detail"
              id="detail"
              value={postData.detail}
              onChange={handleChange}
            />
          </div>
          <div className="input_field">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              id="author"
              value={postData.author}
              onChange={handleChange}
            />
          </div>
          <button type="submit">{type}</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
