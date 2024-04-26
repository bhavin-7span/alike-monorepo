<template>
    <nuxt-link :to="data.link" class="group">
        <NuxtImg
            provider="bunny"
            :src="data.img"
            :quality="100"
            class="h-28 rounded-sm object-cover"
            fit="cover"
            loading="lazy" 
        />
        <p class="text-grey-900 mt-2 group-hover:text-primary-500">
            {{ data.title }}
        </p>
    </nuxt-link>
</template>
<script setup>
const props = defineProps(
    {
        data:Object
    }
)
</script>