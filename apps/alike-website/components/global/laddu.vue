<template>
  <div class="text-red-500">Laddu component</div>
  <div v-html="data.metadata.translations[0].title" />
  <div v-for="(card, index) in data.cards" :key="index" class="flex gap-2">
    <div v-html="card.cards_id.translations[0].title" />
    <div v-html="card.cards_id.translations[0].description" />
  </div>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: [
    "metadata.translations.*",
    "cards.cards_id.translations.*",
    "cards.cards_id.media.*",
  ],
});
</script>
