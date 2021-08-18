import { Resolvers } from 'generated/types'
import { MovieRepository } from './repositories/movie.repo'

const movieRepo = new MovieRepository()

export const resolvers: Resolvers = {
  Query: {
    movies: (_parent, _args, _ctx) => {
      return movieRepo.findMany()
    },
    movie: (_parent, { id }, _ctx) => {
      return movieRepo.findById(id)
    },
  },
}
