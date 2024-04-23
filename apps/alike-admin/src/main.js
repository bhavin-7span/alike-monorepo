import './assets/main.css'

import { createApp,h } from 'vue'
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";
import { setContext } from "@apollo/client/link/context";
import { createPinia } from 'pinia'

import App from './app.vue'
import router from './router'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
    },
  },
});

const app = createApp({
  setup() {
    provideApolloClient(apolloClient);
  },
  render: () => h(App),
});

app.use(createPinia())
app.use(router)

app.mount('#app')
