import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;

// Today's task
// 1. Create a page component to show all the blog posts.
//   - page component  will be the parent component and individual post should be a child component.
// 2. Use redux to share data between the components(can use custom setup or next-redux-wrapper)
//    - initially fetch post from api routes or any external api
// 3. User must be able to add, edit and delete post.
