<template>
    <nuxt-link :to="data.link"
        class="flex gap-3 items-center group"
    >
        <NuxtImg
            provider="bunny"
            :src="data.thumbnail"
            :quality="100"
            class="w-16 h-16 rounded-xs object-cover"
            fit="cover"
            loading="lazy" 
        />
        <h3 class="text-base text-grey-900 text-left font-medium group-hover:text-primary-500">
            {{ data.name }}
        </h3>
    </nuxt-link>
</template>
<script setup>
const props = defineProps(
    {
        data:Object
    }
)
</script>