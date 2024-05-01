<template>
    <div class="flex">
        <div class="pe-10 me-10 border-e border-grey-200">
            <h3 class="text-grey-400 text-sm uppercase font-semibold">Explore</h3>

            <ul class="flex flex-col space-y-4 mt-4">
                <li 
                    v-for="(category,index) in exploreCategory" :key="index" class="text-grey-500  cursor-pointer"
                    @mouseover="activeMenu(category.id)"
                    :class="isActive == category.id ? 'text-primary-500' : 'text-grey-900'" 
                >
                    {{ category.name }}
                </li>
            </ul>
        </div>
        <div class="flex-1">
            <HeaderMenuCities v-if="isActive == 'cities'"/>
            <HeaderMenuExperiences v-if="isActive == 'experiences'"/>
            <HeaderMenuCommon v-if="isActive == 'hotel'" title="Hotels" :data="hotels" />
            <HeaderMenuCommon v-if="isActive == 'esim'" title="eSIM" :data="eSim" />
            <HeaderMenuCommon v-if="isActive == 'travel-passes'" title="Travel Passes" :data="travelPasses" />
        </div>
    </div>
</template>
<script setup>
import { hotels,eSim,travelPasses } from '~/data/menu/common.js'
const exploreCategory = ref(
    [
        {
            name: 'Cities',
            id: 'cities'
        },
        {
            name: 'Experiences',
            id: 'experiences'
        },
        {
            name: 'Hotel',
            id: 'hotel'
        },
        {
            name: 'eSIM',
            id: 'esim'
        },
        {
            name: 'Travel Passes',
            id: 'travel-passes'
        }
    ]
);

const isActive = ref('cities');

const activeMenu = (id) => {
    isActive.value = id; 
}
</script>