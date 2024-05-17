<template>
  <div :class="textClasses" v-html="data" />
</template>
<script setup>
import { text } from "../cva-css/text.js";
import { twMerge } from "tailwind-merge";
import { computed } from "vue";

const props = defineProps({
  as: {
    type: String,
    default: "h1",
    validator: (propsValue) => {
      if (!["h1", "h2", "h3", "h4", "h5", "h6"].includes(propsValue)) {
        throw new Error(
          "error in text component | prop type as is not valid, value must be any one from 'h1, h2, h3, h4, h5, h6'"
        );
      }
      return true;
    },
  },
  data: [String, Number],
  size: {
    type: String,
    default: "md",
  },
  weight: {
    type: String,
    default: "regular",
  },
});

const textClasses = computed(() => {
  return twMerge(
    text({
      size: props.size,
      weight: props.weight,
    })
  );
});
</script>
