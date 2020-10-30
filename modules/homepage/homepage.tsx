import React from "react";

import shows from "@/mock/shows.json";
import { ShowCard } from "@/components/ShowCard";

const Searchbar = (): JSX.Element => {
  return (
    <div className="relative">
      <input
        className="p-5 pr-10 w-full h-15 text-sm text-blackRussian bg-white shadow-primary rounded-lg placeholder-baliHai"
        placeholder="Search quotes, series or anything"
      />

      <div className="absolute" style={{ right: "1.25rem", top: "1.50rem" }}>
        {/* prettier-ignore */}
        <svg className="w-4 h-4 text-blackRussian" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
};

const Heading = ({ children }: { children: string }): JSX.Element => (
  <div className="text-xs font-bold tracking-wider uppercase text-blackRussian">{children}</div>
);

export const HomePage: React.FunctionComponent = () => {
  return (
    <div className="">
      <div className="h-5"></div>
      <Searchbar />
      <div className="h-8"></div>
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
