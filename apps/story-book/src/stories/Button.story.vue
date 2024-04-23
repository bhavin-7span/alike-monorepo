<template>
  <Story>
    <Header />
    <Button label="Button Label" variant="info" />
    <h1 class="text-2xl text-primary-500">Hello Story Book</h1>
    <!-- <template #controls> Story Controls Here </template> -->
  </Story>
</template>
<script setup>
import Button from "components/button.vue";
import Header from "components/header.vue";
</script>
<style scoped></style>
<docs lang="md">
## Button Props

- label
- varient like : default, info, danger, warning
</docs>
