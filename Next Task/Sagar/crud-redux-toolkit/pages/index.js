import Head from "next/head";
import { useState } from "react";
import Blog from "../components/Blog";
import { initializeStore } from "../redux/store";
import Form from "../components/Form";
import { useDispatch, useSelector } from "react-redux";
import { showBlog } from "../redux/slice";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const [editData, setEditData] = useState(null);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // const editState = useSelector((state) => state);

  // console.log("stateblog", state.blogs.blogs);
  // console.log("props", blogs);

  return (
    <div>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="blog apps" />
      </Head>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Add Form" : "Show Add Form"}{" "}
      </button>
      {console.log("check", state.BLOGS.editMode)}

      {showForm || state.BLOGS.editMode ? (
        <Form {...{ dispatch }} setShowForm={setShowForm} editData={editData} />
      ) : (
        ""
      )}

      <main>
        <h2>Blogs</h2>
        <div>
          {state.BLOGS.blogs.length > 0 &&
            state.BLOGS.blogs.map((blog) => (
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

export async function getServerSideProps() {
  const { dispatch, getState } = initializeStore();
  const response = await fetch("http://localhost:3000/api/posts");
  const posts = await response.json();
  dispatch(showBlog(posts));

  return {
    props: {
      initialReduxState: getState(),
    },
  };
}
