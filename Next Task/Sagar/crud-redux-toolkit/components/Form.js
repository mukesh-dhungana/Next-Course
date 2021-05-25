import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { addBlog, editBlog } from "../redux/slice";

const Form = ({ dispatch, setShowForm, editData }) => {
  const edit = useSelector((state) => state.BLOGS.editMode, shallowEqual);
  console.log("data", edit);

  console.log("edit", editData);

  let initialData;

  if (!edit) {
    initialData = {
      user: "",
      description: "",
      title: "",
    };
  } else {
    initialData = {
      user: editData.user,
      description: editData.description,
      title: editData.title,
    };
  }
  const [data, setData] = useState(initialData);

  const { user, description, title } = data;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!edit) {
      const data = {
        id: Math.random() * 10,
        user: user,
        title: title,
        description: description,
      };

      dispatch(addBlog({ data }));
    } else {
      const eData = {
        id: editData.id,
        user: user,
        title: title,
        description: description,
      };
      dispatch(editBlog({ eData }));
    }
    setShowForm(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="UserName"
        onChange={onChangeHandler}
        value={user}
        name="user"
      />
      <input
        type="text"
        placeholder="Title"
        onChange={onChangeHandler}
        value={title}
        name="title"
      />
      <input
        type="text"
        placeholder="Description"
        onChange={onChangeHandler}
        value={description}
        name="description"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
