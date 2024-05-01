<template>
    <div class="flex">
        <div class="w-72 me-10">
          <h3 class="text-grey-400 text-sm uppercase font-semibold">Experiences</h3>
          <div
            v-for="(experience,index) in experiences"
            :key="index"
            @mouseover="activeType(index)"
            class="mt-4 p-4 rounded-xs relative group cursor-pointer hover:bg-primary-50"
            :class="isActive == index ? 'bg-primary-50' : ''"
          >
            <div class="space-y-2 ">
              <h4 class="text-grey-900 font-semibold text-lg group-hover:text-primary-500" :class="isActive == index ? 'text-primary-500' : ''">
                {{ experience.title }}
              </h4>
              <p v-if="experience.description" class="text-grey-500 text-sm">
                {{ experience.description }}
              </p>
            </div>
          </div>
        </div>   
        <div class="flex-1 ">
          <HeaderMenuAttractions :cities="experiences[isActive]"/>
        </div>
    </div>
</template>
<script setup>
import { experiences } from '~/data/menu/experiences.js'

const isActive = ref(0);

const activeType = (index) => {
  isActive.value = index; 
}
</script>