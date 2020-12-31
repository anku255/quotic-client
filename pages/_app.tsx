import React from "react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";

import "../styles/index.css";
import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";

const MyApp = ({ Component, pageProps }: { Component: any; pageProps: any }): JSX.Element => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <div className="bg-zircon antialiased">
        <Layout title={Component.title}>
          {Component.Header ? <Component.Header /> : <Header />}
          <Component {...pageProps} />
        </Layout>
      </div>
    </ApolloProvider>
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
