<template>
  <div
    v-html="data"
    class="text-4xl text-center max-w-sm md:max-w-3xl md:text-7xl font-bold"
  />
</template>
<script setup>
const props = defineProps({
  data: String,
});
</script>
