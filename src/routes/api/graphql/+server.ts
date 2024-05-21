import { schema } from '$lib/server/graphql/schema'
import { createYoga } from 'graphql-yoga'
import type { RequestHandler } from './$types'

const handler = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response },
}) satisfies RequestHandler

export { handler as GET, handler as OPTIONS, handler as POST }
