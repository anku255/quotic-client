import gql from "graphql-tag";

export const CREATE_QUOTES_MUTATION = gql`
  mutation createManyQuotes($records: [CreateManyQuoteInput!]!) {
    quoteCreateMany(records: $records) {
      records {
        _id
      }
    }
  }
`;
