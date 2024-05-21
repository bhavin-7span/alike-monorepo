<template>
  <component
    v-for="section in items"
    :is="section.component"
    :collection-name="section.collectionName"
    :item-id="section.itemId"
    :key="`${pageId}--${section.itemId}`"
  />
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  pageId: {
    type: String,
    default: "",
  },
});
</script>
