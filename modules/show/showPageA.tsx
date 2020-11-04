import React from "react";
import { SelectField } from "./components/SelectField";
import { useRouter } from "next/router";
import { QuoteCard } from "./components/QuoteCard";
import { useQuoteManyQuery } from "@/generated/apolloHooks";

const ShowDetail = () => (
  <div className="">
    <h1 className="text-3xl font-semibold">Mr. Robot</h1>
    <div className="flex font-serif text-sm text-baliHai ">
      <span className="">2015 &middot;&nbsp;</span>
      <span className="">Season 4 &middot;&nbsp;</span>
      <span className="">IMDb 8.5 &middot;&nbsp;</span>
      <span className="">987 Quotes</span>
    </div>

    <div className="h-6"></div>
    <div className="flex">
      {/* Image */}
      <div className="pr-4 flex-shrink-0 w-32 h-47">
        <img className="h-full object-cover rounded-lg shadow-primary" src="https://i.imgur.com/6nMJmcQ.png" alt="" />
      </div>
      {/* TODO: Implement proper truncate */}
      {/* Description */}
      <p className="flex-1 text-md font-serif h-47 overflow-hidden">
        "Mr. Robot," is a techno thriller that follows Elliot, a young programmer, who works as a cyber-security
        engineer by day and as a vigilante hacker by night.
      </p>
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

const seasonOptions = [
  { label: "Season 1", value: "Season 1" },
  { label: "Season 2", value: "Season 2" },
  { label: "Season 3", value: "Season 3" },
  { label: "Season 4", value: "Season 4" },
];

const episodeOptions = [
  { label: "Episode 1", value: "Episode 1" },
  { label: "Episode 2", value: "Episode 2" },
  { label: "Episode 3", value: "Episode 3" },
  { label: "Episode 4", value: "Episode 4" },
];

const characterOptions = [
  { label: "Elliot Alderson", value: "Elliot Alderson" },
  { label: "Darlene", value: "Darlene" },
  { label: "Mr. Robot", value: "Mr. Robot" },
  { label: "Angela", value: "Angela" },
];

const ShowPageA = (): JSX.Element => {
  const router = useRouter();
  const { data, loading, error } = useQuoteManyQuery({
    variables: {
      filter: {
        show: router.query.showId,
      },
    },
  });

  const quotes = (data?.quoteMany ?? []).map((quote) => ({
    id: quote?._id,
    characterName: quote?.characters?.[0]?.characterName,
    imageUrl: quote?.characters?.[0]?.coverPicture,
    season: quote?.season,
    episode: quote?.episode,
    quote: quote?.markup,
    showYear: 2015, // TODO
  }));

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="px-4">
      <ShowDetail />
      <div className="h-8"></div>
      {/* TODO: Filters */}
      <div className="flex justify-between">
        <div className="flex-1 pr-4">
          <SelectField
            // defaultValue,
            label="Season"
            options={seasonOptions}
            placeholder="Season"
            // value={}
            // onChange={}
          />
        </div>
        <div className="flex-1 pr-4">
          <SelectField
            // defaultValue,
            label="Episode"
            options={episodeOptions}
            placeholder="Episode"
            // value={}
            // onChange={}
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
      {quotes.map((quote) => (
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
    </div>
  );
};

export default ShowPageA;
