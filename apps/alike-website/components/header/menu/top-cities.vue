<template>
    <div class="grid grid-cols-2 gap-8">
        <div class="">
            <div v-for="(firstMonth, index) in topCities.firstMonths" :key="index" class="space-y-1 p-4">
                <h3 class="text-grey-900 font-semibold text-lg">{{ firstMonth.month }}</h3>
                <ul class="flex items-center gap-4 text-grey-500">
                    <li v-for="(list, index) in firstMonth.lists" :key="index">
                        <nuxt-link :to="list.link" class="text-sm text-grey-500 hover:text-primary-500">{{ list.name }}</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="">
            <div v-for="(lastMonth, index) in topCities.lastMonths" :key="index" class="space-y-1 p-4">
                <h3 class="text-grey-900 font-semibold text-lg">{{ lastMonth.month }}</h3>
                <ul class="flex items-center gap-4 text-grey-500">
                    <li v-for="(list, index) in lastMonth.lists" :key="index">
                        <nuxt-link :to="list.link" @click="routerChange(list.link)" class="text-sm font-normal text-grey-500 hover:text-primary-500">{{ list.name }}</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        topCities: Object
    })
</script>