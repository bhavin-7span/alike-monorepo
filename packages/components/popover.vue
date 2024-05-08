<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton :class="popoverClasses">
      <div class="flex gap-2 items-center">
        <Icon v-if="popoverIcon" :name="popoverIcon" class="text-lg" />
        <p v-if="selectedValue" class="text-base font-medium">
          {{ selectedValue }}
        </p>
        <p v-else class="text-base font-medium">
          {{ placeholder }}
        </p>
      </div>
      <div v-if="count" :class="counterClass">
        {{ count }}
      </div>
      <Icon
        v-else-if="showDropdownIcon"
        name="AwIconDropdown"
        class="text-xl ml-3 transition-all"
        :class="open ? '-rotate-180' : ''"
      />
    </PopoverButton>

    <PopoverPanel
      class="absolute popup-arrow popover-shadow text-start bg-white"
      :class="popoverClass"
      v-slot="{ close }"
    >
      <slot name="default" :close="close">
        <div class="p-5">Your content will be here</div></slot
      >
    </PopoverPanel>
  </Popover>
</template>

<script setup>
import { computed } from "vue";
import { twMerge } from "tailwind-merge";

import Icon from "./icon.vue";
import { popover, counter } from "./cva-css/popover.js";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const props = defineProps({
  placeholder: {
    type: String,
    default: "Select",
  },
  count: [String, Number],
  popoverClass: String,
  popoverIcon: {
    type: [String, Boolean],
    default: "AwIconFilter",
  },
  showDropdownIcon: {
    type: Boolean,
    default: true,
  },
  selectedValue: [String, Number],
  color: {
    type: String,
    default: "black",
  },
  size: {
    type: String,
    default: "md",
  },
  theme: {
    type: String,
    default: "outlined",
  },
  arrowPosition: {
    type: [Number, String],
    default: 50,
  },
});

// Using CVA from button.js to generate the class of button variation.
const popoverClasses = computed(() => {
  return twMerge(
    popover({
      color: props.color,
      size: props.size,
      theme: props.theme,
    })
  );
});

const counterClass = computed(() => {
  return twMerge(
    counter({
      color: props.color,
      size: props.size,
      theme: props.theme,
    })
  );
});

const popoverArrowPosition = computed(() => {
  return `${props.arrowPosition}px`;
});
</script>
<style lang="scss">
.popover-shadow {
  box-shadow: 0px 5px 50px 0px #0000000d;
}
.popup-arrow {
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    left: auto;
    left: v-bind(popoverArrowPosition);
    top: -8px;
    z-index: -1;

    /* Natural/White */

    background: #ffffff;
    transform: rotate(45deg);

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;
  }
}
</style>
