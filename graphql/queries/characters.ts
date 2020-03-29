import gql from "graphql-tag";

export const ALL_CHARACTERS_QUERY = gql`
  query getAllCharacters($filter: FilterFindManyCharacterInput) {
    characterMany(filter: $filter) {
      _id
      characterName
      coverPicture
    }
  }
`;
