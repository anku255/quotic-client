import React from "react";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import mrRobotQuotes from "@/mock/mr-robot-quotes.json";

const ShowDetail = ({ router }: { router: NextRouter }) => (
  <div className="relative">
    {/* TODO: Masking via SVG */}
    <div className="h-48">
      <img className="w-full h-full rounded-b-full object-cover" src="https://i.imgur.com/91cJJrB.png" alt="" />
    </div>

    <div className="absolute top-0 left-0 w-full">
      {/* Header */}
      <header className="px-4 pt-6 pb-4">
        <div className="flex justify-between items-center ">
          <button className="text-white focus:outline-none" onClick={() => router.back()}>
            {/* prettier-ignore */}
            <svg className="w-6 h-6" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
           </svg>
          </button>
          <div className="text-sm font-bold uppercase tracking-wide text-radicalRed">
            <Link href="/login">
              <a>Login</a>
            </Link>
          </div>
        </div>
      </header>

      {/* Title */}
      <div className="mt-12 text-3xl font-semibold text-center text-aliceBlue">
        <h1>Mr. Robot</h1>
      </div>
    </div>
    <div className="h-6"></div>
    <div className="">
      <div className="flex justify-center font-serif text-sm text-radicalRed ">
        <span className="">2015 &middot;&nbsp;</span>
        <span className="">Season 4 &middot;&nbsp;</span>
        <span className="">IMDb 8.5 &middot;&nbsp;</span>
        <span className="">987 Quotes</span>
      </div>
      <div className="h-2"></div>
      <p className="px-6 font-sans text-sm text-center leading-6">
        &quot;Mr. Robot,&quot; is a techno thriller that follows Elliot, a young programmer, who works as a
        cyber-security engineer by day and as a vigilante hacker by night. Elliot finds himself at a crossroad when the
        mysterious leader of an underground hacker group recruits him to destroy the firm he is paid to protect.
      </p>
    </div>
  </div>
);

interface QuoteCardProps {
  showName: string;
  showYear: number;
  season?: number;
  episode?: number;
  quote: string;
  imageUrl: string;
}
const QuoteCard = ({ showName, showYear, season, episode, quote, imageUrl }: QuoteCardProps) => {
  const slicedQuote = quote.length > 200 ? quote.slice(0, 200) + "...</p>" : quote;
  return (
    <div className="w-full p-4 pr-0 border border-aliceBlue bg-white shadow-primary rounded-lg">
      <div className="flex">
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="text-2xl font-semibold leading-8">{showName}</div>
            <div className="pr-4">
              <button className="p-2 mr-4 rounded-full shadow-secondary text-baliHai">
                {/* prettier-ignore */}
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
              <button className="p-2 rounded-full shadow-secondary text-radicalRed">
                {/* prettier-ignore */}
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="text-xs text-baliHai">
            <span className="">{showYear} &middot;&nbsp;</span>
            <span className="">
              Epi {episode} Season {season}
            </span>
          </div>
          <div className="h-3"></div>
          {/* TODO: Fix text overflow */}
          <div className="flex flex-1">
            <div
              className="font-serif text-blackRussian leading-6"
              dangerouslySetInnerHTML={{ __html: slicedQuote }}
            ></div>
            <div className="w-4 flex-shrink-0"></div>
            {/* Image */}
            <div className="-mt-3 flex-shrink-0 w-20" style={{ transform: "translate(4px ,12px)" }}>
              <img className="rounded-l-full w-full h-full object-cover" src={imageUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShowPageA = (): JSX.Element => {
  const router = useRouter();
  // const { data, loading, error } = useQuoteManyQuery({
  //   variables: {
  //     filter: {
  //       show: router.query.showId,
  //     },
  //   },
  // });

  // if (loading) return <h1>Loading...</h1>;

  return (
    <div className="">
      <ShowDetail router={router} />
      <div className="px-6">
        <div className="h-8"></div>
        {/* TODO: Filters */}
        {mrRobotQuotes.map((quote) => (
          <div key={quote.id} className="">
            <QuoteCard
              showName={quote.showName}
              showYear={quote.showYear}
              season={quote.season}
              episode={quote.episode}
              quote={quote.quote}
              imageUrl={quote.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowPageA;
