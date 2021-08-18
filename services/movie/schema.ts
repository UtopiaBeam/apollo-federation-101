import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Movie @key(fields: "id") {
    id: ID!
    title: String!
    description: String
  }

  input CreateMovieInput {
    title: String!
    description: String
  }

  input UpdateMovieInput {
    title: String
    description: String
  }

  type Query {
    movies: [Movie!]!
    movie(id: ID!): Movie
  }

  type Mutation {
    createMovie(input: CreateMovieInput!): Movie!
    updateMovie(id: ID!, input: UpdateMovieInput!): Movie
  }
`
