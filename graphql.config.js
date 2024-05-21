/** @type {import('graphql-config').IGraphQLConfig} */
export default {
  projects: {
    default: {
      schema: ['./schema.graphql', './$houdini/graphql/schema.graphql'],
      documents: [
        '**/*.gql',
        '**/*.svelte',
        './$houdini/graphql/documents.gql',
      ],
    },
  },
}
