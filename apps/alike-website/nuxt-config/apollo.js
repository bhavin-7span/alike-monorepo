import env from '../env'
export default {
  clients: {
    default: {
      httpEndpoint: env.GRAPHQL || 'https://api.alike.host/graphql',
      httpLinkOptions: {
        credentials: 'include',
      },
      inMemoryCacheOptions: {
        evict: true,
      },
    },
  },
  errorHandler: '@/plugins/apollo-error.js',
  includeNodeModules: true,
  proxyCookies: true,
}