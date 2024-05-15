<template>
  <ul
    v-if="list"
    class="text-base grid list-disc list-inside grid-cols-2 gap-1 text-grey-500"
  >
    <li v-for="(item, index) in list" :key="index">{{ item }}</li>
  </ul>
</template>
<script setup>
const props = defineProps({
  list: Array,
});
</script>
