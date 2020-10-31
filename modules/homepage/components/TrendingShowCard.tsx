import React from "react";

interface TrendingQuoteCardProps {
  noOfQuotes: number;
  showName: string;
  showYear: number;
  seasons?: number;
  genre: string;
  quote: string;
  imageUrl: string;
}

export const TrendingQuoteCard = ({
  noOfQuotes,
  showName,
  showYear,
  seasons,
  genre,
  quote,
  imageUrl,
}: TrendingQuoteCardProps): JSX.Element => (
  <div className="w-full p-4 pr-0 border border-aliceBlue bg-white shadow-primary rounded-lg">
    <div className="flex">
      {/* Left */}
      <div className="flex-1 pr-2">
        <div className="font-serif text-sm text-radicalRed">{noOfQuotes} Quotes</div>
        <div className="text-2xl font-semibold leading-8">{showName}</div>
        <div className="text-xs text-baliHai">
          <span className="">{showYear} &middot;</span>
          <span className="">{genre} &middot;</span>
          <span className="">{seasons} Seasons</span>
        </div>
        <div className="h-3"></div>
        {/* TODO: Fix text overflow */}
        <div className="flex flex-1 h-12">
          <div className="font-serif text-blackRussian leading-6">
            {quote.slice(0, 50)}
            {quote.length > 50 ? "..." : ""}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex-shrink-0 w-16">
        <img className="rounded-l-full w-full h-full object-cover" src={imageUrl} alt="" />
      </div>
    </div>
  </div>
);
