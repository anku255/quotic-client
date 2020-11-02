import React from "react";
import { useRouter } from "next/router";
import { QuoteDetail } from "@/components/QuoteDetail";
import { useQuoteByIdQuery } from "@/generated/apolloComponents";
import { withApollo } from "@/lib/withApollo";

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

  console.log("quote", quote);

  return <QuoteDetail {...quote} />;
};

QuotePage.Header = () => null;

QuotePage.title = "Quote";

export default withApollo()(QuotePage);
