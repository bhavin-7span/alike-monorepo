<template>
  <AwSection>
    <div>Laddu : {{ collectionName }} : {{ itemId }}</div>

    <div v-if="response">
      {{ response }}
    </div>
  </AwSection>
</template>
<script setup>
const props = defineProps({
  ...defaultProps(),
});

const response = useSectionData(props, {});
</script>
