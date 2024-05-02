<template>
  <button :class="buttonClasses">
    {{ label }}
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
