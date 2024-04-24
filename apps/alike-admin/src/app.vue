<template>
  <div>
    <h1>Alike Admin 3</h1>
    <pre>{{ data }}</pre>
  </div>
</template>
<script>
import { gqlQuery } from "@/composables/gqlQuery.js";
import products from "@graph/products.gql";
export default {
  data() {
    return {
      data: null,
    };
  },
  components: {
    Header,
  },
  created() {
    this.getOrderDetail();
  },
  methods: {
    async getOrderDetail() {
      const res = await gqlQuery(products, {
        search: "",
        filter: { sku: { eq: "OneAbuDhabi" } },
      });
      this.data = res.data.products.items;
    },
  },
};
</script>
