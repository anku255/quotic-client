import gql from "graphql-tag";

export const SHOW_DETAIL_QUERY = gql`
  query showDetails($showId: MongoID!, $quoteCountFilter: FilterQuoteInput) {
    showById(_id: $showId) {
      _id
      name
      description
      genre
      type
      year
      coverPicture
      imdbLink
      seasons
      episodes {
        season
        episodes
      }
    }

    quoteCount(filter: $quoteCountFilter)
  }
`;

export const QUOTES_BY_SHOW_QUERY = gql`
  query quotesByShow($quotesFilter: FilterFindManyQuoteInput) {
    quoteMany(filter: $quotesFilter) {
      _id
      show {
        _id
        year
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
