import gql from "graphql-tag";

export const SEARCH_CHARACTERS_QUERY = gql`
  query searchCharacters($realName: String, $characterName: String, $showId: String, $limit: Int) {
    searchCharacters(realName: $realName, characterName: $characterName, showId: $showId, limit: $limit) {
      _id
      characterName
      coverPicture
    }
  }
`;
