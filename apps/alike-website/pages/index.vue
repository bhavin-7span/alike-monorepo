<template>
  <div class="index-page">
    <Header />
    <HomeCover />
    <HomeCuratedPackages />
    <!-- <ProductDemo /> -->
  </div>
</template>
<script setup>
import Header from "components/header.vue";
definePageMeta({
  layout: "default",
});
</script>
