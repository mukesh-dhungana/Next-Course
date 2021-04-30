import Layout from "../components/Layout";
export default function App({ Component, pageProps }) {
console.log('app')
  return (
    <Component {...pageProps} />
    // <Layout>
    //   <Component {...pageProps} />
    // </Layout>
  );
}
