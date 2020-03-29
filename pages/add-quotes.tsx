import React, { useState, useEffect } from "react";
import Select from "react-select";

import Layout from "../components/Layout";
import { useGetAllShowsQuery, Show } from "../generated/apolloComponents";
import { withApollo } from "../lib/withApollo";

interface IShowOption {
  label: string | undefined | null;
  value: Show;
}

const getShowOptions = (shows: [Show]): Array<IShowOption> => {
  return typeof shows === "undefined"
    ? []
    : shows.map(s => ({ label: s.name, value: s }));
};

const AddQuotesPage: React.FunctionComponent = () => {
  const [show, setShow] = useState<IShowOption | undefined | null>();
  const [season, setSeason] = useState("");
  const [episode, setEpisode] = useState("");

  const { data } = useGetAllShowsQuery();

  return (
    <Layout title="Add Quotes">
      <div>
        <Select
          options={getShowOptions(data?.showMany as [Show])}
          value={show}
          onChange={val => setShow(val as IShowOption)}
        />
      </div>
      <div>
        <label>Season</label>
        <input
          type="text"
          name="season"
          value={season}
          onChange={e => setSeason(e.target.value)}
        />
      </div>
      <div>
        <label>Episode</label>
        <input
          type="text"
          name="episode"
          value={episode}
          onChange={e => setEpisode(e.target.value)}
        />
      </div>
    </Layout>
  );
};

export default withApollo()(AddQuotesPage);
