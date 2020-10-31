import React from "react";
import cx from "classnames";

import shows from "@/mock/shows.json";
import trending from "@/mock/trending.json";
import { ShowCard } from "@/components/ShowCard";
import { TrendingQuoteCard } from "./components/TrendingShowCard";
import { Searchbar } from "./components/Searchbar";

const Heading = ({ children }: { children: string }): JSX.Element => (
  <div className="text-xs font-bold tracking-wider uppercase text-blackRussian">{children}</div>
);

export const HomePage: React.FunctionComponent = () => {
  return (
    <div className="">
      <div className="h-5"></div>
      <Searchbar />
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
        {trending.map((item, i) => (
          <div
            className={cx("flex-shrink-0", { "pr-4": i < trending.length - 1 })}
            style={{ flexBasis: "90%", scrollSnapAlign: "start" }}
            key={item.id}
          >
            <TrendingQuoteCard
              noOfQuotes={item.noOfQuotes}
              showName={item.showName}
              showYear={item.showYear}
              seasons={item.seasons}
              genre={item.genre}
              quote={item.quote}
              imageUrl={item.imageUrl}
            />
          </div>
        ))}
      </div>
      <div className="h-4"></div>
      <Heading>Movie / Series</Heading>
      <div className="h-3"></div>
      <div className="flex flex-wrap">
        {shows.map((show) => (
          <div key={show.id} className="grid-item">
            <ShowCard imageUrl={show.imageUrl} name={show.name} year={show.year} />
          </div>
        ))}
      </div>
    </div>
  );
};
