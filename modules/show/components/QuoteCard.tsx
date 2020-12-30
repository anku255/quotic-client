import React from "react";
import ContentLoader from "react-content-loader";
import Link from "next/link";
import { nullableString, nullableNumber } from "../../../types";

interface QuoteCardProps {
  id: string;
  characterName: nullableString;
  showYear: nullableNumber;
  season: nullableNumber;
  episode: nullableNumber;
  quote: nullableString;
  imageUrl: nullableString;
}

export const QuoteCard = ({
  id,
  characterName,
  showYear,
  season,
  episode,
  quote = "",
  imageUrl,
}: QuoteCardProps): JSX.Element => {
  return (
    <Link href={`/quote/[quoteId]`} as={`/quote/${id}`} shallow>
      <a className="block">
        <div className="w-full p-4 pr-0 border border-aliceBlue bg-white shadow-primary rounded-lg">
          <div className="flex">
            <div className="flex-1">
              <div className="flex justify-between">
                <div className="text-2xl font-semibold leading-8">{characterName}</div>
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
              <div className="flex flex-1">
                <div
                  className="font-serif flex-1 text-blackRussian leading-6 clamp-5 overflow-hidden"
                  dangerouslySetInnerHTML={{ __html: quote! }}
                ></div>
                <div className="w-4 flex-shrink-0"></div>
                {/* Image */}
                <div className="-mt-3 flex-shrink-0 w-20">
                  <img className="rounded-l-full w-full h-full object-cover" src={imageUrl!} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export const QuoteCardSkeleton = () => (
  <div>
    <div className="sm:hidden">
      <ContentLoader
        width={366}
        speed={1}
        viewBox="0 0 340 200"
        className="w-full bg-white shadow-primary border border-aliceBlue rounded-lg"
      >
        <rect x="16" y="16" rx="5" ry="5" width="120" height="25" />
        <rect x="16" y="50" rx="5" ry="5" width="140" height="10" />
        <circle cx="262" cy="32" r="16" />
        <circle cx="310" cy="32" r="16" />
        <rect x="16" y="85" rx="2" ry="2" width="230" height="10" />
        <rect x="16" y="100" rx="2" ry="2" width="220" height="10" />
        <rect x="16" y="115" rx="2" ry="2" width="235" height="10" />
        <rect x="16" y="130" rx="2" ry="2" width="232" height="10" />
        <rect x="16" y="145" rx="2" ry="2" width="225" height="10" />
        <rect x="16" y="160" rx="2" ry="2" width="200" height="10" />
        <circle cx="340" cy="120" r="60" />
      </ContentLoader>
    </div>
    <div className="hidden sm:block">
      <ContentLoader
        width={700}
        speed={1}
        viewBox="0 0 700 194"
        className="w-full bg-white shadow-primary border border-aliceBlue rounded-lg"
      >
        <rect x="16" y="16" rx="5" ry="5" width="120" height="25" />
        <rect x="16" y="50" rx="5" ry="5" width="140" height="10" />
        <circle cx="622" cy="32" r="16" />
        <circle cx="668" cy="32" r="16" />
        <rect x="16" y="85" rx="2" ry="2" width="430" height="10" />
        <rect x="16" y="100" rx="2" ry="2" width="420" height="10" />
        <rect x="16" y="115" rx="2" ry="2" width="435" height="10" />
        <rect x="16" y="130" rx="2" ry="2" width="432" height="10" />
        <rect x="16" y="145" rx="2" ry="2" width="425" height="10" />
        <rect x="16" y="160" rx="2" ry="2" width="400" height="10" />
        <circle cx="690" cy="120" r="60" />
      </ContentLoader>
    </div>
  </div>
);
