<template>
  <div class="bg-white rounded-md overflow-hidden">
    <CardCarousel />
    <div class="px-8 pb-8 pt-6">
      <CardSubtitle subtitle="Abu Dhabi, Dubai " />
      <CardTitle
        class="mt-1"
        title="A Romantic Escapade Through Dubai and Abu"
      />
      <CardList
        class="mt-4"
        :list="['2 Activities', '1 Hotel', '5 Attractions', '1 SIM']"
      />
    </div>
  </div>
</template>
<script setup>
import CardCarousel from "../atoms/card-carousel.vue";
import CardSubtitle from "../atoms/card-subtitle.vue";
import CardTitle from "../atoms/card-title.vue";
import CardList from "../atoms/card-list.vue";
</script>
