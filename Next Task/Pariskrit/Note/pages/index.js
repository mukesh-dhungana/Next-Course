import styles from "../styles/Home.module.css";
import Head from "next/head";
import Button from "../components/Button";
import NoteBlock from "../components/NoteBlock/NoteBlock";
import { useState } from "react";
import { data } from "../data";

export default function Home() {
  const [isNewNoteForm, setIsNewNoteForm] = useState(false);
  const [newNote, setNewNote] = useState({});
  const [allNotes, setAllNotes] = useState(data);

  const handleSubmitNewNote = (note) => {
    setAllNotes([...allNotes, { ...note, id: Date.now() }]);
    setIsNewNoteForm(false);
    setNewNote({});
  };

  const handleDeleteNote = (id) => {
    setAllNotes([...allNotes.filter((note) => note.id !== id)]);
  };

  const handleUpdateNote = (updateNote) => {
    setAllNotes([
      ...allNotes.map((note) =>
        note.id === updateNote.id ? updateNote : note
      ),
    ]);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Button onClick={() => setIsNewNoteForm(true)} type="button">
          New Note
        </Button>
        <div className={styles.blocks}>
          {allNotes.map((note) => (
            <NoteBlock
              key={note.id}
              note={note}
              deleteNote={() => handleDeleteNote(note.id)}
              handleUpdateNote={handleUpdateNote}
            />
          ))}
          {isNewNoteForm && (
            <NoteBlock
              note={newNote}
              isNewNote={true}
              handleUpdateNote={handleSubmitNewNote}
              deleteNote={() => setIsNewNoteForm(false)}
            />
          )}
        </div>
      </main>
    </div>
  );
}
