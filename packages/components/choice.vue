<template>
  <button
    @click="updateValue()"
    :disabled="disabled"
    :class="disabled && 'opacity-50'"
    class="text-start outline-none border-none"
  >
    <input type="radio" class="hidden" :name="name" :value="modelValue" />
    <slot name="default" :isActive="modelValue" :value="modelValue">
      <div class="flex items-center gap-1">
        <Icon
          v-if="modelValue"
          :name="iconName.active"
          class="text-lg text-primary-500"
        />
        <Icon v-else :name="iconName.inactive" class="text-grey-500 text-lg" />
        <p>{{ label }}</p>
      </div>
    </slot>
  </button>
</template>
<script setup>
import Icon from "./icon.vue";
import { computed } from "vue";
const emit = defineEmits(["change", "update:modelValue"]);
const props = defineProps({
  name: {
    type: String,
    default: "choice",
  },
  label: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "checkbox",
  },
  modelValue: [Boolean],
});

const iconName = computed(() => {
  return {
    active:
      props.type == "radio" ? "AwIconRadioChecked" : "AwIconCheckboxOrange",
    inactive:
      props.type == "radio" ? "AwIconRadioBlank" : "AwIconCheckboxBlank",
  };
});

function updateValue() {
  emit("update:modelValue", !props.modelValue);
  emit("change", !props.modelValue);
}
</script>
