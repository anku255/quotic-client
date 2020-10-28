import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  MongoID: any;
  Date: any;
};

export type _IdOperatorsFilterCharacterInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterFindManyCharacterInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterFindManyQuoteInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterFindManyShowInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterFindManyUserInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterFindOneCharacterInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterFindOneQuoteInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterFindOneShowInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterFindOneUserInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterQuoteInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterRemoveOneCharacterInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterRemoveOneQuoteInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterRemoveOneShowInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterRemoveOneUserInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterShowInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterUpdateOneCharacterInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterUpdateOneQuoteInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterUpdateOneShowInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterUpdateOneUserInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type _IdOperatorsFilterUserInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
};

export type AccessToken = {
   __typename?: 'AccessToken';
  accessToken: Scalars['String'];
};

export type Character = {
   __typename?: 'Character';
  characterName?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  coverPicture?: Maybe<Scalars['String']>;
  shows?: Maybe<Array<Maybe<Show>>>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};


export type CharacterShowsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsShowInput>;
};

export type CreateManyQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw: Scalars['String'];
  show: Scalars['MongoID'];
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter: Scalars['MongoID'];
  season: Scalars['Float'];
  episode: Scalars['Float'];
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type CreateManyQuotePayload = {
   __typename?: 'CreateManyQuotePayload';
  recordIds: Array<Maybe<Scalars['MongoID']>>;
  records: Array<Maybe<Quote>>;
  createCount: Scalars['Int'];
};

export type CreateOneCharacterInput = {
  characterName: Scalars['String'];
  realName: Scalars['String'];
  imdbLink: Scalars['String'];
  dob: Scalars['Date'];
  coverPicture: Scalars['String'];
  shows?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type CreateOneCharacterPayload = {
   __typename?: 'CreateOneCharacterPayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<Character>;
};

export type CreateOneQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw: Scalars['String'];
  show: Scalars['MongoID'];
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter: Scalars['MongoID'];
  season: Scalars['Float'];
  episode: Scalars['Float'];
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type CreateOneQuotePayload = {
   __typename?: 'CreateOneQuotePayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<Quote>;
};

export type CreateOneShowInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  genre: Array<Maybe<Scalars['String']>>;
  type: EnumShowType;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type CreateOneShowPayload = {
   __typename?: 'CreateOneShowPayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<Show>;
};

export type CreateOneUserInput = {
  fullName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type CreateOneUserPayload = {
   __typename?: 'CreateOneUserPayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<User>;
};


export enum EnumShowType {
  Series = 'SERIES',
  Movie = 'MOVIE'
}

export type FilterCharacterInput = {
  characterName?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  coverPicture?: Maybe<Scalars['String']>;
  shows?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterCharacterInput>;
  OR?: Maybe<Array<FilterCharacterInput>>;
  AND?: Maybe<Array<FilterCharacterInput>>;
};

export type FilterFindManyCharacterInput = {
  characterName?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  coverPicture?: Maybe<Scalars['String']>;
  shows?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterFindManyCharacterInput>;
  OR?: Maybe<Array<FilterFindManyCharacterInput>>;
  AND?: Maybe<Array<FilterFindManyCharacterInput>>;
};

export type FilterFindManyQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['MongoID']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter?: Maybe<Scalars['MongoID']>;
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterFindManyQuoteInput>;
  OR?: Maybe<Array<FilterFindManyQuoteInput>>;
  AND?: Maybe<Array<FilterFindManyQuoteInput>>;
};

export type FilterFindManyShowInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<EnumShowType>;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterFindManyShowInput>;
  OR?: Maybe<Array<FilterFindManyShowInput>>;
  AND?: Maybe<Array<FilterFindManyShowInput>>;
};

export type FilterFindManyUserInput = {
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterFindManyUserInput>;
  OR?: Maybe<Array<FilterFindManyUserInput>>;
  AND?: Maybe<Array<FilterFindManyUserInput>>;
};

export type FilterFindOneCharacterInput = {
  characterName?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  coverPicture?: Maybe<Scalars['String']>;
  shows?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterFindOneCharacterInput>;
  OR?: Maybe<Array<FilterFindOneCharacterInput>>;
  AND?: Maybe<Array<FilterFindOneCharacterInput>>;
};

