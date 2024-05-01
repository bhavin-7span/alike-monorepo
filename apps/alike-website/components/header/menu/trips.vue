<template>
    <div class="flex gap-6">
        <nuxt-link v-for="(trip,index) in tripNavigations" :key="index" :to="trip.link" class="flex">
            <NuxtImg
                :src="trip.thumbnail"
                :quality="100"
                class="w-16 h-16 rounded-xs object-cover"
                fit="cover"
                loading="lazy" 
            />
            <div>
                <h3>{{ trip.name }}</h3>
                <p>{{ trip.description }}</p>
            </div>
        </nuxt-link>
    </div>
</template>
<script setup>
const tripNavigations = ref(
    [
        {
            thumbnail:'https://picsum.photos/80',
            name: 'Trip Stories',
            link:'/trip-stories',
            description: 'EXPLORE curated Trip Stories crafted by insiders and secure your travel experience by booking a trip.',
        },
        {
            thumbnail:'https://picsum.photos/80',
            name: 'Trip Plan',
            link:'/trip-plan',
            description: 'Carefully orchestrate every detail of your travel adventure starting from the very beginning.',
        }
    ]
);
</script>