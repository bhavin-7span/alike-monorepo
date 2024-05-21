<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <section class="flex items-center justify-center flex-col">
    <h1 class="text-2xl">Message : {{ error?.message }}</h1>
    <h2 class="textxl">Stack : {{ error?.stack }}</h2>
  </section>
</template>