export type FilterFindOneQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['MongoID']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter?: Maybe<Scalars['MongoID']>;
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterFindOneQuoteInput>;
  OR?: Maybe<Array<FilterFindOneQuoteInput>>;
  AND?: Maybe<Array<FilterFindOneQuoteInput>>;
};

export type FilterFindOneShowInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<EnumShowType>;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterFindOneShowInput>;
  OR?: Maybe<Array<FilterFindOneShowInput>>;
  AND?: Maybe<Array<FilterFindOneShowInput>>;
};

export type FilterFindOneUserInput = {
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterFindOneUserInput>;
  OR?: Maybe<Array<FilterFindOneUserInput>>;
  AND?: Maybe<Array<FilterFindOneUserInput>>;
};

export type FilterQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['MongoID']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter?: Maybe<Scalars['MongoID']>;
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterQuoteInput>;
  OR?: Maybe<Array<FilterQuoteInput>>;
  AND?: Maybe<Array<FilterQuoteInput>>;
};

export type FilterRemoveOneCharacterInput = {
  characterName?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  coverPicture?: Maybe<Scalars['String']>;
  shows?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterRemoveOneCharacterInput>;
  OR?: Maybe<Array<FilterRemoveOneCharacterInput>>;
  AND?: Maybe<Array<FilterRemoveOneCharacterInput>>;
};

export type FilterRemoveOneQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['MongoID']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter?: Maybe<Scalars['MongoID']>;
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterRemoveOneQuoteInput>;
  OR?: Maybe<Array<FilterRemoveOneQuoteInput>>;
  AND?: Maybe<Array<FilterRemoveOneQuoteInput>>;
};

export type FilterRemoveOneShowInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<EnumShowType>;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterRemoveOneShowInput>;
  OR?: Maybe<Array<FilterRemoveOneShowInput>>;
  AND?: Maybe<Array<FilterRemoveOneShowInput>>;
};

export type FilterRemoveOneUserInput = {
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterRemoveOneUserInput>;
  OR?: Maybe<Array<FilterRemoveOneUserInput>>;
  AND?: Maybe<Array<FilterRemoveOneUserInput>>;
};

export type FilterShowInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<EnumShowType>;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterShowInput>;
  OR?: Maybe<Array<FilterShowInput>>;
  AND?: Maybe<Array<FilterShowInput>>;
};

export type FilterUpdateOneCharacterInput = {
  characterName?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  coverPicture?: Maybe<Scalars['String']>;
  shows?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterUpdateOneCharacterInput>;
  OR?: Maybe<Array<FilterUpdateOneCharacterInput>>;
  AND?: Maybe<Array<FilterUpdateOneCharacterInput>>;
};

export type FilterUpdateOneQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['MongoID']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter?: Maybe<Scalars['MongoID']>;
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterUpdateOneQuoteInput>;
  OR?: Maybe<Array<FilterUpdateOneQuoteInput>>;
  AND?: Maybe<Array<FilterUpdateOneQuoteInput>>;
};

export type FilterUpdateOneShowInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<EnumShowType>;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterUpdateOneShowInput>;
  OR?: Maybe<Array<FilterUpdateOneShowInput>>;
  AND?: Maybe<Array<FilterUpdateOneShowInput>>;
};

export type FilterUpdateOneUserInput = {
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterUpdateOneUserInput>;
  OR?: Maybe<Array<FilterUpdateOneUserInput>>;
  AND?: Maybe<Array<FilterUpdateOneUserInput>>;
};

export type FilterUserInput = {
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
  _ids?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _operators?: Maybe<OperatorsFilterUserInput>;
  OR?: Maybe<Array<FilterUserInput>>;
  AND?: Maybe<Array<FilterUserInput>>;
};


