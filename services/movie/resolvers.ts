import { Resolvers } from 'generated/types'

export const resolvers: Resolvers = {
  Query: {
    movies: (_parent, _args, _ctx) => {
      return []
    },
    movie: (_parent, { id }, _ctx) => {
      return null
    },
  },
}
