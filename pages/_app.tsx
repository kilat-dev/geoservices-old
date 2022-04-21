import React from "react";
import "../styles/globals.css";
import { MyAppProps } from "./types";

/**
 * Main App render function.
 * @return {AppProps} rendered page.
 */
function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Component.layout || (({ children }) => <>{children}</>);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
