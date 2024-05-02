<template>
  <button
    :class="{ [buttonClasses]: true, 'flex-row-reverse	': iconAfter }"
    class="flex items-center justify-center gap-2"
  >
    <component
      v-if="icon || isLoading"
      :is="isLoading ? 'AwIconLoading' : icon"
      :class="size == 'sm' ? 'text-base' : 'text-lg'"
    />
    <slot name="default">{{ label }}</slot>
  </button>
</template>
<script setup>
import { computed, defineProps } from "vue";
import { button } from "./button.js";

import { twMerge } from "tailwind-merge";
//*** Why tailwind-merge ?
// read link : https://cva.style/docs/getting-started/installation#tailwind-css
// some time CVA can not merge the conflict of tailwind classes ex text-xl to text-2xl it is adding both class. So we used this twMerge package to overcome the issue of merging.
//***

const props = defineProps({
  label: String,
  type: String,
  size: String,
  theme: String,
  icon: String,
  isLoading: {
    type: Boolean,
    default: false,
  },
  iconAfter: {
    type: Boolean,
    default: false,
  },
});

const buttonClasses = computed(() => {
  return twMerge(
    button({
      type: props.type,
      size: props.size,
      theme: props.theme,
    })
  );
});
</script>
