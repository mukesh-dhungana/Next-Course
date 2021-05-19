import React, { useState } from "react";
import Card from "../../components/Card";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../../redux/store";
import { DELETE, FETCH } from "../../redux/types";
import Modal from "../../components/Modal";

const Blogs = () => {
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  const [editId, setEditId] = useState();
  const { blogs } = useSelector((state) => state.blogs);

  const dispatch = useDispatch();

  const router = useRouter();

  const onClick = (blogId) => {
    console.log(blogId);
    router.push(`/blogs/${blogId}`);
  };

  const onDelete = (id) => {
    dispatch({
      type: DELETE,
      payload: +id,
    });
  };

  const onEdit = (id) => {
    setEdit(true);
    setEditId(id);
  };

  return (
    <>
      {edit && (
        <Modal setEdit={setEdit} id={editId} blogs={blogs} type="edit" />
      )}
      {add && <Modal setEdit={setAdd} />}
      <div className="add-wrapper">
        <button onClick={() => setAdd(true)}>ADD</button>
      </div>
      <div className="blogs-wrapper">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            onClick={() => onClick(blog.id)}
            blog={blog}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    </>
  );
};

export default Blogs;

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const res = await fetch("http://localhost:3000/api/blogs");
    const data = await res.json();
    console.log(data);
    store.dispatch({
      type: FETCH,
      payload: data,
    });
  }
);

// export const getServerSideProps = async () => {
//   const { dispatch, getState } = initializeStore();
//   const res = await fetch("http://localhost:3000/api/blogs");
//   const data = await res.json();

//   dispatch({
//     type: FETCH,
//     payload: data,
//   });

//   return {
//     props: {
//       getInitialState: getState(),
//     },
//   };
// };
