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
}
