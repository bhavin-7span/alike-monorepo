<template>
  <Section name="hero">
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
