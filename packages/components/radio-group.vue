<template>
  <client-only>
    <button
      v-for="(option, index) in options"
      :key="index"
      type="button"
      @click="updateValue(option)"
      :disabled="disabled"
      class="text-start outline-none border-none"
    >
      <Field
        v-slot="{ field }"
        :rules="rules"
        :name="name"
        :value="modelValue"
        type="radio"
      >
        <input
          type="radio"
          v-bind="field"
          class="hidden"
          :name="name"
          :value="option.value"
        />
        <slot
          name="default"
          :data="option"
          :index="index"
          :isActive="option.value == modelValue"
          :value="modelValue"
        >
          <div class="flex items-center gap-1">
            <Icon
              v-if="option.value == modelValue"
              name="AwIconRadioChecked"
              class="text-lg"
              :class="colorClass"
            />
            <Icon
              v-else
              name="AwIconRadioBlank"
              class="text-grey-500 text-lg"
            />
            <p>{{ option.label }}</p>
          </div>
        </slot>
      </Field>
    </button>
    <p v-if="error" class="text-sm mt-1 text-danger-500">{{ error }}</p>
  </client-only>
</template>
<script setup>
import Icon from "./icon.vue";
import { computed } from "vue";
import { Field } from "vee-validate";

const emit = defineEmits(["change", "update:modelValue"]);
const props = defineProps({
  name: {
    type: String,
    default: "radio-group",
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
  rules: String,
  error: String,
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
    emit("update:modelValue", option.value);
    emit("change", option);
  }
}
</script>
