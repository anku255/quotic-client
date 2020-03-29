import React, { useState, ChangeEvent } from "react";
import Select from "react-select";
import ReactMde from "react-mde";
import * as Showdown from "showdown";

import Layout from "../components/Layout";
import QuoteCard from "../components/Quote";
import {
  useGetAllShowsQuery,
  Show,
  useGetAllCharactersQuery,
  Character,
  Quote,
  useCreateManyQuotesMutation
} from "../generated/apolloComponents";
import { withApollo } from "../lib/withApollo";

type InputProps = {
  name: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

type CharacterMap = { [key: string]: Character };

const Input = ({
  type = "text",
  name,
  placeholder = "",
  value = "",
  onChange
}: InputProps) => {
  return (
    <input
      name={name}
      className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

interface IShowOption {
  label: string | undefined | null;
  value: Show;
}

const getShowOptions = (shows: [Show]): Array<IShowOption> => {
  return typeof shows === "undefined"
    ? []
    : shows.map(s => ({ label: s.name, value: s }));
};

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

const parseQuotes = (
  value: string,
  show: IShowOption,
  showsCharacters: CharacterMap,
  season: number,
  episode: number
) => {
  return value.split("---").map(quote => {
    const characters = (quote.match(/(\*\*.*\*\*)/g) ?? [])
      .map(c => c.replace(/\*/g, ""))
      .map(c => showsCharacters[c]);
    return {
      raw: quote,
      markup: converter.makeHtml(quote),
      show: show.value._id,
      characters,
      season,
      episode,
      mainCharacter: characters[0]
    };
  });
};

const AddQuotesPage: React.FunctionComponent = () => {
  const [show, setShow] = useState<IShowOption | undefined | null>();
  const [season, setSeason] = useState("");
  const [episode, setEpisode] = useState("");
  const [value, setValue] = React.useState("");
  const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">(
    "write"
  );
  const [createManyQuotes] = useCreateManyQuotesMutation();
  const [quotes, setQuotes] = useState<Quote[]>();

  const { data } = useGetAllShowsQuery();
  const { data: charactersData } = useGetAllCharactersQuery({
    variables: {
      filter: {
        shows: [show?.value._id]
      }
    }
  });

  const showsCharacters = (charactersData?.characterMany ?? []).reduce(
    (acc: CharacterMap, curr) => {
      if (curr?.characterName) {
        acc[curr?.characterName] = curr;
      }
      return acc;
    },
    {}
  );

  return (
    <Layout title="Add Quotes">
      <div className="w-56">
        <Select
          options={getShowOptions(data?.showMany as [Show])}
          value={show}
          onChange={val => setShow(val as IShowOption)}
        />
      </div>

      {/* Inputs  */}
      <div className="flex">
        <div className="w-1/2 pr-4">
          <label>Season</label>
          <Input
            type="text"
            name="season"
            value={season}
            onChange={e => setSeason(e.target.value)}
          />
        </div>
        <div className="w-1/2">
          <label>Episode</label>
          <Input
            type="text"
            name="episode"
            value={episode}
            onChange={e => setEpisode(e.target.value)}
          />
        </div>
      </div>
      <div className="container">
        <ReactMde
          value={value}
          onChange={setValue}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          generateMarkdownPreview={markdown =>
            Promise.resolve(converter.makeHtml(markdown))
          }
        />
      </div>
      {/* QuoteCards */}
      <div className="border border-gray-500">
        {quotes?.map(q => (
          <div key={q._id}>
            <QuoteCard quote={q} />
          </div>
        ))}
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={e => {
            e.preventDefault();
            const parsed = parseQuotes(
              value,
              show as any,
              showsCharacters,
              parseInt(season),
              parseInt(episode)
            );

            setQuotes(parsed as any);
          }}
        >
          Preview
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={e => {
            e.preventDefault();
            createManyQuotes({
              variables: {
                records: quotes?.map(q => ({
                  ...q,
                  characters: q.characters?.map(c => c?._id),
                  mainCharacter: q.mainCharacter?._id
                })) as any
              }
            });
          }}
        >
          Submit
        </button>
      </div>
    </Layout>
  );
};

export default withApollo()(AddQuotesPage);
