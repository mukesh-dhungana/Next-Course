import { useState } from "react";
import * as styles from "./noteblock.module.css";

const NoteBlock = ({
  note,
  handleUpdateNote,
  deleteNote,
  isNewNote = false,
}) => {
  const [note1, setNote1] = useState(note);

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUpdateNote(note1);
  };
  return (
    <div className={styles.block}>
      <img src="/close.png" className={styles.cross} onClick={deleteNote} />
      <form onSubmit={handleSubmit}>
        <input
          className={isNewNote ? styles.title__input : styles.title}
          placeholder="Type Header.."
          value={note1.header || ""}
          name="header"
          onChange={(e) => setNote1({ ...note1, header: e.target.value })}
        />
        <br />
        <input
          className={styles.description__input}
          placeholder="Type Note Details"
          value={note1.description || ""}
          name="description"
          onChange={(e) => setNote1({ ...note1, description: e.target.value })}
        />
        {/* <textarea
          className={styles.description__input}
          placeholder="Type Note Details..."
          value={note1.description || ""}
          name="description"
          onChange={(e) => setNote1({ ...note1, description: e.target.value })}
          rows="11"
        /> */}
        <br />
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NoteBlock;
