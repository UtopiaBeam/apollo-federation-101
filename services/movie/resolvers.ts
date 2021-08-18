import { Movie, Resolvers } from '../../generated/types'
import { Context } from '../../lib/context'

export const resolvers: Resolvers<Context> = {
  Query: {
    movies: async (_parent, _args, ctx) => {
      return ctx.prisma.movie.findMany() as unknown as Promise<Movie[]>
    },
    movie: (_parent, { id }, ctx) => {
      return ctx.prisma.movie.findUnique({
        where: { id },
      }) as Promise<Movie | null>
    },
  },
  Mutation: {
    createMovie: async (_parent, { input }, ctx) => {
      return ctx.prisma.movie.create({
        data: input,
      }) as unknown as Promise<Movie>
    },
  },
}
