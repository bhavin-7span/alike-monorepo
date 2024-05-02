<template>
  <div class="p-4">
    <h4 class="text-lg font-bold">Style</h4>
    <div class="mt-4">
      <slot name="style" />
    </div>

    <h4 class="text-lg mt-6 font-bold">State</h4>
    <div class="mt-4">
      <slot name="state" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>
