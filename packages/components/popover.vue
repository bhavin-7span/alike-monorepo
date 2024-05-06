<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton
      class="flex items-center py-3 gap-3 px-4 justify-between border-2 border-grey-500 hover:border-black rounded-full outline-none"
    >
      <div class="flex gap-2 items-center">
        <Icon name="AwIconFilter" class="text-lg" />
        <p v-if="selectedValue" class="text-base font-medium">
          {{ selectedValue }}
        </p>
        <p v-else class="text-base font-semibold font-medium">{{ label }}</p>
      </div>
      <div
        v-if="count"
        class="rounded-full h-6 w-6 flex items-center justify-center bg-black text-white"
      >
        {{ count }}
      </div>
      <Icon
        v-else
        name="AwIconDropdown"
        class="text-xl ml-3 transition-all"
        :class="open ? '-rotate-180' : ''"
      />
    </PopoverButton>

    <PopoverPanel class="absolute bg-white" :class="popoverClass">
      <slot name="default"> Your content will be here </slot>
    </PopoverPanel>
  </Popover>
</template>

<script setup>
import Icon from "./icon.vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
const props = defineProps({
  label: {
    type: String,
    default: "Select",
  },
  count: [String, Number],
  popoverClass: String,
  selectedValue: [String, Number],
});
</script>
<style>
.popover-shadow {
  box-shadow: 0px 5px 50px 0px #0000000d;
}
</style>
