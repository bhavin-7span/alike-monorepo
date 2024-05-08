<template>
  <h1 class="text-blue-500 text-5xl font-bold">Hero Sections</h1>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});
console.log("Props", props);
</script>
