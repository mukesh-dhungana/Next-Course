import styles from "./post.module.css";

const Post = ({ blog, handleDelete, handleEdit }) => {
  return (
    <div className={styles.post}>
      <h1>{blog.name}</h1>
      <h1>{blog.population}</h1>
      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.buttons_edit}
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          type="button"
          className={styles.buttons_delete}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