export type Mutation = {
   __typename?: 'Mutation';
  userCreateOne?: Maybe<CreateOneUserPayload>;
  userUpdateById?: Maybe<UpdateByIdUserPayload>;
  userUpdateOne?: Maybe<UpdateOneUserPayload>;
  userRemoveById?: Maybe<RemoveByIdUserPayload>;
  userRemoveOne?: Maybe<RemoveOneUserPayload>;
  signIn: AccessToken;
  signUp: AccessToken;
  quoteCreateOne?: Maybe<CreateOneQuotePayload>;
  quoteCreateMany?: Maybe<CreateManyQuotePayload>;
  quoteUpdateById?: Maybe<UpdateByIdQuotePayload>;
  quoteUpdateOne?: Maybe<UpdateOneQuotePayload>;
  quoteRemoveById?: Maybe<RemoveByIdQuotePayload>;
  quoteRemoveOne?: Maybe<RemoveOneQuotePayload>;
  showCreateOne?: Maybe<CreateOneShowPayload>;
  showUpdateById?: Maybe<UpdateByIdShowPayload>;
  showUpdateOne?: Maybe<UpdateOneShowPayload>;
  showRemoveById?: Maybe<RemoveByIdShowPayload>;
  showRemoveOne?: Maybe<RemoveOneShowPayload>;
  characterCreateOne?: Maybe<CreateOneCharacterPayload>;
  characterUpdateById?: Maybe<UpdateByIdCharacterPayload>;
  characterUpdateOne?: Maybe<UpdateOneCharacterPayload>;
  characterRemoveById?: Maybe<RemoveByIdCharacterPayload>;
  characterRemoveOne?: Maybe<RemoveOneCharacterPayload>;
};


export type MutationUserCreateOneArgs = {
  record: CreateOneUserInput;
};


export type MutationUserUpdateByIdArgs = {
  record: UpdateByIdUserInput;
};


