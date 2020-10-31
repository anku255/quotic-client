import React from "react";

export const Searchbar = (): JSX.Element => {
  return (
    <div className="relative">
      <input
        className="p-5 pr-10 w-full h-15 text-sm text-blackRussian bg-white shadow-primary rounded-lg placeholder-baliHai focus:outline-none"
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
