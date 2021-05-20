import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_POST, removePost } from "../redux/actions/postsAction";
import { wrapper } from "../redux/store";
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

  const handleNewPostAdd = () => {
    setModal((prev) => ({ ...prev, open: true }));
  };

  const handleremovePost = async (id) => {
    dispatch(removePost(id));
    await fetch("http://localhost:3000/api/posts?id=" + id, {
      method: "DELETE",
    });
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
        {state &&
          state?.posts?.map((post) => (
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

export const getStaticProps = wrapper.getStaticProps(
  async ({ store, ...ctx }) => {
    const response = await fetch("http://localhost:3000/api/posts");
    const posts = await response.json();
    store.dispatch({
      type: GET_ALL_POST,
      payload: posts,
    });
    return { revalidate: 1, props: {} };
  }
);
