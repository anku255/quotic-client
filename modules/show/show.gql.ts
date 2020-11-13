import gql from "graphql-tag";

export const SHOW_PAGE_QUERY = gql`
  query showPage($showId: MongoID!, $quotesFilter: FilterFindManyQuoteInput, $quoteCountFilter: FilterQuoteInput) {
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
    quoteCount(filter: $quoteCountFilter)
  }
`;
