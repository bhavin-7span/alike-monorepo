<template>
  <AwSection
    name="idli-section"
    class="py-16 md:py-28"
    _class="flex items-center justify-center flex-col"
  >
    <AwHeading2 class="text-center max-w-sm md:max-w-xl"> Idli </AwHeading2>
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
  fields: ["*.*"],
  deep: {
    // ...getDeepLocaleFilter(["metadata"]),
    // ...getDeepLocaleFilter(["cards,cards_id"]),
  },
});
</script>
