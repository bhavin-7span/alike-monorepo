<template>
  <p class="text-grey-500 font-medium text-base">{{ data }}</p>
</template>
<script setup>
const props = defineProps({
  data: String,
});
</script>
