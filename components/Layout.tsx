import * as React from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  title?: string;
};

const Header = (): JSX.Element => (
  <header>
    <div className="flex justify-between items-center">
      <h1 className="text-4xl">Quotic</h1>
      <div className="text-sm font-bold uppercase tracking-wide">
        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>
    </div>
  </header>
);

const Layout: React.FunctionComponent<Props> = ({ children, title = "This is the default title" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,600&family=Source+Serif+Pro:wght@400;600&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Header />
    {children}
  </div>
);

export default Layout;
