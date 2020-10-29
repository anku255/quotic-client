import React from "react";
import { AppProps } from "next/app";

import "../styles/index.css";
import "react-mde/lib/styles/css/react-mde-all.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div className="px-6 py-12 bg-zircon antialiased">
      <Component {...pageProps} />
    </div>
  );
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
