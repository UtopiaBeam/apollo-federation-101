import { buildSubgraphSchema } from '@apollo/federation'
import { typeDefs } from './schema'
import { resolvers } from './resolvers'
import { ApolloServer } from 'apollo-server'
import { createContext } from '../../lib/context'

export async function createMovieService(): Promise<void> {
  const schema = buildSubgraphSchema({ typeDefs, resolvers })
  const server = new ApolloServer({
    schema,
    context: ({ req }) => createContext(req),
  })

  const { url } = await server.listen(4001)

  console.log(`Movie service running at ${url}`)
}
