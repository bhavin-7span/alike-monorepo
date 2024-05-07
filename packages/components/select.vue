<template>
  <Popover
    :placeholder="placeholder"
    :selected-value="selectedValue?.label"
    :class="disabled ? 'pointer-events-none opacity-50' : ''"
    :count="count"
    :popover-icon="popoverIcon"
    :show-dropdown-icon="showDropdownIcon"
    popover-class="top-16 popover-shadow py-4 rounded-xs"
  >
    <template #default="{ close }">
      <RadioGroup
        :modelValue="modelValue"
        @change="emitSelectValue($event, close)"
        :name="name"
        class="flex flex-col"
        :options="options"
      >
        <template #default="{ data, isActive }">
          <div
            :class="{
              'bg-primary-50 text-primary-500': isActive,
              'flex-row-reverse': iconAfter,
            }"
            class="min-w-44 items-center py-3 gap-2 px-4 flex"
          >
            <div
              v-if="showOptionIcon || selectedIcon"
              class="h-5 flex items-center w-5"
            >
              <Icon
                v-if="data.icon && showOptionIcon"
                :name="data.icon"
                class="text-lg"
              />
              <Icon
                v-else-if="selectedIcon && isActive"
                :name="selectedIcon"
                class="text-lg"
              />
              <Icon v-else-if="icon" :name="icon" class="text-lg" />
            </div>
            <p class="text-base">
              {{ data.label }}
            </p>
          </div>
        </template>
      </RadioGroup>
    </template>
  </Popover>
</template>

<script setup>
import { ref, computed } from "vue";
import Popover from "./popover.vue";
import RadioGroup from "./radio-group.vue";

const emit = defineEmits(["change", "update:modelValue"]);

const props = defineProps({
  name: {
    type: String,
    default: "select",
  },
  options: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: "Select",
  },
  iconAfter: {
    type: Boolean,
    default: false,
  },
  showOptionIcon: {
    type: Boolean,
    default: false,
  },
  selectedIcon: [String, Boolean],
  icon: String,
  count: [String, Number],
  modelValue: [String, Number, Boolean, Object],
  disabled: {
    type: Boolean,
    default: false,
  },
  dynamicPlaceholderIcon: {
    type: Boolean,
    default: false,
  },
  placeholderIcon: {
    type: [String, Boolean],
    default: "AwIconFilter",
  },
  showDropdownIcon: {
    type: Boolean,
    default: true,
  },
});

const selectedValue = ref(null);

const popoverIcon = computed(() => {
  if (props.dynamicPlaceholderIcon) {
    return selectedValue.value?.icon;
  } else {
    return props.placeholderIcon;
  }
});

function emitSelectValue(option, close) {
  emit("update:modelValue", option.value);
  emit("change", option);
  selectedValue.value = option;
  close();
}
</script>
