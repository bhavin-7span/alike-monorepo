<template>
  <div
    class="font-rethink-sans"
    :dir="currentLocale?.dir || 'ltr'"
    :class="currentLocale?.dir ? `aw-${currentLocale?.dir}` : 'aw-ltr'"
  >
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
const { locale, locales } = useI18n();

const currentLocale = computed(() => {
  return locales.find((lang) => lang?.code == locale.value);
});
</script>
