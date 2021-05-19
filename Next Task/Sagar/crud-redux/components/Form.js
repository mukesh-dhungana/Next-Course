import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";

const Form = ({ dispatch, setShowForm, editData }) => {
  const edit = useSelector((state) => state.blogs.editMode, shallowEqual);
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

  console.log("fff", data);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!edit) {
      const data = {
        id: Math.random() * 10,
        user: user,
        title: title,
        description: description,
      };

      dispatch({ type: "ADD_BLOG", payload: { data } });
    } else {
      const eData = {
        id: editData.id,
        user: user,
        title: title,
        description: description,
      };
      dispatch({ type: "EDIT_BLOG", payload: { eData } });
      
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
