import { Provider } from "react-redux";
import { useStore } from "../redux";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.getInitialState);

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
