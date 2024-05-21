<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <section class="flex items-center justify-center flex-col space-y-4 m-8">
    <h1 class="text-4xl text-center">Message : {{ error?.message }}</h1>
    <div class="text-xl w-full overflow-x-scroll">
      <div v-html="error?.stack"></div>
    </div>
  </section>
</template>
