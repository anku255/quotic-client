import React from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { QuoteDetail } from "@/components/QuoteDetail";
import { useQuoteByIdQuery } from "@/generated/apolloHooks";
import { GET_QUOTE_QUERY } from "graphql/queries/quotes.queries";
import { initializeApollo } from "@/lib/apolloClient";

const QuotePage = (): JSX.Element => {
  const router = useRouter();
  const { quoteId } = router.query;
  const { data, loading, error } = useQuoteByIdQuery({ variables: { id: quoteId } });

  if (loading) return <div>Loading...</div>;

  const quote = {
    id: data?.quoteById?._id,
    characters: (data?.quoteById?.characters ?? []).map((c) => ({
      characterName: c?.characterName,
      realName: c?.realName,
    })),
    showName: data?.quoteById?.show?.name,
    showYear: data?.quoteById?.show?.year,
    imageUrl: data?.quoteById?.show?.coverPicture,
    season: data?.quoteById?.season,
    episode: data?.quoteById?.episode,
    quote: data?.quoteById?.markup,
  };

  return <QuoteDetail {...quote} />;
};

QuotePage.Header = () => null;

QuotePage.title = "Quote";

export default QuotePage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPropsContext) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_QUOTE_QUERY,
    variables: {
      id: ctx?.params?.quoteId,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
