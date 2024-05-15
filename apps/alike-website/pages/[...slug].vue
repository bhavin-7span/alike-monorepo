<template>
  <NuxtLayout>
    <Sections :items="sections" :page-id="id" />
  </NuxtLayout>
</template>

<script setup>
const { sections, id } = await usePage();
</script>
