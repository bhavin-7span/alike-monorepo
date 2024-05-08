<template>
  <h1 class="text-red-500 text-5xl font-bold">Offers Sections</h1>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const data = await useSectionData(props, {
  fields: ["*.*"],
});
console.log("Props", props);
console.log("Data", data);
</script>
