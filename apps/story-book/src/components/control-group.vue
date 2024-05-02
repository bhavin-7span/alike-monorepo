<template>
  <div class="p-4">
    <h4 class="text-lg mt-2 font-bold">Props</h4>
    <div class="mt-4">
      <slot name="props" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>
