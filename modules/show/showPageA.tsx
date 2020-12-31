import React, { useState } from "react";
import { useApolloClient } from "@apollo/client";
import { SelectField, AsyncSelectField } from "./components/SelectField";
import { NextRouter, useRouter } from "next/router";
import { QuoteCard, QuoteCardSkeleton } from "./components/QuoteCard";
import { useShowPageQuery, Show, useQuoteManyQuery } from "@/generated/apolloHooks";
import { If } from "@/components/If";
import { nullableNumber } from "@/types/index";
import { SEARCH_CHARACTERS_QUERY } from "@/graphql/queries/characters.queries";
import { ApolloClient } from "@apollo/client";
import { stringifyQueryParams } from "@/utils/commonHelpers";

interface ShowWithQuoteCount extends Show {
  quotesCount?: nullableNumber;
}

interface IGenericOption {
  label: string;
  value: string;
}

interface ICharacterOption extends IGenericOption {
  coverPicture?: string;
}

async function fetchCharacters(
  client: ApolloClient<Record<string, unknown>>,
  query: string
): Promise<ICharacterOption[]> {
  const res = await client.query({
    query: SEARCH_CHARACTERS_QUERY,
    variables: { characterName: query, limit: 10 },
  });
  const characters = res.data?.searchCharacters ?? [];
  return characters.map((c: any) => ({
    label: c.characterName,
    value: c._id,
    coverPicture: c.coverPicture,
  }));
}

