<template>
  <div
    v-if="data"
    class="text-white rounded-full px-3 h-8 text-sm flex items-center bg-black"
  >
    {{ data }}
  </div>
</template>
<script setup>
const props = defineProps({
  data: String,
});
</script>
