import { ApolloGateway } from '@apollo/gateway'
import { ApolloServer } from 'apollo-server'
import { readFileSync } from 'fs'
import { resolve } from 'path'

export async function createGateway(): Promise<void> {
  const supergraphSdl = readFileSync(
    resolve(__dirname, '../supergraph.graphql')
  ).toString()

  const gateway = new ApolloGateway({ supergraphSdl })
  const server = new ApolloServer({ gateway })

  const { url } = await server.listen(4000)

  console.log(`🚀 Gateway ready at ${url}`)
}

createGateway()
