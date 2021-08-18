import { gql } from 'apollo-server'

export const typeDefs = gql`
  type Review {
    id: ID!
    rating: Int!
    comment: String
  }

  extend type Movie @key(fields: "id") {
    id: ID! @external
    reviews: [Review!]!
    avgRating: Float!
  }

  input CreateReviewInput {
    movieId: ID!
    rating: Int!
    comment: String
  }

  type Query {
    reviews: [Review!]!
  }

  type Mutation {
    createReview(input: CreateReviewInput!): Review!
  }
`
