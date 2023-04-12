export type Maybe<T> = T | undefined;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends Record<string, unknown>> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]?: Maybe<T[SubKey]>};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]: Maybe<T[SubKey]>};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  LocalDateTime: any;
};

export type Location = {
  __typename?: 'Location';
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type LocationInput = {
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addNewPet?: Maybe<Pet>;
  addRating?: Maybe<Scalars['Boolean']>;
  deletePet?: Maybe<Scalars['Boolean']>;
  grantRole?: Maybe<Scalars['Boolean']>;
  registerUser?: Maybe<Scalars['Boolean']>;
  updateExistingPet?: Maybe<Pet>;
};


export type MutationAddNewPetArgs = {
  pet?: InputMaybe<PetInput>;
};


export type MutationAddRatingArgs = {
  ratingRecord?: InputMaybe<RatingInput>;
};


export type MutationDeletePetArgs = {
  petId?: InputMaybe<Scalars['String']>;
};


export type MutationGrantRoleArgs = {
  role: RoleInput;
  userName: Scalars['String'];
};


export type MutationRegisterUserArgs = {
  user?: InputMaybe<UserInput>;
};


export type MutationUpdateExistingPetArgs = {
  pet?: InputMaybe<PetInput>;
};

export type Pet = {
  __typename?: 'Pet';
  about?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  medicalRecord?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  petImage?: Maybe<Scalars['String']>;
  rescueDate?: Maybe<Scalars['LocalDateTime']>;
  rescueLocation?: Maybe<Location>;
  socialSkills?: Maybe<Scalars['String']>;
  tailDetails?: Maybe<Scalars['String']>;
  training?: Maybe<Scalars['String']>;
};

export type PetInput = {
  about?: InputMaybe<Scalars['String']>;
  details?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  medicalRecord?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  petImage?: InputMaybe<Scalars['String']>;
  rescueDate?: InputMaybe<Scalars['LocalDateTime']>;
  rescueLocation?: InputMaybe<LocationInput>;
  socialSkills?: InputMaybe<Scalars['String']>;
  tailDetails?: InputMaybe<Scalars['String']>;
  training?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllPets: Array<Maybe<Pet>>;
  getAverageRate?: Maybe<Scalars['Int']>;
  getPetById?: Maybe<Pet>;
  getRatingsListForPet?: Maybe<Array<Maybe<Rating>>>;
};


export type QueryGetAverageRateArgs = {
  petId?: InputMaybe<Scalars['String']>;
};


export type QueryGetPetByIdArgs = {
  petId?: InputMaybe<Scalars['String']>;
};


export type QueryGetRatingsListForPetArgs = {
  petId?: InputMaybe<Scalars['String']>;
};

export type Rating = {
  __typename?: 'Rating';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  petId?: Maybe<Scalars['String']>;
  stars?: Maybe<Scalars['Int']>;
};

export type RatingInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  petId?: InputMaybe<Scalars['String']>;
  stars?: InputMaybe<Scalars['Int']>;
};

export type RoleInput = {
  roleName: Scalars['String'];
};

export type UserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};
