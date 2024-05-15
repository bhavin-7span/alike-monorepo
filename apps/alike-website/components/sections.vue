<template>
  <div v-if="items && pageId" class="sections-here">
    <component
      :is="section.component"
      v-for="section in items"
      :key="`${pageId}--${section.itemId}`"
      :collection-name="section.collectionName"
      :item-id="section.itemId"
    />
  </div>
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
