import React from "react";
import { Quote } from "../generated/apolloComponents";

type Props = {
  quote: Quote;
};

export default function QuoteCard({
  quote: { markup, characters, season, episode }
}: Props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div
          className="text-gray-700 text-base"
          dangerouslySetInnerHTML={{ __html: markup as any }}
        />
      </div>
      <div className="flex">
        {(characters ?? []).map(c => (
          <div key={c?._id} className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4 object-cover"
              src={c?.coverPicture as any}
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{c?.characterName}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          season {season}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          episode {episode}
        </span>
      </div>
    </div>
  );
}
