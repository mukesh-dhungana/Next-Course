import Head from "next/head";
import reducer from "../reducer";
import { useReducer } from "react";
import NoteForm from "../components/NoteForm";
import classes from "../components/noteform.module.css";

export default function Home() {
  const initialState = [];

  // {id:'', title:'', month:'', list: ''}

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("state", state);

  const newNote = () => {
    dispatch({ type: "NEW_NOTE", payload: { id: Math.random() } });
  };

  return (
    <div>
      <Head>
        <title>Note Maker</title>
        <meta name="description" content="Make Daily Notes" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main className={classes.container}>
        <div className={classes.align}>
          <button className={classes.button} onClick={() => newNote()}>
            New Note
          </button>
        </div>
        <div className={classes.wrapper}>
          {state.map((note) => (
            <div key={note.id}>
              <NoteForm {...{ note, state, dispatch }} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
