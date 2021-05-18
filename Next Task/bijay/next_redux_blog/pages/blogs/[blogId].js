import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import { initializeStore } from "../../redux";
import { FETCH } from "../../redux/types";

const Blog = () => {
  const router = useRouter();

  const dispatch = useDispatch()

  const id = router.query.blogId;

  const { blogs } = useSelector((state) => state.blogs);
  const blog = blogs.find((x) => x.id === +id);
  console.log(blog);

  // DELETE BLOG 
  const onDelete = () => {
    
  }
  return (
    <>
      <div className="blog-container">
        <div className="action">
          <button className="btn edit-btn">EDIT</button>
          <button className="btn delete-btn" onClick={onDelete}>DELETE</button>
        </div>
        <Card blog={blog} />
      </div>
      <div className="back-link">
        <Link href="/blogs">GO BACK</Link>
      </div>
    </>
  );
};

export default Blog;

export const getServerSideProps = async (ctx) => {
  const { dispatch, getState } = initializeStore();
  const res = await fetch("http://localhost:3000/api/blog");
  const data = await res.json();

  dispatch({
    type: FETCH,
    payload: data,
  });

  return {
    props: {
      getInitialState: getState(),
    },
  };
};
