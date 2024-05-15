<template>
  <p class="text-grey-500 font-medium text-base">{{ subtitle }}</p>
</template>
<script setup>
const props = defineProps({
  subtitle: String,
});
</script>
