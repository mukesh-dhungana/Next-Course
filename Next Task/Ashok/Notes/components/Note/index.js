import React, { useState } from "react";
import Form from "../Form";

function index({ removeNote, id } = {}) {
  const [notetitle, setNoteTitle] = useState({ data: "", isSubmitted: false });
  const [notebody, setNotebody] = useState({ data: "", isSubmitted: false });

  const handleNoteTitleSubmit = (e) => {
    e.preventDefault();
    setNoteTitle({ data: e.target.title.value, isSubmitted: true });
  };

  const handleNoteBodySubmit = (e) => {
    e.preventDefault();
    setNotebody({ data: e.target.body.value, isSubmitted: true });
  };

  return (
    <div className="note">
      <div className="note-header">
        <div className="note-title">
          {!notetitle.isSubmitted ? (
            <Form
              handleNoteTitleSubmit={handleNoteTitleSubmit}
              placeholder="Type Header"
              name="title"
              id={id}
            />
          ) : (
            notetitle.data
          )}
        </div>
        <div className="note-remove" onClick={removeNote}>
          x
        </div>
      </div>
      <div className="note-body">
        {!notebody.isSubmitted ? (
          <Form
            handleNoteTitleSubmit={handleNoteBodySubmit}
            placeholder="Type Body"
            name="body"
          />
        ) : (
          notebody.data
        )}
      </div>
    </div>
  );
}

export default index;
