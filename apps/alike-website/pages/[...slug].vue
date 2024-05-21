<template>
  <Sections :items="sections" :page-id="id" v-if="sections && id" />
</template>

<script setup>
const { sections, id } = await usePage();
</script>
