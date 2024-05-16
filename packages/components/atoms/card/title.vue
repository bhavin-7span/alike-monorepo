<template>
  <h3 class="text-2xl font-semibold line-clamp-2">
    {{ data }}
  </h3>
</template>
<script setup>
const props = defineProps({
  data: String,
});
</script>
