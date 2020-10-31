import * as React from "react";

import Head from "next/head";

type Props = {
  title?: string;
};

export const Layout: React.FunctionComponent<Props> = ({ children, title = "" }) => (
  <div>
    <Head>
      <title>{title} | Quotic</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,600&family=Source+Serif+Pro:wght@400;600&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    {children}
  </div>
);
