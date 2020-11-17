import React, { useState, useEffect } from "react";
import Router from "next/router";
import { SelectField } from "./components/SelectField";
import { useRouter } from "next/router";
import { QuoteCard } from "./components/QuoteCard";
import { useShowPageQuery, Show, useQuoteManyQuery } from "@/generated/apolloHooks";
import { If } from "@/components/If";
import { nullableNumber } from "@/types/index";

interface ShowWithQuoteCount extends Show {
  quotesCount?: nullableNumber;
}

const ShowDetail = ({ show }: { show: ShowWithQuoteCount }) => (
  <div className="">
    <h1 className="text-3xl font-semibold">{show.name}</h1>
    <div className="flex font-serif text-sm text-baliHai ">
      <span className="">{show.year} &middot;&nbsp;</span>
      <span className="">Seasons {show.seasons} &middot;&nbsp;</span>
      <span className="">IMDb 8.5 &middot;&nbsp;</span>
      <span className="">{show.quotesCount} Quotes</span>
    </div>

    <div className="h-6"></div>
    <div className="flex">
      {/* Image */}
      <div className="pr-4 flex-shrink-0 w-32 h-42">
        <img className="h-full object-cover rounded-lg shadow-primary" src={show.coverPicture!} alt="" />
      </div>
      {/* Description */}
      <p className="flex-1 text-md font-serif clamp-7 overflow-hidden">{show.description}</p>
    </div>
  </div>
);

// interface QuoteCardProps {
//   showName: string;
//   showYear: number;
//   season?: number;
//   episode?: number;
//   quote: string;
//   imageUrl: string;
// }
// const QuoteCard = ({ showName, showYear, season, episode, quote, imageUrl }: QuoteCardProps) => {
//   const slicedQuote = quote.length > 200 ? quote.slice(0, 200) + "...</p>" : quote;
//   return (
// <div className="w-full p-4 pr-0 border border-aliceBlue bg-white shadow-primary rounded-lg">
//   <div className="flex">
//     <div className="flex-1">
//       <div className="flex justify-between">
//         <div className="text-2xl font-semibold leading-8">{showName}</div>
//         <div className="pr-4">
//           <button className="p-2 mr-4 rounded-full shadow-secondary text-baliHai">
//             {/* prettier-ignore */}
//             <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
//             </svg>
//           </button>
//           <button className="p-2 rounded-full shadow-secondary text-radicalRed">
//             {/* prettier-ignore */}
//             <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//             </svg>
//           </button>
//         </div>
//       </div>
//       <div className="text-xs text-baliHai">
//         <span className="">{showYear} &middot;&nbsp;</span>
//         <span className="">
//           Epi {episode} Season {season}
//         </span>
//       </div>
//       <div className="h-3"></div>
//       {/* TODO: Fix text overflow */}
//       <div className="flex flex-1">
//         <div
//           className="font-serif text-blackRussian leading-6"
//           dangerouslySetInnerHTML={{ __html: slicedQuote }}
//         ></div>
//         <div className="w-4 flex-shrink-0"></div>
//         {/* Image */}
//         <div className="-mt-3 flex-shrink-0 w-20">
//           <img className="rounded-l-full w-full h-full object-cover" src={imageUrl} alt="" />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//   );
// };

/**
 *
 * @param labelPrefix Season | Episode
 * @param count total number of options
 * @returns [ {label: 'Season 1', value '1' }...]
 */
const getOptions = (labelPrefix: string, count: number) =>
  new Array(count).fill(0).map((_, i) => ({ label: `${labelPrefix} ${i + 1}`, value: `${i + 1}` }));

const characterOptions = [
  { label: "Elliot Alderson", value: "Elliot Alderson" },
  { label: "Darlene", value: "Darlene" },
  { label: "Mr. Robot", value: "Mr. Robot" },
  { label: "Angela", value: "Angela" },
];

const ShowPageA = (): JSX.Element => {
  const router = useRouter();
  const selectedSeason = router.query.season ? +router.query.season : 1;
  const selectedEpisode = router.query.episode ? +router.query.episode : 1;
  const [loadingQuotes, setLoadingQuotes] = useState(false);

  const { data: showPageData, loading, error } = useShowPageQuery({
    variables: {
      showId: router.query.showId,
      quotesFilter: {
        show: router.query.showId,
        season: 1,
        episode: 1,
      },
    },
  });

  const { data: quotesData } = useQuoteManyQuery({
    variables: {
      filter: {
        show: router.query.showId,
        season: selectedSeason,
        episode: selectedEpisode,
      },
    },
  });

  useEffect(() => {
    const handleRouteChangeStart = (nextUrl: string) => {
      const { host, protocol, pathname } = window.location;
      const url = new URL(`${protocol}//${host}${nextUrl}`);
      const isShowPage = url.pathname === pathname;
      if (isShowPage) {
        setLoadingQuotes(true);
      }
    };

    const handleRouteChangeComplete = () => {
      setLoadingQuotes(false);
    };

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeComplete);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, []);

  const show: ShowWithQuoteCount = {
    ...showPageData?.showById,
    _id: showPageData?.showById?._id,
    quotesCount: showPageData?.quoteCount,
  };

  const quotes = (quotesData?.quoteMany ?? []).map((quote) => ({
    id: quote?._id,
    characterName: quote?.characters?.[0]?.characterName,
    imageUrl: quote?.characters?.[0]?.coverPicture,
    season: quote?.season,
    episode: quote?.episode,
    quote: quote?.markup,
    showYear: (show as any)?.year,
  }));

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="px-4">
      <ShowDetail show={show} />
      <div className="h-8"></div>
      {/* TODO: Filters */}
      <div className="flex justify-between">
        <div className="flex-1 pr-4">
          <SelectField
            label="Season"
            options={getOptions("Season", show?.episodes?.length ?? 1)}
            placeholder="Season"
            value={{ label: `Season ${selectedSeason}`, value: `${selectedSeason}` }}
            onChange={(option) => {
              const nextSeason = +option.value;
              if (selectedSeason !== nextSeason) {
                router.push(`/show/[showId]?season=${nextSeason}`, `/show/${router.query.showId}?season=${nextSeason}`);
              }
            }}
          />
        </div>
        <div className="flex-1 pr-4">
          <SelectField
            label="Episode"
            options={getOptions("Episode", show?.episodes?.[selectedSeason - 1]?.episodes ?? 1)}
            placeholder="Episode"
            value={{ label: `Episode ${selectedEpisode}`, value: `${selectedEpisode}` }}
            onChange={(option) => {
              const nextEpisode = +option.value;
              if (selectedEpisode !== nextEpisode) {
                router.push(
                  `/show/[showId]?season=${selectedSeason}&episode=${nextEpisode}`,
                  `/show/${router.query.showId}?season=${selectedSeason}&episode=${nextEpisode}`
                );
              }
            }}
          />
        </div>
        <div className="flex-1">
          <SelectField
            // defaultValue,
            label="Character"
            options={characterOptions}
            placeholder="Character"
            // value={}
            // onChange={}
          />
        </div>
      </div>
      <div className="h-8"></div>
      <If
        condition={loadingQuotes}
        then={<div>Loading...</div>}
        else={quotes.map((quote) => (
          <div key={quote.id} className="mb-4">
            <QuoteCard
              id={quote.id}
              characterName={quote.characterName}
              showYear={quote.showYear}
              season={quote.season}
              episode={quote.episode}
              quote={quote.quote}
              imageUrl={quote.imageUrl}
            />
          </div>
        ))}
      />
    </div>
  );
};

export default ShowPageA;
