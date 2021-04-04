import React from "react";
import cx from "classnames";

import { ShowCard } from "@/components/ShowCard";
import { TrendingQuoteCard } from "./components/TrendingShowCard";
import { Heading } from "@/components/Typography";
import { SearchField } from "@/components/SearchField";
import { TrendingQuote, useHomePageQuery } from "@/generated/apolloHooks";
import { ArrayMaybe } from "@/utils/commonHelpers";

export const HomePage: React.FunctionComponent = () => {
  const { data: homePageData, loading, error } = useHomePageQuery({
    variables: {
      quotesLimit: 5,
      showsLimit: 5,
    },
    nextFetchPolicy: "cache-first",
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  const trendingShows = homePageData?.trendingShows;
  const trendingQuotes = homePageData?.trendingQuotes;

  return (
    <div className="px-6 lg:px-37 lg:pb-8">
      <div className="h-5"></div>
      <SearchField />
      {/* TODO: Add Trending Tags */}
      <div className="h-8"></div>
      <Heading>Trending</Heading>
      {/* Trending slider */}
      <div
        className="flex py-4 overflow-y-hidden overflow-x-auto hide-scroll-bar"
        style={{
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
        }}
      >
        {(trendingQuotes as Array<TrendingQuote>).map(
          ({ quote: { _id, show, markup, mainCharacter }, quotesCount }, i) => (
            <div
              className={cx("flex flex-shrink-0 w-90% sm:w-1/2 lg:w-1/3", {
                "pr-4": i < ArrayMaybe(trendingQuotes).length - 1,
              })}
              style={{ scrollSnapAlign: "start" }}
              key={_id}
            >
              <TrendingQuoteCard
                {...({
                  quoteId: _id,
                  quotesCount: quotesCount,
                  showName: show?.name,
                  showYear: show?.year,
                  seasons: show?.seasons,
                  genre: show?.genre,
                  quote: markup,
                  coverPicture: mainCharacter?.coverPicture,
                } as any)}
              />
            </div>
          )
        )}
      </div>
      <div className="h-4"></div>
      <Heading>Movie / Series</Heading>
      <div className="h-3"></div>
      <div className="flex flex-wrap">
        {(trendingShows ?? []).map((show) => (
          <div key={show?._id} className="grid-item">
            <div className="">
              <ShowCard
                {...({
                  id: show?._id,
                  coverPicture: show?.coverPicture,
                  name: show?.name,
                  year: show?.year,
                  showType: show?.type,
                } as any)}
              />
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .grid-item {
          width: calc(
            50% - calc(2rem - calc(2rem / 2))
          ); /* calc(width - calc(margin-right - calc(margin-right / noOfCards))) */
          margin-right: 2rem;
        }

        .grid-item:nth-of-type(2n) {
          margin-right: 0;
        }

        @media (min-width: 640px) {
          .grid-item {
            width: calc(calc(100% / 4) - calc(2rem - calc(2rem / 4)));
            margin-right: 2rem;
          }

          .grid-item:nth-of-type(2n) {
            margin-right: 2rem;
          }

          .grid-item:nth-of-type(4n) {
            margin-right: 0;
          }
        }

        @media (min-width: 1024px) {
          .grid-item {
            width: calc(calc(100% / 6) - calc(2rem - calc(2rem / 6)));
            margin-right: 2rem;
          }

          .grid-item:nth-of-type(2n) {
            margin-right: 2rem;
          }

          .grid-item:nth-of-type(6n) {
            margin-right: 0;
          }
        }
      `}</style>
    </div>
  );
};
