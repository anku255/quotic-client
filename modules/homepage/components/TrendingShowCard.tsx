import { If } from "@/components/If";
import { isNotEmptyArray } from "@/utils/commonHelpers";
import Link from "next/link";
import React from "react";

interface TrendingQuoteCardProps {
  quoteId: string;
  quotesCount?: number;
  showName?: string;
  showYear?: number;
  seasons?: number;
  genre?: string[];
  quote?: string;
  coverPicture?: string;
}

export const TrendingQuoteCard = ({
  quoteId,
  quotesCount,
  showName,
  showYear,
  seasons,
  genre,
  quote,
  coverPicture,
}: TrendingQuoteCardProps): JSX.Element => (
  <Link href={`/quote/[quoteId]`} as={`/quote/${quoteId}`} shallow>
    <a className="block">
      <div className="w-full p-4 pr-0 border border-aliceBlue bg-white shadow-primary rounded-lg">
        <div className="flex">
          {/* Left */}
          <div className="flex-1 pr-2">
            <div className="font-serif text-sm text-radicalRed">{quotesCount} Quotes</div>
            <div className="text-2xl font-semibold leading-8">{showName}</div>
            <div className="text-xs lg:text-sm text-baliHai">
              <If condition={!!showYear} then={<span className="">{showYear}</span>} />
              <If condition={isNotEmptyArray(genre)} then={<span className=""> &middot; {genre?.[0]}</span>} />
              <If condition={!!seasons} then={<span className=""> &middot; {seasons} Seasons</span>} />
            </div>
            <div className="h-3"></div>
            <div className="flex flex-1 h-12">
              <div
                className="font-serif text-blackRussian leading-6 clamp-2 overflow-hidden"
                dangerouslySetInnerHTML={{ __html: quote || "" }}
              ></div>
            </div>
          </div>

          {/* Right */}
          <div className="flex-shrink-0 w-16">
            <img className="rounded-l-full w-full h-full object-cover" src={coverPicture} alt="" />
          </div>
        </div>
      </div>
    </a>
  </Link>
);
