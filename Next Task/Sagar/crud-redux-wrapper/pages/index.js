import Head from "next/head";
import { useState } from "react";
import Form from "../components/Form";
import Blog from "../components/Blog";
import { wrapper } from "../redux/store";
import { initializeStore } from "../redux/store";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const [editData, setEditData] = useState(null);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.blogs, shallowEqual);

  console.log("asdf", state);

  return (
    <div>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="blog apps" />
      </Head>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Add Form" : "Show Add Form"}{" "}
      </button>

      {showForm || state.editMode ? (
        <Form {...{ dispatch }} setShowForm={setShowForm} editData={editData} />
      ) : (
        ""
      )}

      <main>
        <h2>Blogs</h2>
        <div>
          {state.blogs.map((blog) => (
            <Blog
              blog={blog}
              key={blog.id}
              dispatch={dispatch}
              setEditData={setEditData}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const res = await fetch("http://localhost:3000/api/posts");
    const data = await res.json();

    console.log("dddd", data);
    store.dispatch({ type: "SHOW_BLOG", payload: data });
    return {
      props: {},
    };
  }
);
