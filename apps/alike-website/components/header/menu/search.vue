<template>
  <div class="w-full">
    <input
      type="text"
      v-model="searchString"
      placeholder="Search"
      class="text-3xl border-grey-400 w-full outline-none pb-6 border-b"
    />
  </div>
  <div v-if="!searchString" class="mt-8">
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
  <div v-else class="flex flex-col mt-6 gap-4">
    <template v-for="(hotel, index) in hotels[0].items" :key="index">
      <CardSearchProduct
        :img="hotel.thumbnail"
        :title="hotel.name"
        sub-title="Dubai"
      />
    </template>
    <div
      class="flex text-primary-500 hover:text-primary-600 cursor-pointer font-semibold items-center"
    >
      <p class="mr-1">Show all results for {{ searchString }}</p>
      <AwIconArrowRight class="text-xl" />
    </div>
  </div>
</template>
<script setup>
import { hotels } from "~/data/menu/common.js";

const searchString = ref("");

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
