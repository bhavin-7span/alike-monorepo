<template>
    <div>
        <div class="grid grid-cols-4 gap-4 text-center">
            <div v-for="(destination, index) in destinations" :key="index">
                <HeaderMenuCard :data="destination"/>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(
    {
        destinations:[Array,Object]
    }
)
</script>