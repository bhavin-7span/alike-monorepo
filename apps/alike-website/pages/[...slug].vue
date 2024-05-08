<template>
  <NuxtLayout>
    <Sections :items="data[0].sections" :page-id="data[0].id" />
  </NuxtLayout>
</template>

<script setup>
const { getItems } = useDirectusItems();
const { data } = await useAsyncData("pages", () => {
  return getItems({
    collection: "pages",
    params: {
      fields: ["*.*.*.*.*"],
    },
  });
});

// const { sections, id } = await usePage();
</script>
