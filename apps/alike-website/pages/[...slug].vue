<template>
  <div class="slug-page">
    <Sections :items="sections" :page-id="id" />
  </div>
</template>

<script setup>
const { sections, id } = await usePage();
</script>
