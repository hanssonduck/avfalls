import { HoudiniClient } from '$houdini'

export default new HoudiniClient({
  url: '/api/graphql',
})

export type HoudiniProps<T> = { data: T }
