<template>
  <section :class="`section-${name}`" :id="`section-${name}`">
    <div class="container mx-auto" :class="_class">
      <slot />
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  name: String,
  _class: String,
});
</script>
