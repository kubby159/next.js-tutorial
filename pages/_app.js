import Layout from "../components/Layout";

import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head></Head>
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: white;
          text-decoration: none;
        }
        h1 {
          color: red;
        }
        nav {
          background-color: transparent;
        }

        .active {
          background: green;
        }
      `}</style>
    </Layout>
  );
}
