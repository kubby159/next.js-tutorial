import Layout from "../components/Layout";

import Head from "next/head";
import NavBar from "../components/NavBar";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
