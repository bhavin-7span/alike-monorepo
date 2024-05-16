<template>
  <AwSection
    name="barfi-section"
    class="py-16 md:py-28"
    _class="flex items-center justify-center flex-col"
  >
    <AwHeading2 class="text-center max-w-sm md:max-w-xl"> Barfi </AwHeading2>
    <div class="mt-6 md:mt-14 text-center">
      {{ detail }}
    </div>
  </AwSection>
</template>
<script setup>
const props = defineProps({
  ...defaultProps(),
});

const detail = await useSectionData(props, {
  fields: ["metadata.translations.title", "cards.cards_id.translations.*"],
  deep: {
    ...getDeepLocaleFilter(["metadata"]),
    ...getDeepLocaleFilter(["cards,cards_id"]),
  },
});
</script>
