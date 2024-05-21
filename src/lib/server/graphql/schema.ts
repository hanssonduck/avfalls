import { builder } from './builder'

builder.queryType({
  fields: (t) => ({
    ping: t.string({
      resolve: () => `...pong; ${new Date().toISOString()}`,
    }),
  }),
})

export const schema = builder.toSchema()
