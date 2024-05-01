<template>
  <div class="w-full">
    <input
      type="text"
      placeholder="Search"
      class="text-3xl border-grey-400 w-full outline-none pb-6 border-b"
    />
  </div>
  <div class="mt-8">
    <h3 class="text-lg font-bold">Suggestions</h3>
    <div class="flex mt-4 flex-wrap gap-2">
      <button
        v-for="(suggestion, index) in suggestions"
        :key="index"
        class="border hover:bg-black transition-all duration-100 hover:text-white rounded-full py-3 px-6"
      >
        {{ suggestion }}
      </button>
    </div>
  </div>
</template>
<script setup>
const suggestions = [
  "Trip Stories",
  "Attractions",
  "Activities",
  "Theme park",
  "Hotels",
  "Tourist Passes",
  "Tours",
  "SIMs & WiFi",
  "Commute",
];
</script>
