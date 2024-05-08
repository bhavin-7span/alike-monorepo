<template>
  <div class="divide-y divide-black">
    <component
      :is="section.item.metadata.component.name"
      v-for="section in items"
      :key="`${pageId}--${section.id}`"
      :collection-name="section.collection"
      :item-id="section.id"
    />
  </div>
</template>

<script setup>
defineProps({
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
