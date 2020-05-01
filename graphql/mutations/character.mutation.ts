import gql from "graphql-tag";

export const CREATE_CHARACTER_MUTATION = gql`
  mutation createCharacter($record: CreateOneCharacterInput!) {
    characterCreateOne(record: $record) {
      record {
        _id
      }
    }
  }
`;
