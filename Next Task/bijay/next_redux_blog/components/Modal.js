import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStore } from "../redux";
import { EDIT } from "../redux/types";

const Modal = ({ setEdit, id, blogs }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const [data, setData] = useState({});
  useEffect(() => {
    const blog = blogs.find((x) => x.id === id);
    setData({
      title: blog.title,
      body: blog.body,
    });
  }, []);
  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    // const data = {
    //   [name]: value,
    // };
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    const blog = {
      id: id,
      title: input.title ? input.title : data.title,
      body: input.body ? input.body : data.body,
    };

    dispatch({
      type: EDIT,
      payload: blog,
    });
    setEdit(false)
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <div className="form-input">
            <input
              type="text"
              name="title"
              placeholder="Blog Title"
              defaultValue={data?.title}
              onChange={onChange}
            />
          </div>
          <div className="form-input">
            <input
              type="text"
              name="body"
              placeholder="Blog Body"
              defaultValue={data?.body}
              onChange={onChange}
            />
          </div>
          <button type="submit">SAVE</button>
          <button type="button" onClick={()=>setEdit(false)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
