<template>
  <Popover class="relative">
    <PopoverButton
      class="flex items-center py-3 px-4 justify-between border-2 border-grey-500 hover:border-black rounded-full outline-none"
    >
      <div class="flex gap-2 items-center">
        <Icon name="AwIconFilter" class="text-lg" />
        <p class="text-base font-medium">{{ title }}</p>
      </div>
      <Icon name="AwIconDropdown" class="text-xl ml-7" />
    </PopoverButton>

    <PopoverPanel class="absolute z-10">
      <div class="grid grid-cols-2">
        <a href="/analytics">Analytics</a>
        <a href="/engagement">Engagement</a>
        <a href="/security">Security</a>
        <a href="/integrations">Integrations</a>
      </div>

      <img src="/solutions.jpg" alt="" />
    </PopoverPanel>
  </Popover>
</template>

<script setup>
import Icon from "./icon.vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
const props = defineProps({
  title: {
    type: String,
    default: "Select",
  },
});
</script>
