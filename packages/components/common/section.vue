<template>
  <section
    class="container py-16 md:py-28 mx-auto"
    :class="`section-${name}`"
    :id="`section-${name}`"
  >
    <slot />
  </section>
</template>
<script setup>
const props = defineProps({
  name: String,
});
</script>
