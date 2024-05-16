<template>
  <AwSection>
    <div>Biryani : {{ collectionName }} : {{ itemId }}</div>

    <div v-if="data">
      {{ data }}
    </div>
  </AwSection>
</template>
<script setup>
const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: ["*.*"],
});
</script>
