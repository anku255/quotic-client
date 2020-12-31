import { gql } from "@apollo/client";

export const HOME_PAGE_QUERY = gql`
  query homePage($quotesLimit: Int!, $showsLimit: Int!) {
    trendingQuotes(limit: $quotesLimit) {
      quote {
        _id
        show {
          _id
          year
          name
          seasons
          genre
        }
        markup
        season
        episode
        mainCharacter {
          _id
          coverPicture
        }
      }

      quotesCount
    }

    trendingShows(limit: $showsLimit) {
      _id
      name
      year
      coverPicture
      type
    }
  }
`;
