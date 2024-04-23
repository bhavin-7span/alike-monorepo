<template>
  <div>
    <h1 class="text-5xl">Alike Website 2</h1>
    <pre>{{ productsData }}</pre>
  </div>
</template>
<script setup>
import products from "../../packages/graph/products.gql";
const productsData = ref(null);
const { data, errors } = await useAsyncQuery({
  query: products,
  variables: {
    filter: { sku: { eq: "OneAbuDhabi" } },
  },
  context: {
    headers: {
      store: `abudhabi_en`,
      "Content-Currency": "USD",
    },
    fetchOptions: { method: "GET" },
  },
});

if (errors) {
  console.error("Error fetching data:", errors);
}

if (data.value && data.value.products.items.length) {
  productsData.value = data.value.products.items[0];
}
</script>