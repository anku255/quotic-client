import gql from "graphql-tag";

export const ALL_SHOW_QUERY = gql`
  query getAllShows {
    showMany {
      name
      _id
    }
  }
`;
