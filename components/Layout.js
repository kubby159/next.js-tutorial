import NavBar from "./NavBar";

export default function Layout({ children }) {
  // children === <Component {...pageProps} />
  return (
    <>
      <NavBar></NavBar>
      <div>{children}</div>
    </>
  );
}
