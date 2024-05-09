<template>
  <label v-if="label" :for="id">{{ label }}</label>
  <div :class="inputCss">
    <div class="h-full flex items-center gap-3" :class="direction">
      <Icon v-if="icon || true" :name="'AwIconCurrencyInr'" class="text-lg" />
      <input
        :type="type"
        :placeholder="placeholder"
        :id="id"
        :name="name"
        class="focus:outline-none h-full w-full bg-transparent"
      />
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";
import { formInput } from "./cva-css/form-input.js";
import { twMerge } from "tailwind-merge";
import Icon from "./icon.vue";

const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  label: String,
  placeholder: String,
  id: [String, Number],
  name: [String, Number],
  icon: String,
  direction: String,
  size: String,
  color: String,
  theme: String,
  shape: String,
});

const inputCss = computed(() => {
  return twMerge(
    formInput({
      color: props.color,
      size: props.size,
      theme: props.theme,
      shape: props.shape,
    })
  );
});
</script>
