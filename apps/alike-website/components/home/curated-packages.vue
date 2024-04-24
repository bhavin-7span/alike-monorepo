<template>
  <Section name="curated-packages">
    <h2 class="text-center text-6xl font-bold">
      Bundle up with savings : cozy winter offers now LIVE!
    </h2>
    <div class="" v-for="(type, index) in selections" :key="index">
      {{ type }}
    </div>
  </Section>
</template>
<script setup>
import Section from "components/common/section.vue";
const selections = [
  {
    id: 1,
    label: "Traveller",
    image: "",
  },
  {
    id: 2,
    label: "Creator",
    image: "",
  },
];
</script>
