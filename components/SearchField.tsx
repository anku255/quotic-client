import { stripHtml } from "@/utils/strip-html";
import React, { useState } from "react";
import AutoSuggest from "react-autosuggest";

const quotesSuggestions = [
  { type: "show", id: 1, showName: "Mr. Robot", showYear: 2015, imageUrl: "https://i.imgur.com/91cJJrB.png" },
  { type: "show", id: 1, showName: "The Big Bang Theory", showYear: 2009, imageUrl: "https://i.imgur.com/qJBq8HA.png" },
  {
    type: "quote",
    id: 2,
    quote: `
    <p><strong>Elliot: </strong> <p>A bug is never just a mistake</p></p>
  `,
    imageUrl: "https://i.imgur.com/kv3nT2a.png",
  },
  {
    type: "character",
    id: 3,
    characterName: "Elliot Alerson",
    showName: "Mr. Robot",
    imageUrl: "https://i.imgur.com/91cJJrB.png",
  },
];

interface IBaseSuggestion {
  id: number;
  imageUrl: string;
  multiSection: boolean;
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

const SuggestionContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="p-3">
    <div className="flex items-center">{children}</div>
  </div>
);

const SuggestionItem = (suggestion: ISuggestion) => {
  if (suggestion.type === "show") {
    return (
      <SuggestionContainer>
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
      <SuggestionContainer>
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
      <SuggestionContainer>
        <div className="w-10 h-12">
          <img className="w-full h-full object-cover rounded" src={suggestion.imageUrl} alt="" />
        </div>
        <div className="pl-3">
          <div className="font-serif" dangerouslySetInnerHTML={{ __html: suggestion.quote }} />
        </div>
      </SuggestionContainer>
    );
  }

  return null;
};

export const SearchField = (): JSX.Element => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState(quotesSuggestions);

  return (
    <div className="search-field relative">
      <AutoSuggest<any>
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          setValue(value);
          setSuggestions(quotesSuggestions);
        }}
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