export type MutationUserUpdateOneArgs = {
  record: UpdateOneUserInput;
  filter?: Maybe<FilterUpdateOneUserInput>;
  sort?: Maybe<SortUpdateOneUserInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationUserRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationUserRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneUserInput>;
  sort?: Maybe<SortRemoveOneUserInput>;
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignUpArgs = {
  fullName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationQuoteCreateOneArgs = {
  record: CreateOneQuoteInput;
};


export type MutationQuoteCreateManyArgs = {
  records: Array<CreateManyQuoteInput>;
};


export type MutationQuoteUpdateByIdArgs = {
  record: UpdateByIdQuoteInput;
};


export type MutationQuoteUpdateOneArgs = {
  record: UpdateOneQuoteInput;
  filter?: Maybe<FilterUpdateOneQuoteInput>;
  sort?: Maybe<SortUpdateOneQuoteInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationQuoteRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationQuoteRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneQuoteInput>;
  sort?: Maybe<SortRemoveOneQuoteInput>;
};


export type MutationShowCreateOneArgs = {
  record: CreateOneShowInput;
};


export type MutationShowUpdateByIdArgs = {
  record: UpdateByIdShowInput;
};


export type MutationShowUpdateOneArgs = {
  record: UpdateOneShowInput;
  filter?: Maybe<FilterUpdateOneShowInput>;
  sort?: Maybe<SortUpdateOneShowInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationShowRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationShowRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneShowInput>;
  sort?: Maybe<SortRemoveOneShowInput>;
};


export type MutationCharacterCreateOneArgs = {
  record: CreateOneCharacterInput;
};


export type MutationCharacterUpdateByIdArgs = {
  record: UpdateByIdCharacterInput;
};


export type MutationCharacterUpdateOneArgs = {
  record: UpdateOneCharacterInput;
  filter?: Maybe<FilterUpdateOneCharacterInput>;
  sort?: Maybe<SortUpdateOneCharacterInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationCharacterRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationCharacterRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneCharacterInput>;
  sort?: Maybe<SortRemoveOneCharacterInput>;
};

export type OperatorsFilterCharacterInput = {
  _id?: Maybe<_IdOperatorsFilterCharacterInput>;
};

export type OperatorsFilterFindManyCharacterInput = {
  _id?: Maybe<_IdOperatorsFilterFindManyCharacterInput>;
};

export type OperatorsFilterFindManyQuoteInput = {
  _id?: Maybe<_IdOperatorsFilterFindManyQuoteInput>;
};

export type OperatorsFilterFindManyShowInput = {
  _id?: Maybe<_IdOperatorsFilterFindManyShowInput>;
};

export type OperatorsFilterFindManyUserInput = {
  _id?: Maybe<_IdOperatorsFilterFindManyUserInput>;
};

export type OperatorsFilterFindOneCharacterInput = {
  _id?: Maybe<_IdOperatorsFilterFindOneCharacterInput>;
};

export type OperatorsFilterFindOneQuoteInput = {
  _id?: Maybe<_IdOperatorsFilterFindOneQuoteInput>;
};

export type OperatorsFilterFindOneShowInput = {
  _id?: Maybe<_IdOperatorsFilterFindOneShowInput>;
};

export type OperatorsFilterFindOneUserInput = {
  _id?: Maybe<_IdOperatorsFilterFindOneUserInput>;
};

export type OperatorsFilterQuoteInput = {
  _id?: Maybe<_IdOperatorsFilterQuoteInput>;
};

export type OperatorsFilterRemoveOneCharacterInput = {
  _id?: Maybe<_IdOperatorsFilterRemoveOneCharacterInput>;
};

export type OperatorsFilterRemoveOneQuoteInput = {
  _id?: Maybe<_IdOperatorsFilterRemoveOneQuoteInput>;
};

export type OperatorsFilterRemoveOneShowInput = {
  _id?: Maybe<_IdOperatorsFilterRemoveOneShowInput>;
};

export type OperatorsFilterRemoveOneUserInput = {
  _id?: Maybe<_IdOperatorsFilterRemoveOneUserInput>;
};

export type OperatorsFilterShowInput = {
  _id?: Maybe<_IdOperatorsFilterShowInput>;
};

export type OperatorsFilterUpdateOneCharacterInput = {
  _id?: Maybe<_IdOperatorsFilterUpdateOneCharacterInput>;
};

export type OperatorsFilterUpdateOneQuoteInput = {
  _id?: Maybe<_IdOperatorsFilterUpdateOneQuoteInput>;
};

export type OperatorsFilterUpdateOneShowInput = {
  _id?: Maybe<_IdOperatorsFilterUpdateOneShowInput>;
};

export type OperatorsFilterUpdateOneUserInput = {
  _id?: Maybe<_IdOperatorsFilterUpdateOneUserInput>;
};

export type OperatorsFilterUserInput = {
  _id?: Maybe<_IdOperatorsFilterUserInput>;
};

export type Query = {
   __typename?: 'Query';
  userById?: Maybe<User>;
  userByIds?: Maybe<Array<Maybe<User>>>;
  userOne?: Maybe<User>;
  userMany?: Maybe<Array<Maybe<User>>>;
  userCount?: Maybe<Scalars['Int']>;
  me: User;
  quoteById?: Maybe<Quote>;
  quoteByIds?: Maybe<Array<Maybe<Quote>>>;
  quoteOne?: Maybe<Quote>;
  quoteMany?: Maybe<Array<Maybe<Quote>>>;
  quoteCount?: Maybe<Scalars['Int']>;
  showById?: Maybe<Show>;
  showByIds?: Maybe<Array<Maybe<Show>>>;
  showOne?: Maybe<Show>;
  showMany?: Maybe<Array<Maybe<Show>>>;
  showCount?: Maybe<Scalars['Int']>;
  characterById?: Maybe<Character>;
  characterByIds?: Maybe<Array<Maybe<Character>>>;
  characterOne?: Maybe<Character>;
  characterMany?: Maybe<Array<Maybe<Character>>>;
  characterCount?: Maybe<Scalars['Int']>;
};


export type QueryUserByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryUserByIdsArgs = {
  _ids: Array<Maybe<Scalars['MongoID']>>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsUserInput>;
};


export type QueryUserOneArgs = {
  filter?: Maybe<FilterFindOneUserInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneUserInput>;
};


export type QueryUserManyArgs = {
  filter?: Maybe<FilterFindManyUserInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyUserInput>;
};


export type QueryUserCountArgs = {
  filter?: Maybe<FilterUserInput>;
};


export type QueryQuoteByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryQuoteByIdsArgs = {
  _ids: Array<Maybe<Scalars['MongoID']>>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsQuoteInput>;
};


export type QueryQuoteOneArgs = {
  filter?: Maybe<FilterFindOneQuoteInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneQuoteInput>;
};


export type QueryQuoteManyArgs = {
  filter?: Maybe<FilterFindManyQuoteInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyQuoteInput>;
};


export type QueryQuoteCountArgs = {
  filter?: Maybe<FilterQuoteInput>;
};


export type QueryShowByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryShowByIdsArgs = {
  _ids: Array<Maybe<Scalars['MongoID']>>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsShowInput>;
};


export type QueryShowOneArgs = {
  filter?: Maybe<FilterFindOneShowInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneShowInput>;
};


export type QueryShowManyArgs = {
  filter?: Maybe<FilterFindManyShowInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyShowInput>;
};


export type QueryShowCountArgs = {
  filter?: Maybe<FilterShowInput>;
};


export type QueryCharacterByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryCharacterByIdsArgs = {
  _ids: Array<Maybe<Scalars['MongoID']>>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsCharacterInput>;
};


export type QueryCharacterOneArgs = {
  filter?: Maybe<FilterFindOneCharacterInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneCharacterInput>;
};


export type QueryCharacterManyArgs = {
  filter?: Maybe<FilterFindManyCharacterInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyCharacterInput>;
};


export type QueryCharacterCountArgs = {
  filter?: Maybe<FilterCharacterInput>;
};

export type Quote = {
   __typename?: 'Quote';
  markup?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
  show?: Maybe<Show>;
  characters?: Maybe<Array<Maybe<Character>>>;
  mainCharacter?: Maybe<Character>;
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};


export type QuoteCharactersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsCharacterInput>;
};

export type RemoveByIdCharacterPayload = {
   __typename?: 'RemoveByIdCharacterPayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<Character>;
};

export type RemoveByIdQuotePayload = {
   __typename?: 'RemoveByIdQuotePayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<Quote>;
};

export type RemoveByIdShowPayload = {
   __typename?: 'RemoveByIdShowPayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<Show>;
};

export type RemoveByIdUserPayload = {
   __typename?: 'RemoveByIdUserPayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<User>;
};

export type RemoveOneCharacterPayload = {
   __typename?: 'RemoveOneCharacterPayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<Character>;
};

export type RemoveOneQuotePayload = {
   __typename?: 'RemoveOneQuotePayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<Quote>;
};

export type RemoveOneShowPayload = {
   __typename?: 'RemoveOneShowPayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<Show>;
};

export type RemoveOneUserPayload = {
   __typename?: 'RemoveOneUserPayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<User>;
};

export type Show = {
   __typename?: 'Show';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<EnumShowType>;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  characters?: Maybe<Array<Maybe<Character>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};


export type ShowCharactersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsCharacterInput>;
};

