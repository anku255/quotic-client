import React from "react";
// import { useRouter } from "next/router";
import { QuoteDetail } from "@/components/QuoteDetail";

const QuotePage = (): JSX.Element => {
  // const router = useRouter();
  // const { quoteId } = router.query;

  return <QuoteDetail />;
};

QuotePage.Header = () => null;

QuotePage.title = "Quote";

export default QuotePage;
