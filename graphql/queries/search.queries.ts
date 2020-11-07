import gql from "graphql-tag";

export const SEARCH_QUERY = gql`
  query searchByQuery($query: String!) {
    searchByQuery(query: $query) {
      id
      imageUrl
      type
      quote
      showName
      showYear
      characterName
    }
  }
`;