export enum SortFindByIdsCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsQuoteInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsShowInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyQuoteInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyShowInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneQuoteInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneShowInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneQuoteInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneShowInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneCharacterInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneQuoteInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneShowInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateByIdCharacterInput = {
  characterName?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  coverPicture?: Maybe<Scalars['String']>;
  shows?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateByIdCharacterPayload = {
   __typename?: 'UpdateByIdCharacterPayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<Character>;
};

export type UpdateByIdQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['MongoID']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter?: Maybe<Scalars['MongoID']>;
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateByIdQuotePayload = {
   __typename?: 'UpdateByIdQuotePayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<Quote>;
};

export type UpdateByIdShowInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<EnumShowType>;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateByIdShowPayload = {
   __typename?: 'UpdateByIdShowPayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<Show>;
};

export type UpdateByIdUserInput = {
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateByIdUserPayload = {
   __typename?: 'UpdateByIdUserPayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<User>;
};

export type UpdateOneCharacterInput = {
  characterName?: Maybe<Scalars['String']>;
  realName?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['Date']>;
  coverPicture?: Maybe<Scalars['String']>;
  shows?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateOneCharacterPayload = {
   __typename?: 'UpdateOneCharacterPayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<Character>;
};

export type UpdateOneQuoteInput = {
  markup?: Maybe<Scalars['String']>;
  raw?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['MongoID']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  mainCharacter?: Maybe<Scalars['MongoID']>;
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
  timestamp?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  audio?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateOneQuotePayload = {
   __typename?: 'UpdateOneQuotePayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<Quote>;
};

export type UpdateOneShowInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  genre?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<EnumShowType>;
  year?: Maybe<Scalars['Float']>;
  seasons?: Maybe<Scalars['Float']>;
  characters?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  coverPicture?: Maybe<Scalars['String']>;
  imdbLink?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateOneShowPayload = {
   __typename?: 'UpdateOneShowPayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<Show>;
};

export type UpdateOneUserInput = {
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type UpdateOneUserPayload = {
   __typename?: 'UpdateOneUserPayload';
  recordId?: Maybe<Scalars['MongoID']>;
  record?: Maybe<User>;
};

export type User = {
   __typename?: 'User';
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
  updatedAt?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['Date']>;
};

export type CreateCharacterMutationVariables = {
  record: CreateOneCharacterInput;
};


export type CreateCharacterMutation = (
  { __typename?: 'Mutation' }
  & { characterCreateOne?: Maybe<(
    { __typename?: 'CreateOneCharacterPayload' }
    & { record?: Maybe<(
      { __typename?: 'Character' }
      & Pick<Character, '_id'>
    )> }
  )> }
);

export type CreateManyQuotesMutationVariables = {
  records: Array<CreateManyQuoteInput>;
};


export type CreateManyQuotesMutation = (
  { __typename?: 'Mutation' }
  & { quoteCreateMany?: Maybe<(
    { __typename?: 'CreateManyQuotePayload' }
    & { records: Array<Maybe<(
      { __typename?: 'Quote' }
      & Pick<Quote, '_id'>
    )>> }
  )> }
);

export type GetAllCharactersQueryVariables = {
  filter?: Maybe<FilterFindManyCharacterInput>;
};


export type GetAllCharactersQuery = (
  { __typename?: 'Query' }
  & { characterMany?: Maybe<Array<Maybe<(
    { __typename?: 'Character' }
    & Pick<Character, '_id' | 'characterName' | 'coverPicture'>
  )>>> }
);

export type GetAllQuotesQueryVariables = {};


export type GetAllQuotesQuery = (
  { __typename?: 'Query' }
  & { quoteMany?: Maybe<Array<Maybe<(
    { __typename?: 'Quote' }
    & Pick<Quote, 'raw'>
    & { show?: Maybe<(
      { __typename?: 'Show' }
      & Pick<Show, 'name' | 'year' | 'type'>
    )> }
  )>>> }
);

export type QuoteManyQueryVariables = {
  filter?: Maybe<FilterFindManyQuoteInput>;
};


export type QuoteManyQuery = (
  { __typename?: 'Query' }
  & { quoteMany?: Maybe<Array<Maybe<(
    { __typename?: 'Quote' }
    & Pick<Quote, '_id' | 'markup' | 'season' | 'episode'>
    & { show?: Maybe<(
      { __typename?: 'Show' }
      & Pick<Show, '_id'>
    )>, characters?: Maybe<Array<Maybe<(
      { __typename?: 'Character' }
      & Pick<Character, '_id' | 'coverPicture' | 'characterName'>
    )>>> }
  )>>> }
);

export type GetAllShowsQueryVariables = {};


export type GetAllShowsQuery = (
  { __typename?: 'Query' }
  & { showMany?: Maybe<Array<Maybe<(
    { __typename?: 'Show' }
    & Pick<Show, 'name' | '_id'>
  )>>> }
);


export const CreateCharacterDocument = gql`
    mutation createCharacter($record: CreateOneCharacterInput!) {
  characterCreateOne(record: $record) {
    record {
      _id
    }
  }
}
    `;
export type CreateCharacterMutationFn = ApolloReactCommon.MutationFunction<CreateCharacterMutation, CreateCharacterMutationVariables>;

/**
 * __useCreateCharacterMutation__
 *
 * To run a mutation, you first call `useCreateCharacterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCharacterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCharacterMutation, { data, loading, error }] = useCreateCharacterMutation({
 *   variables: {
 *      record: // value for 'record'
 *   },
 * });
 */
export function useCreateCharacterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCharacterMutation, CreateCharacterMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateCharacterMutation, CreateCharacterMutationVariables>(CreateCharacterDocument, baseOptions);
      }
export type CreateCharacterMutationHookResult = ReturnType<typeof useCreateCharacterMutation>;
export type CreateCharacterMutationResult = ApolloReactCommon.MutationResult<CreateCharacterMutation>;
export type CreateCharacterMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCharacterMutation, CreateCharacterMutationVariables>;
export const CreateManyQuotesDocument = gql`
    mutation createManyQuotes($records: [CreateManyQuoteInput!]!) {
  quoteCreateMany(records: $records) {
    records {
      _id
    }
  }
}
    `;
export type CreateManyQuotesMutationFn = ApolloReactCommon.MutationFunction<CreateManyQuotesMutation, CreateManyQuotesMutationVariables>;

/**
 * __useCreateManyQuotesMutation__
 *
 * To run a mutation, you first call `useCreateManyQuotesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateManyQuotesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createManyQuotesMutation, { data, loading, error }] = useCreateManyQuotesMutation({
 *   variables: {
 *      records: // value for 'records'
 *   },
 * });
 */
export function useCreateManyQuotesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateManyQuotesMutation, CreateManyQuotesMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateManyQuotesMutation, CreateManyQuotesMutationVariables>(CreateManyQuotesDocument, baseOptions);
      }
export type CreateManyQuotesMutationHookResult = ReturnType<typeof useCreateManyQuotesMutation>;
export type CreateManyQuotesMutationResult = ApolloReactCommon.MutationResult<CreateManyQuotesMutation>;
export type CreateManyQuotesMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateManyQuotesMutation, CreateManyQuotesMutationVariables>;
export const GetAllCharactersDocument = gql`
    query getAllCharacters($filter: FilterFindManyCharacterInput) {
  characterMany(filter: $filter) {
    _id
    characterName
    coverPicture
  }
}
    `;

/**
 * __useGetAllCharactersQuery__
 *
 * To run a query within a React component, call `useGetAllCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCharactersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetAllCharactersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllCharactersQuery, GetAllCharactersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllCharactersQuery, GetAllCharactersQueryVariables>(GetAllCharactersDocument, baseOptions);
      }
export function useGetAllCharactersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllCharactersQuery, GetAllCharactersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllCharactersQuery, GetAllCharactersQueryVariables>(GetAllCharactersDocument, baseOptions);
        }
export type GetAllCharactersQueryHookResult = ReturnType<typeof useGetAllCharactersQuery>;
export type GetAllCharactersLazyQueryHookResult = ReturnType<typeof useGetAllCharactersLazyQuery>;
export type GetAllCharactersQueryResult = ApolloReactCommon.QueryResult<GetAllCharactersQuery, GetAllCharactersQueryVariables>;
export const GetAllQuotesDocument = gql`
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

/**
 * __useGetAllQuotesQuery__
 *
 * To run a query within a React component, call `useGetAllQuotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllQuotesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllQuotesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllQuotesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllQuotesQuery, GetAllQuotesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllQuotesQuery, GetAllQuotesQueryVariables>(GetAllQuotesDocument, baseOptions);
      }
export function useGetAllQuotesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllQuotesQuery, GetAllQuotesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllQuotesQuery, GetAllQuotesQueryVariables>(GetAllQuotesDocument, baseOptions);
        }
export type GetAllQuotesQueryHookResult = ReturnType<typeof useGetAllQuotesQuery>;
export type GetAllQuotesLazyQueryHookResult = ReturnType<typeof useGetAllQuotesLazyQuery>;
export type GetAllQuotesQueryResult = ApolloReactCommon.QueryResult<GetAllQuotesQuery, GetAllQuotesQueryVariables>;
export const QuoteManyDocument = gql`
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

/**
 * __useQuoteManyQuery__
 *
 * To run a query within a React component, call `useQuoteManyQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuoteManyQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuoteManyQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useQuoteManyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<QuoteManyQuery, QuoteManyQueryVariables>) {
        return ApolloReactHooks.useQuery<QuoteManyQuery, QuoteManyQueryVariables>(QuoteManyDocument, baseOptions);
      }
export function useQuoteManyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<QuoteManyQuery, QuoteManyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<QuoteManyQuery, QuoteManyQueryVariables>(QuoteManyDocument, baseOptions);
        }
export type QuoteManyQueryHookResult = ReturnType<typeof useQuoteManyQuery>;
export type QuoteManyLazyQueryHookResult = ReturnType<typeof useQuoteManyLazyQuery>;
export type QuoteManyQueryResult = ApolloReactCommon.QueryResult<QuoteManyQuery, QuoteManyQueryVariables>;
export const GetAllShowsDocument = gql`
    query getAllShows {
  showMany {
    name
    _id
  }
}
    `;

/**
 * __useGetAllShowsQuery__
 *
 * To run a query within a React component, call `useGetAllShowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllShowsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllShowsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllShowsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAllShowsQuery, GetAllShowsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetAllShowsQuery, GetAllShowsQueryVariables>(GetAllShowsDocument, baseOptions);
      }
export function useGetAllShowsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAllShowsQuery, GetAllShowsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetAllShowsQuery, GetAllShowsQueryVariables>(GetAllShowsDocument, baseOptions);
        }
export type GetAllShowsQueryHookResult = ReturnType<typeof useGetAllShowsQuery>;
export type GetAllShowsLazyQueryHookResult = ReturnType<typeof useGetAllShowsLazyQuery>;
export type GetAllShowsQueryResult = ApolloReactCommon.QueryResult<GetAllShowsQuery, GetAllShowsQueryVariables>;