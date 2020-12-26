import React from "react";

import { HomePage } from "@/modules/homepage";
import { GetServerSideProps } from "next";
import { initializeApollo } from "@/lib/apolloClient";
import { HOME_PAGE_QUERY } from "graphql/queries/homepage.queries";

const IndexPage = (): JSX.Element => <HomePage />;

IndexPage.title = "Home";

export default IndexPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: HOME_PAGE_QUERY,
    variables: {
      quotesLimit: 5,
      showsLimit: 5,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
