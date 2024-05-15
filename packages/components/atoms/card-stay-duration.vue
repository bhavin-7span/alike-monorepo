<template>
  <div v-if="duration" class="text-white rounded-full px-3 py-1.5 bg-black">
    {{ duration }}
  </div>
</template>
<script setup>
const props = defineProps({
  duration: String,
});
</script>
