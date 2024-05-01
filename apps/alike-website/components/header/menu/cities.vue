<template>
    <div class="flex">
        <div class="w-72 me-10">
          <h3 class="text-grey-400 text-sm uppercase font-semibold">Cities</h3>
          <div
            v-for="(type,index) in cityTypes"
            :key="type.id"
            @mouseover="activeType(type.id)"
            class="mt-4 p-4 rounded-xs relative group cursor-pointer hover:bg-primary-50"
            :class="isActive == type.id ? 'bg-primary-50' : ''"
          >
            <div class="space-y-1 ">
              <h4 class="text-grey-900 font-semibold text-lg group-hover:text-primary-500" :class="isActive == type.id ? 'text-primary-500' : ''">
                {{ type.name }}
              </h4>
              <p v-if="type.content" class="text-grey-500 text-sm">
                {{ type.content }}
              </p>
              <ul
                v-else
                class="text-grey-500 text-xs flex items-center gap-3 "
              >
                <li
                  v-for="(link, index) in type?.links"
                  :key="index"
                >
                  <nuxt-link :to="link.path" class="text-sm hover:text-grey-900">
                    {{ link.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex-1 pt-10">
          <HeaderMenuPopularDestination v-if="isActive == 1" :destinations="popularDestinations"/>
          <HeaderMenuTopCities v-if="isActive == 2" :topCities="topCities"/>
          <HeaderMenuCommonCities v-if="isActive == 3" :cities="middleEastAfrica"/>
          <HeaderMenuCommonCities v-if="isActive == 4" :cities="asia"/>
          <HeaderMenuCommonCities v-if="isActive == 5" :cities="europe"/>
        </div>
    </div>
</template>
<script setup>
import { cityTypes,popularDestinations, topCities, middleEastAfrica, asia, europe } from '~/data/menu/cities.js'


const isActive = ref(1);

const activeType = (id) => {
  isActive.value = id; 
}
</script>