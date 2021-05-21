import React, { useState } from "react";
import Button from "../components/Button";
import Note from "../components/Note";

function index() {
  const [notes, setNotes] = useState([]);

  const handleAddNotes = () => {
    setNotes((prev) => [...prev, { id: Date.now() }]);
  };

  const handleRemoveNote = (noteId) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };
  return (
    <div className="notes-container">
      <div className="btn-container">
        <Button text="Add Notes" onClick={handleAddNotes} />
      </div>
      <div className="notes">
        {notes?.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            removeNote={() => handleRemoveNote(note.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default index;
