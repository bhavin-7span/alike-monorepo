<template>
  <component
    :is="tag"
    :class="{
      [buttonClasses]: true,
      'flex-row-reverse': iconAfter,
      'pointer-events-none opacity-70': disabled || isLoading,
    }"
  >
    <slot name="icon">
      <component
        v-if="icon || isLoading"
        :is="isLoading ? 'AwIconLoading' : icon"
        :class="size == 'sm' ? 'text-lg' : 'text-xl'"
      />
    </slot>
    <slot v-if="shape != 'circle'" name="default">{{ label }}</slot>
  </component>
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
  shape: String,
  tag: {
    type: String,
    default: "button",
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  iconAfter: {
    type: Boolean,
    default: false,
  },
  disabled: {
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
      shape: props.shape,
    })
  );
});
</script>
