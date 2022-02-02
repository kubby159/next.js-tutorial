import NavBar from "../components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
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
    </div>
  );
}
