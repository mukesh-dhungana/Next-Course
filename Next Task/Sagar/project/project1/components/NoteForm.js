import React, { useState, useRef } from "react";
import classes from "./noteform.module.css";

const NoteForm = ({ note, dispatch }) => {
  const initialTitle = { title: "" };
  const initialList = { list: "" };

  const [data, setData] = useState(initialTitle);
  const [list, setList] = useState(initialList);
  const [done, setDone] = useState(false);

  //   console.log(data);

  const headerRef = useRef();
  const listRef = useRef();

  React.useEffect(() => {
    headerRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    // dispatch({ type: "ADDD", payload: { name, value, id: note.id } });
  };

  const listChangeHandler = (e) => {
    const { name, value } = e.target;
    setList({ ...data, [name]: value });
  };

  //Title Submition
  const submitTitle = (e) => {
    e.preventDefault();

    listRef.current.focus();

    dispatch({
      type: "ADD_TITLE",
      payload: { id: note.id, title: data.title },
    });

    setDone(true);
  };

  const submitList = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_LIST",
      payload: { id: note.id, list: list.list },
    });

    setList(initialList);
  };

  return (
    <div className={classes.FormContainer}>
      <div className={classes.header}>
        <form style={{ color: "white" }} onSubmit={submitTitle}>
          <input
            type="text"
            placeholder="Type Header..."
            value={data.title}
            onChange={changeHandler}
            name="title"
            ref={headerRef}
            className={done ? classes.done : classes.formHeader}
          />
        </form>
        <button
          className={classes.closeBtn}
          onClick={() => dispatch({ type: "DELETE_NOTE", payload: note.id })}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className={classes.line}></div>
      <div className={classes.todoList}>
        <ol>
          {note.list.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ol>
        <form className={classes.todoForm} onSubmit={submitList}>
          <input
            type="text"
            placeholder="| Type Note Details..."
            value={list.list}
            onChange={listChangeHandler}
            name="list"
            ref={listRef}
            className={classes.addTodo}
          />
        </form>
      </div>
    </div>
  );
};

export default NoteForm;
