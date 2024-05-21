import { setContext } from "@apollo/client/link/context";
import { navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  const { clients } = useApollo();
  const { locale } = useI18n();
  const authToken = useCookie("aw-token");

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      store: `abudhabi_${locale.value.split("-")[0]}`,
      "Content-Currency": "rs",
      Partner: "kitmytrip",
      authorization: `Bearer ${authToken.value || null}`,
    },
  }));

  clients.default.setLink(authLink.concat(clients.default.link));
});
