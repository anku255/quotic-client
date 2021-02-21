import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { initializeApollo } from "@/lib/apolloClient";
import ShowDetailPage from "@/modules/show";
import { HeaderWithBackButton } from "@/components/HeaderWithBackButton";
import { SHOW_DETAIL_QUERY, QUOTES_BY_SHOW_QUERY } from "@/modules/show/show.gql";
import { ObjectMaybe } from "@/utils/commonHelpers";

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
      // { params: { slug: ["5ff0590c534371684587798a", "series", "s", "1", "e", "1"] } },
      // { params: { showId: "5e779b7e5da3d982f7515c01", showType: "series", season: "1", episode: "1" } }, // See the "paths" section below
    ],
    fallback: "blocking",
  };
};

// export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
//   const apolloClient = initializeApollo();

//   const { showId, characterId, characterName, episode, season } = ctx.query;
//   await apolloClient.query({
//     query: SHOW_PAGE_QUERY,
//     variables: {
//       showId: showId,
//       quotesFilter: {
//         show: showId,
//         episode: episode ? +episode : undefined,
//         season: season ? +season : undefined,
//         ...(characterName && characterId && { characters: [characterId] }),
//       },
//     },
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//     // revalidate: 1,
//   };
// };

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const apolloClient = initializeApollo();

  const { slug } = ObjectMaybe(ctx.params);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showId, showType, season, episode] = slug.split("-");

  const showDetailPromise = apolloClient.query({
    query: SHOW_DETAIL_QUERY,
    variables: {
      showId: showId,
      quoteCountFilter: {
        show: showId,
      },
    },
  });

  const quotesByShowPromise = apolloClient.query({
    query: QUOTES_BY_SHOW_QUERY,
    variables: {
      quotesFilter: {
        show: showId,
        episode: episode ? +episode : undefined,
        season: season ? +season : undefined,
      },
    },
  });

  await Promise.all([showDetailPromise, quotesByShowPromise]);

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};
