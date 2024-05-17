<template>
  <h2 v-html="data" class="text-4xl md:text-7xl font-bold" />
</template>
<script setup>
const props = defineProps({
  data: String,
});
</script>
