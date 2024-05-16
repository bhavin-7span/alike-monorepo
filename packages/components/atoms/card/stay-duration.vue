<template>
  <div v-if="data" class="text-white rounded-full px-3 py-1.5 bg-black">
    {{ data }}
  </div>
</template>
<script setup>
const props = defineProps({
  data: String,
});
</script>
