import { Character, Show } from "@/generated/apolloHooks";
import Showdown from "showdown";

export type CharacterMap = { [key: string]: Character };

export interface IShowOption {
  label: string | undefined | null;
  value: Show;
}

export const getShowOptions = (shows: [Show]): Array<IShowOption> => {
  return typeof shows === "undefined" ? [] : shows.map((s) => ({ label: s.name, value: s }));
};

export const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

export const parseQuotes = (
  value: string,
  show: IShowOption,
  showsCharacters: CharacterMap,
  season: number,
  episode: number
) => {
  return value.split("---").map((quote) => {
    const characters = (quote.match(/(\*\*.*\*\*)/g) ?? [])
      .map((c) => c.replace(/\*/g, ""))
      .map((c) => showsCharacters[c]);
    return {
      raw: quote,
      markup: converter.makeHtml(quote),
      show: show.value._id,
      characters,
      season,
      episode,
      mainCharacter: characters[0],
    };
  });
};