const ShowDetail = ({ show }: { show: ShowWithQuoteCount }) => (
  <div className="">
    <h1 className="text-3xl font-semibold">{show.name}</h1>
    <div className="flex font-serif text-sm text-baliHai ">
      <If condition={!!show.year} then={<span className="">{show.year}</span>} />
      <If condition={!!show.seasons} then={<span className="">&nbsp;&middot;&nbsp; Seasons {show.seasons}</span>} />
      <If
        condition={!!show.quotesCount}
        then={<span className="">&nbsp;&middot;&nbsp;{show.quotesCount} Quotes</span>}
      />
      {/* <span className="">IMDb 8.5 &middot;&nbsp;</span> */}
    </div>

    <div className="h-6"></div>
    <div className="flex">
      {/* Image */}
      <div className="pr-4 flex-shrink-0 w-32 h-42">
        <img className="h-full object-cover rounded-lg shadow-primary" src={show.coverPicture!} alt="" />
      </div>
      {/* Description */}
      <p className="flex-1 text-md font-serif clamp-7 overflow-hidden">{show.description}</p>
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

/**
 *
 * @param labelPrefix Season | Episode
 * @param count total number of options
 * @returns [ {label: 'Season 1', value '1' }...]
 */
const getOptions = (labelPrefix: string, count: number) =>
  new Array(count).fill(0).map((_, i) => ({ label: `${labelPrefix} ${i + 1}`, value: `${i + 1}` }));

/**
 *
 * @param router Router
 * @param queryParams
 * @returns void
 * Updates the URL with the given query params
 */
const updateUrl = (router: NextRouter, queryParams: { [key: string]: string }): void => {
  const { showId, showType } = router.query;
  const { season, episode, ...restOfQP } = queryParams;
  router.replace(
    `/show/[showId]/[showType]/s/[season]/e/[episode]${stringifyQueryParams(restOfQP)}`,
    `/show/${showId}/${showType}/s/${season}/e/${episode}${stringifyQueryParams(restOfQP)}`,
    { shallow: true }
  );
};

const arrayOfLengthFive = new Array(5).fill(0).map((_, i) => i);

const ShowPageA = (): JSX.Element => {
  const router = useRouter();
  const client = useApolloClient();

  const { season, episode, showId, showType, characterName, characterId } = router.query;

  const [selectedSeason, setSelectedSeason] = useState<number>(season ? +season : 1);
  const [selectedEpisode, setSelectedEpisode] = useState<number | undefined>(episode ? +episode : 1);
  const [selectedCharacter, setSelectedCharacter] = useState<IGenericOption | undefined>(
    characterName && characterId ? { label: characterName as string, value: characterId as string } : undefined
  );

  const { data: showPageData, loading, error } = useShowPageQuery({
    variables: {
      showId: showId,
      quotesFilter: {
        show: showId,
        season: selectedSeason,
        episode: selectedEpisode,
        ...(selectedCharacter && { characters: [selectedCharacter.value] }),
      },
    },
  });

  const { data: quotesData, loading: quoteManyLoading } = useQuoteManyQuery({
    variables: {
      filter: {
        show: showId,
        season: selectedSeason,
        episode: selectedEpisode,
        ...(selectedCharacter && { characters: [selectedCharacter.value] }),
      },
    },
  });

  const show: ShowWithQuoteCount = {
    ...showPageData?.showById,
    _id: showPageData?.showById?._id,
    quotesCount: showPageData?.quoteCount,
  };

  const quotes = (quotesData?.quoteMany ?? []).map((quote) => ({
    id: quote?._id,
    characterName: quote?.characters?.[0]?.characterName,
    imageUrl: quote?.characters?.[0]?.coverPicture,
    season: quote?.season,
    episode: quote?.episode,
    quote: quote?.markup,
    showYear: (show as any)?.year,
  }));

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="px-4 lg:px-37 lg:pb-8">
      <ShowDetail show={show} />
      <div className="h-8"></div>
      {/* TODO: Filters */}
      <div className="lg:max-w-700-px">
        <div className="flex justify-between">
          <div className="flex-1 pr-4">
            <SelectField
              label="Season"
              options={getOptions("Season", show?.episodes?.length ?? 1)}
              placeholder="Season"
              value={{ label: `Season ${selectedSeason}`, value: `${selectedSeason}` }}
              onChange={(option) => {
                const nextSeason = +option.value;
                if (selectedSeason !== nextSeason) {
                  updateUrl(router, { season: nextSeason.toString() });
                  setSelectedSeason(nextSeason);
                }
              }}
            />
          </div>
          <div className="flex-1 pr-4">
            <SelectField
              label="Episode"
              options={getOptions("Episode", show?.episodes?.[selectedSeason - 1]?.episodes ?? 1)}
              placeholder="Episode"
              isClearable
              value={selectedEpisode ? { label: `Episode ${selectedEpisode}`, value: `${selectedEpisode}` } : undefined}
              onChange={(option) => {
                if (!option) {
                  updateUrl(router, { season: selectedSeason.toString() });
                  setSelectedEpisode(undefined);
                } else {
                  const nextEpisode = +option.value;
                  if (selectedEpisode !== nextEpisode) {
                    updateUrl(router, { season: selectedSeason.toString(), episode: nextEpisode.toString() });
                    setSelectedEpisode(nextEpisode);
                  }
                }
              }}
            />
          </div>
          <div className="flex-1">
            <AsyncSelectField
              label="Character"
              fetchOptions={({ query }) => fetchCharacters(client as any, query)}
              value={selectedCharacter}
              placeholder="Character"
              isClearable
              onChange={(option: ICharacterOption | undefined) => {
                if (!option) {
                  updateUrl(router, {
                    season: selectedSeason.toString(),
                    ...(selectedEpisode && { episode: selectedEpisode.toString() }),
                  });
                  setSelectedCharacter(undefined);
                } else {
                  updateUrl(router, {
                    season: selectedSeason.toString(),
                    ...(selectedEpisode && { episode: selectedEpisode.toString() }),
                    characterName: option.label,
                    characterId: option.value,
                  });
                  setSelectedCharacter(option);
                }
              }}
            />
          </div>
        </div>
        <div className="h-8"></div>
        <If
          condition={quoteManyLoading}
          then={arrayOfLengthFive.map((i) => (
            <div key={i} className="mb-4">
              <QuoteCardSkeleton />
            </div>
          ))}
          else={quotes.map((quote) => (
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
        />
      </div>
    </div>
  );
};

export default ShowPageA;
