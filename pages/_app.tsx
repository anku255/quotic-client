import React from "react";

import "../styles/index.css";
import "react-mde/lib/styles/css/react-mde-all.css";
import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";

const MyApp = ({ Component, pageProps }: { Component: any; pageProps: any }): JSX.Element => {
  return (
    <div className="bg-zircon antialiased">
      <Layout title={Component.title}>
        {Component.Header ? <Component.Header /> : <Header />}
        <Component {...pageProps} />
      </Layout>
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
