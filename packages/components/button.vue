<template>
  <component
    :is="tagIs"
    :href="href"
    :to="to"
    :class="{
      [buttonClasses]: true,
      'flex-row-reverse': iconAfter,
      'pointer-events-none opacity-70': disabled || isLoading,
    }"
  >
    <!-- icon slot -->
    <!-- you can render anything at the place of icon -->
    <slot name="icon">
      <!-- if loading is true then loader will show -->
      <component
        v-if="icon"
        :is="isLoading ? loaderIcon : icon"
        :class="iconClass"
      />
    </slot>

    <!-- slot loading-icon  -->
    <!-- Loader when there is no icon you can render you own icon -->
    <slot name="loading-icon">
      <component
        :is="loaderIcon"
        v-if="!icon && isLoading"
        :class="iconClass"
      />
    </slot>

    <!-- defaul slot  -->
    <!-- label will be render in this slot bu default -->
    <slot v-if="shape != 'circle'" name="default">{{ label }}</slot>
    <p v-if="shape != 'circle' && count" :class="counterClass">{{ count }}</p>
  </component>
</template>
<script setup>
import { computed, defineProps } from "vue";
import { button, counter } from "./cva-css/button.js";

import { twMerge } from "tailwind-merge";
//*** Why tailwind-merge ?
// read link : https://cva.style/docs/getting-started/installation#tailwind-css
// some time CVA can not merge the conflict of tailwind classes ex text-xl to text-2xl it is adding both class. So we used this twMerge package to overcome the issue of merging.
//***

const props = defineProps({
  label: String,
  color: String,
  size: String,
  theme: String,
  icon: String,
  shape: String,
  tag: {
    type: String,
    default: "button",
  },
  to: [String, Object],
  href: String,
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
  loaderIcon: {
    type: String,
    default: "AwIconLoading",
  },
  count: [String, Number],
});

// Using CVA from button.js to generate the class of button variation.
const buttonClasses = computed(() => {
  return twMerge(
    button({
      color: props.color,
      size: props.size,
      theme: props.theme,
      shape: props.shape,
    })
  );
});

const counterClass = computed(() => {
  return twMerge(
    counter({
      color: props.color,
      size: props.size,
      theme: props.theme,
      shape: props.shape,
    })
  );
});

// To apply the font-size on icon basis on size props.
const iconClass = computed(() => {
  if (props.size == "sm") {
    return "text-lg";
  } else if (props.size == "md") {
    return "text-xl";
  }
});

// Dynamic tag rendering based on redirection attributes.
const tagIs = computed(() => {
  if (props.href) {
    return "a";
  } else if (props.to) {
    return "router-link";
  } else if (props.tag) {
    return props.tag;
  } else {
    return "button";
  }
});
</script>
