import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { initializeApollo } from "@/lib/apolloClient";
import ShowDetailPage from "@/modules/show";
import { HeaderWithBackButton } from "@/components/HeaderWithBackButton";
import { SHOW_PAGE_QUERY } from "@/modules/show/show.gql";

const ShowPage = (): JSX.Element => {
  return <ShowDetailPage />;
};

// Header is needed for ShowPageA variant
ShowPage.Header = HeaderWithBackButton;

// ShowPage.Header = () => null;
ShowPage.title = "Show";

export default ShowPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { showId: "5e779b7e5da3d982f7515c01" } }, // See the "paths" section below
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: SHOW_PAGE_QUERY,
    variables: {
      showId: ctx?.params?.showId,
      quotesFilter: {
        show: ctx?.params?.showId,
        episode: 1,
        season: 1,
      },
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};
