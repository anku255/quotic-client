import React, { useState } from "react";
import Select from "react-select";
import ReactMde from "react-mde";

import {
  useGetAllShowsQuery,
  Show,
  useGetAllCharactersQuery,
  Quote,
  useCreateManyQuotesMutation
} from "../../generated/apolloComponents";
import { withApollo } from "../../lib/withApollo";
import { converter, parseQuotes, IShowOption, CharacterMap, getShowOptions } from "./helpers";

import Layout from "../../components/Layout";
import QuoteCard from "../../components/Quote";
import AddCharacter from "../../components/AddCharacter";

const AddQuotesPage: React.FunctionComponent = () => {
  const [show, setShow] = useState<IShowOption | undefined | null>();
  const [season, setSeason] = useState("");
  const [episode, setEpisode] = useState("");
  const [value, setValue] = React.useState("");
  const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("write");
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

  const showsCharacters = (charactersData?.characterMany ?? []).reduce((acc: CharacterMap, curr) => {
    if (curr?.characterName) {
      acc[curr?.characterName] = curr;
    }
    return acc;
  }, {});

  return (
    <Layout title="Add Quotes" showFooter={false}>
      <div className="px-4 py-4">
        <div>
          <h1 className="py-2 text-2xl font-bold">Add Quotes</h1>
          <div className="pb-8 flex items-center">
            <div className="w-1/3 pr-4">
              <label>Show</label>
              <Select
                options={getShowOptions(data?.showMany as [Show])}
                value={show}
                onChange={val => setShow(val as IShowOption)}
              />
            </div>
            <div className="w-1/3 pr-4">
              <label>Season</label>
              <input
                className=" bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                type="text"
                name="season"
                value={season}
                onChange={e => setSeason(e.target.value)}
              />
            </div>
            <div className="w-1/3">
              <label>Episode</label>
              <input
                className=" bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                type="text"
                name="episode"
                value={episode}
                onChange={e => setEpisode(e.target.value)}
              />
            </div>
          </div>

          {/* Editor and Quote Cards */}
          <div className="flex">
            <div className="w-1/2 pr-4 pb-12">
              <ReactMde
                value={value}
                onChange={setValue}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))}
              />
            </div>
            <div className="w-1/2">
              <div className="border border-gray-500 h-64 overflow-y-auto">
                {quotes?.map(q => (
                  <div key={q._id}>
                    <QuoteCard quote={q} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <button
              className="mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={e => {
                e.preventDefault();
                const parsed = parseQuotes(value, show as any, showsCharacters, parseInt(season), parseInt(episode));

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
        </div>

        <AddCharacter />
      </div>
    </Layout>
  );
};

export default withApollo()(AddQuotesPage);
