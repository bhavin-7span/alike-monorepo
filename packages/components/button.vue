<template>
  <button :class="buttonClasses">
    <AwIconLoading />
    <slot name="default">{{ label }}</slot>
  </button>
</template>
<script setup>
import { computed, defineProps } from "vue";
import { button } from "./button.js";

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
  console.log(props);
  return button({
    type: props.type,
    size: props.size,
    theme: props.theme,
  });
});
</script>
