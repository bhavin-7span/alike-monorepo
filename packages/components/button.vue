<template>
  <button class="p-1 border bg-grey-100 text-grey-900 rounded">
    {{ label }}
  </button>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "Button",
  },
  variant: {
    type: String,
    default: "default",
  },
});

const buttonClass = computed(() => {
  if (props.variant == "default") {
    return "p-1 border bg-grey-100 text-grey-900 rounded";
  } else if (props.variant == "info") {
    return "p-1 border bg-info-100 text-info-900";
  } else if (props.variant == "danger") {
    return "p-1 border bg-danger-100 text-danger-900";
  } else if (props.variant == "warning") {
    return "p-1 border bg-warning-100 text-warning-900";
  }
});
</script>
