import { Resolvers } from '../../generated/types'
import { Context } from '../../lib/context'

export const resolvers: Resolvers<Context> = {
  Query: {
    reviews: async (_parent, _args, ctx) => {
      return ctx.prisma.review.findMany()
    },
  },
  Mutation: {
    createReview: async (_parent, { input }, ctx) => {
      return ctx.prisma.review.create({ data: input })
    },
  },
  Movie: {
    avgRating: async (parent, _args, ctx) => {
      const result = await ctx.prisma.review.aggregate({
        where: { movieId: parent.id },
        _avg: { rating: true },
      })

      return result._avg.rating ?? 0
    },
    reviews: async (parent, _args, ctx) => {
      return ctx.prisma.review.findMany({ where: { movieId: parent.id } })
    },
  },
}
