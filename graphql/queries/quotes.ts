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
