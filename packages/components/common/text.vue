<template>
  <component :is="as" :class="textClasses">{{ data }}</component>
</template>
<script setup>
import { text } from "../cva-css/text.js";
import { twMerge } from "tailwind-merge";
import { computed } from "vue";

const props = defineProps({
  data: [String, Number],
  as: {
    type: String,
    default: "p",
    validator: (propsValue) => {
      if (
        !["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"].includes(propsValue)
      ) {
        throw new Error(
          "error in text component | prop type as is not valid, value must be any one from 'h1, h2, h3, h4, h5, h6, p, span'"
        );
      }
      return true;
    },
  },
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
