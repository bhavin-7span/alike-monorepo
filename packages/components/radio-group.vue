<template>
  <client-only>
    <button
      v-for="(option, index) in options"
      :key="index"
      @click="updateValue(option)"
      :disabled="disabled"
    >
      <input type="radio" class="hidden" :name="name" :value="option" />
      <slot
        name="default"
        :data="option"
        :index="index"
        :isActive="option[valueIs] == modelValue"
        :value="modelValue"
      >
        <div class="flex gap-1 items-center justify-center">
          <Icon
            v-if="option[valueIs] == modelValue"
            name="AwIconRadioChecked"
            class="text-lg"
            :class="colorClass"
          />
          <Icon v-else name="AwIconRadioBlank" class="text-grey-500 text-lg" />
          <p>{{ option[labelIs] }}</p>
        </div>
      </slot>
    </button>
  </client-only>
</template>
<script setup>
import Icon from "./icon.vue";
import { computed } from "vue";
const emit = defineEmits(["change", "update:modelValue"]);
const props = defineProps({
  name: {
    type: String,
    default: "radio-group",
  },
  valueIs: {
    type: String,
    default: "value",
  },
  labelIs: {
    type: String,
    default: "label",
  },
  options: {
    type: Array,
    default: () => [],
  },
  changeOnClick: {
    type: Boolean,
    default: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "primary",
  },
  modelValue: [String, Number, Boolean, Object],
});

const colorClass = computed(() => {
  if (props.disabled) {
    return "text-grey-500";
  } else {
    switch (props.color) {
      case "primary":
        return "text-primary-500";
      case "secondary":
        return "text-secondary-500";
      default:
        return "text-black";
    }
  }
});

function updateValue(option) {
  if (props.changeOnClick) {
    emit("update:modelValue", option[props.valueIs]);
    emit("change", option);
  }
}
</script>
