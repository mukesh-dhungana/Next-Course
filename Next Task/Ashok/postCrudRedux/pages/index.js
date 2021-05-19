import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_POST, removePost } from "../redux/actions/postsAction";
import { initializeStore } from "../redux/store";
import Post from "../components/Post";
import Modal from "../components/Modal";

function index() {
  const [isModalOpen, setModal] = useState({
    type: "Add",
    post: { title: "", detail: "", author: "" },
    open: false,
  });

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  const handleNewPostAdd = () => {
    setModal((prev) => ({ ...prev, open: true }));
  };

  const handleremovePost = (id) => {
    dispatch(removePost(id));
  };

  const handleEditPost = (post) => {
    setModal((prev) => ({
      ...prev,
      open: true,
      type: "Edit",
      post: { ...post },
    }));
  };

  const handleModalClose = () => {
    setModal({
      type: "Add",
      post: { title: "", detail: "", author: "" },
      open: false,
    });
  };

  return (
    <div>
      <button onClick={handleNewPostAdd}>Add New Post</button>
      <h2>Posts</h2>
      <div>
        {state?.posts?.map((post) => (
          <Post
            post={post}
            key={post.id}
            removePost={() => handleremovePost(post.id)}
            editPost={() => handleEditPost(post)}
          />
        ))}
      </div>
      {isModalOpen.open && (
        <Modal
          type={isModalOpen.type}
          post={isModalOpen.post}
          onCloseClick={handleModalClose}
        />
      )}
    </div>
  );
}

export default index;

export async function getServerSideProps() {
  const reduxStore = initializeStore();
  const { dispatch, getState } = reduxStore;
  const response = await fetch("http://localhost:3000/api/posts");
  const posts = await response.json();
  dispatch({ type: GET_ALL_POST, payload: posts });
  return { props: { initialReduxState: getState() } };
}
