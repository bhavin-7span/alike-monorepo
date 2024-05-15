<template>
  <h3 class="text-2xl font-semibold line-clamp-2">
    {{ title }}
  </h3>
</template>
<script setup>
const props = defineProps({
  title: String,
});
</script>
