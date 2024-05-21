/** @type {import('houdini').ConfigFile} */
export default {
  watchSchema: {
    url: 'http://localhost:5173/api/graphql',
  },
  plugins: {
    'houdini-svelte': {
      client: './src/lib/graphql.ts',
    },
  },
}
