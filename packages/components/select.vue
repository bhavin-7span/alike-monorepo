<template>
  <Popover popover-class="top-16 popover-shadow py-4 rounded-xs">
    <template #default>
      <RadioGroup
        :modelValue="modelValue"
        :value-is="valueIs"
        :label-is="labelIs"
        @change="emitSelectValue($event)"
        name="select"
        class="flex flex-col"
        :options="options"
      >
        <template #default="{ data, isActive }">
          <p
            class="py-2 text-base px-4"
            :class="isActive ? 'bg-primary-50 text-primary-500' : ''"
          >
            {{ data.label }}
          </p>
        </template>
      </RadioGroup>
    </template>
  </Popover>
</template>

<script setup>
import { ref } from "vue";
import Popover from "./popover.vue";
import RadioGroup from "./radio-group.vue";

const emit = defineEmits(["change", "update:modelValue"]);

const selectedItem = ref();
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  valueIs: {
    type: String,
    default: "value",
  },
  labelIs: {
    type: String,
    default: "label",
  },
  modelValue: [String, Number, Boolean, Object],
});

function emitSelectValue(option) {
  emit("update:modelValue", option[props.valueIs]);
  emit("change", option);
}
</script>
