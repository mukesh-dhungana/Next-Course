import { wrapper } from "../redux/store";
import "../styles/globals.css";

const wrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(wrappedApp);
