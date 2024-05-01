<template>
    <nuxt-link :to="data.link" class="group">
        <NuxtImg
            :provider="type == 'common' ? '' : 'bunny'"
            :src="data.thumbnail"
            :quality="100"
            class="rounded-sm object-cover"
            :class="type == 'common' ? 'w-full h-36' : 'h-28'"
            fit="cover"
            loading="lazy" 
        />
        <p class="text-grey-900 mt-2 group-hover:text-primary-500 truncate">
            {{ data.name }}
        </p>
    </nuxt-link>
</template>
<script setup>
const props = defineProps(
    {
        data: Object,
        type: String
    }
)
</script>