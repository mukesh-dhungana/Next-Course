export const GET_ALL_POST = "get-all-post";
export const ADD_POST = "add-post";
export const REMOVE_POST = "remove-post";
export const EDIT_POST = "edit-post";

export const getAllPosts = () => async (dispatch) => {
  const response = await fetch("http://localhost:3000/api/posts");
  const posts = await response.json();
  dispatch({ type: GET_ALL_POST, payload: posts });
};

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,
});

export const removePost = (postId) => ({
  type: REMOVE_POST,
  payload: postId,
});

export const editPost = (post) => ({
  type: EDIT_POST,
  payload: post,
});
