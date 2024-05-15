<template>
  <img v-if="img" :src="img" />
</template>
<script setup>
const props = defineProps({
  img: String,
});
</script>
