import React, { useState } from "react";
import AutoSuggest from "react-autosuggest";
import Link from "next/link";
import { useApolloClient } from "@apollo/client";
import { stripHtml } from "@/utils/strip-html";
import { SEARCH_QUERY } from "graphql/queries/search.queries";

interface IBaseSuggestion {
  id: string;
  imageUrl: string;
}

interface IQuoteSuggestion extends IBaseSuggestion {
  type: "quote";
  quote: string;
}

interface IShowSuggestion extends IBaseSuggestion {
  type: "show";
  showYear: number;
  showName: string;
}

interface ICharacterSuggestion extends IBaseSuggestion {
  type: "character";
  characterName: string;
  showName: string;
}

type ISuggestion = IQuoteSuggestion | IShowSuggestion | ICharacterSuggestion;

const getSuggestionValue = (suggestion: ISuggestion): string => {
  switch (suggestion.type) {
    case "quote":
      return stripHtml(suggestion.quote);
    case "character":
      return suggestion.characterName;
    case "show":
      return suggestion.showName;
    default:
      return "";
  }
};

const SuggestionContainer = ({
  type,
  id,
  children,
}: {
  type: "quote" | "character" | "show";
  id: string;
  children: React.ReactNode;
}) => (
  <div className="p-3">
    <Link href={`/${type}/[${type}Id]`} as={`/${type}/${id}`}>
      <a className="flex items-center">{children}</a>
    </Link>
  </div>
);

const SuggestionItem = (suggestion: ISuggestion) => {
  if (suggestion.type === "show") {
    return (
      <SuggestionContainer id={suggestion.id} type={suggestion.type}>
        <div className="w-10 h-12">
          <img className="w-full h-full object-cover rounded" src={suggestion.imageUrl} alt="" />
        </div>
        <div className="pl-3">
          <div className="font-serif">{suggestion.showName}</div>
          <div className="text-sm text-baliHai">{suggestion.showYear}</div>
        </div>
      </SuggestionContainer>
    );
  }

  if (suggestion.type === "character") {
    return (
      <SuggestionContainer id={suggestion.id} type={suggestion.type}>
        <div className="w-10 h-12">
          <img className="w-full h-full object-cover rounded" src={suggestion.imageUrl} alt="" />
        </div>
        <div className="pl-3">
          <div className="font-serif">{suggestion.characterName}</div>
          <div className="text-sm text-baliHai">{suggestion.showName}</div>
        </div>
      </SuggestionContainer>
    );
  }

  if (suggestion.type === "quote") {
    return (
      <SuggestionContainer id={suggestion.id} type={suggestion.type}>
        <div className="w-10 h-12 flex-shrink-0 flex justify-center items-center">
          <svg className="w-8 h-8 text-radicalRed " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.68 21.5">
            <g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" data-name="Quote icon">
              <path d="M21.16 13.07c-.91-3.89-.29-7.57 2.54-10.21a8.52 8.52 0 019.97-.9c2.52 1.73 4.39 6.58 2.42 9.8a6.31 6.31 0 01-9.01 1.97 4.23 4.23 0 000 2.8 4.46 4.46 0 001.78 2.52c1.03.88 6.2 2.09 1.13 1.6a9.49 9.49 0 01-8.83-7.58z" />
              <path d="M1.16 13.07C.26 9.18.87 5.5 3.68 2.86a8.39 8.39 0 019.88-.9c2.5 1.72 4.35 6.58 2.4 9.8a6.22 6.22 0 01-8.94 1.96 4.27 4.27 0 000 2.82 4.46 4.46 0 001.78 2.51c1.01.88 6.14 2.09 1.11 1.6a9.44 9.44 0 01-8.75-7.58z" />
            </g>
          </svg>
        </div>
        <div className="pl-3">
          <div className="font-serif overflow-hidden clamp-2" dangerouslySetInnerHTML={{ __html: suggestion.quote }} />
        </div>
      </SuggestionContainer>
    );
  }

  return null;
};

export const SearchField = (): JSX.Element => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const client = useApolloClient();

  return (
    <div className="search-field relative  sm:mx-auto sm:max-w-700-px">
      <AutoSuggest<any>
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={async ({ value }) => {
          setValue(value);
          const res = await client.query({
            query: SEARCH_QUERY,
            variables: { query: value },
          });
          setSuggestions(res.data.searchByQuery as any);
        }}
        shouldRenderSuggestions={(value) => value.length > 2}
        onSuggestionSelected={(_, { suggestionValue }) => console.log("Selected: " + suggestionValue)}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={(suggestion) => <SuggestionItem {...suggestion} />}
        inputProps={{
          placeholder: "Search quotes, series or anything",
          value: value,
          onChange: (_, { newValue }) => {
            setValue(newValue);
          },
        }}
        highlightFirstSuggestion={true}
      />
      {/* Search Icon */}
      <div className="search-icon absolute  sm:bg-radicalRed">
        {/* prettier-ignore */}
        <svg className="w-4 h-4 text-blackRussian sm:w-8 sm:h-8 sm:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <style jsx global>{`
        :root {
          --zircon: #fcfdff;
          --baliHai: #869bb3;
          --aliceBlue: #eff7ff;
          --white: white;
          --shadow: 0px 10px 20px #869bb31a;
        }

        .search-field input {
          position: relative;
          width: 100%;
          padding: 1.25rem;
          padding-right: 2.5rem;
          height: 3.75rem;
          font-size: 0.875rem;
          color: var(--blackRussian);
          background: var(--white);
          box-shadow: var(--shadow);
          border-radius: 0.5rem;
        }

        .search-field input::placeholder {
          color: var(--baliHai);
        }

        .search-field input:focus {
          outline: none;
          border: 1px solid var(--baliHai);
          border-radius: 8px 8px 0px 0px;
          box-shadow: none;
        }

        .search-field .react-autosuggest__suggestions-container {
          box-shadow: var(--shadow);
          background: var(--white);
          border-radius: 0 0 8px 8px;
          position: absolute;
          width: 100%;
          left: 0;
          top: 60px;
          max-height: 60vh;
          overflow-y: auto;
        }

        .search-field .react-autosuggest__suggestion.react-autosuggest__suggestion--highlighted {
          background: var(--aliceBlue);
        }

        .search-icon {
          top: 1.5rem;
          right: 1.25rem;
        }

        @media (min-width: 640px) {
          .search-field input {
            height: 4.5rem;
            font-size: 1.25rem;
            padding: 1.5rem;
            padding-left: 2.5rem;
            padding-right: 4.5rem;
            box-shadow: 0 10px 20px 0 rgba(134, 155, 179, 0.1);
          }

          .search-icon {
            top: -1px;
            right: -3px;
            width: 4.5rem;
            height: 73px;
            box-shadow: 0 10px 20px 0 rgba(134, 155, 179, 0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
          }

          .search-field .react-autosuggest__suggestions-container {
            top: 72px;
          }
        }
      `}</style>
    </div>
  );
};
