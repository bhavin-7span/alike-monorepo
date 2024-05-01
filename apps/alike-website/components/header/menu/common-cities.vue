<template>
  <div class="mt-0">
    <div class="space-y-2">
      <div
        v-for="(city, index) in cities"
        :key="index"
        class="flex items-center py-3 px-4 gap-4"
      >
        <h4
          class="text-grey-900 text-lg font-semibold whitespace-nowrap w-36"
        >
          {{ city.name }}
        </h4>
        <ul class="flex items-center gap-4">
          <li
            v-for="(item, index) in city.lists"
            :key="index"
            class="text-grey-500 text-sm hover:text-primary-500"
          >
            <nuxt-link :to="item.link">
              {{ item.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(
    {
        cities:Array
    }
)
</script>
