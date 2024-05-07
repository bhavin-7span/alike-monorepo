<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton
      class="flex items-center py-3 gap-3 px-4 justify-between border-2 border-grey-500 hover:border-black rounded-full outline-none"
    >
      <div class="flex gap-2 items-center">
        <Icon v-if="popoverIcon" :name="popoverIcon" class="text-lg" />
        <p v-if="selectedValue" class="text-base font-medium">
          {{ selectedValue }}
        </p>
        <p v-else class="text-base font-medium">
          {{ placeholder }}
        </p>
      </div>
      <div
        v-if="count"
        class="rounded-full h-6 p-2 min-w-6 flex items-center justify-center bg-black text-white"
      >
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
      class="absolute popup-arrow text-start bg-white"
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
import Icon from "./icon.vue";
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
    left: 50px;
    top: -5px;

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
