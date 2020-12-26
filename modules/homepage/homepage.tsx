import React from "react";
import cx from "classnames";

import trending from "@/mock/trending.json";
import { ShowCard } from "@/components/ShowCard";
import { TrendingQuoteCard } from "./components/TrendingShowCard";
import { Heading } from "@/components/Typography";
import { SearchField } from "@/components/SearchField";
import { TrendingQuote, useHomePageQuery } from "@/generated/apolloHooks";

export const HomePage: React.FunctionComponent = () => {
  const { data: homePageData, loading, error } = useHomePageQuery({
    variables: {
      quotesLimit: 5,
      showsLimit: 5,
    },
  });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  const trendingShows = homePageData?.trendingShows;
  const trendingQuotes = homePageData?.trendingQuotes;

  return (
    <div className="px-6 sm:px-37 sm:pb-8">
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
              className={cx("flex-shrink-0 w-90% sm:w-1/3", { "pr-4": i < trendingQuotes.length - 1 })}
              style={{ scrollSnapAlign: "start" }}
              key={_id}
            >
              <TrendingQuoteCard
                {...({
                  quoteId: _id,
                  quotesCount: quotesCount,
                  showName: name,
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
                  imageUrl: show?.coverPicture,
                  name: show?.name,
                  year: show?.year,
                } as any)}
              />
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .grid-item {
          width: calc(25% - 1.5rem);
          margin-right: 2rem;
        }

        .grid-item:nth-of-type(4) {
          margin-right: 0;
        }
      `}</style>
    </div>
  );
};
