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
        <div className="w-10 h-12 flex-shrink-0">
          <img className="w-full h-full object-cover rounded" src={suggestion.imageUrl} alt="" />
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
    <div className="search-field relative">
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
      <div className="absolute" style={{ right: "1.25rem", top: "1.50rem" }}>
        {/* prettier-ignore */}
        <svg className="w-4 h-4 text-blackRussian" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <style jsx global>{`
        :root {
          --zircon: #fcfdff;
          --baliHai: #869bb3;24;
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
      `}</style>
    </div>
  );
};
