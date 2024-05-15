<template>
  <div class="text-red-500">Fafda Component</div>
  <div class="flex gap-2">
    <div v-for="(type, index) in data.cards" :key="index">
      <pre>{{ type.cards_id.media[0].directus_files_id.id }}</pre>
      <nuxt-img :src="type.cards_id.media[0].directus_files_id.id" />
    </div>
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
    "cards.cards_id.media.*.*.*",
  ],
});
</script>
