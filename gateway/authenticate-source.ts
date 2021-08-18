import { RemoteGraphQLDataSource } from '@apollo/gateway'

export class AuthenticationSource extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }: any) {
    if (context.authorization) {
      request.http.headers.set('authorization', context.authorization)
    }
  }
}
