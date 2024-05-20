<template>
  <div class="slug-page">
    {{ allLang }}
    <Sections :items="sections" :page-id="id" />
  </div>
</template>

<script setup>
import { useLanguageStore } from "@/store/language.js";
const { sections, id } = await usePage();
const languageStore = useLanguageStore();

const allLang = languageStore.getAllLanguage;
</script>
