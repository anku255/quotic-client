import gql from "graphql-tag";

export const ALL_QUOTES_QUERY = gql`
  query getAllQuotes {
    quoteMany {
      raw
      show {
        name
        year
        type
      }
    }
  }
`;

export const GET_QUOTES_QUERY = gql`
  query quoteMany($filter: FilterFindManyQuoteInput) {
    quoteMany(filter: $filter) {
      _id
      show {
        _id
      }
      markup
      season
      episode
      characters {
        _id
        coverPicture
        characterName
      }
    }
  }
`;
