<template>
  <component :is="name" />
</template>
<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
