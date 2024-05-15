<template>
  <div v-if="items && pageId" class="sections-here">
    <template v-for="section in items" :key="`${pageId}--${section.itemId}`">
      <component
        :is="section.component"
        :collection-name="section.collectionName"
        :item-id="section.itemId"
      />
    </template>
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
