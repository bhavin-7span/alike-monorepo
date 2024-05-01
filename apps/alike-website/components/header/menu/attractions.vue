<template>
    <div class="mt-10 space-y-10">
        <div>
            <div class="flex items-center justify-between font-bold text-sm pb-4">
                <h4 class="text-grey-900 text-lg font-semibold">Activities</h4>
                <button
                    class="text-grey-900 hover:text-primary-500"
                >
                    <AwIconArrowRight class="w-4"/>
                </button>
            </div>
            <div class="grid grid-cols-2 gap-3 text-center">
                <div
                    v-for="(attraction, index) in cities.activities"
                    :key="index"
                >
                    <CardHorizontal :data="attraction" />
                </div>
            </div>
        </div>
        <div>
            <div class="flex items-center justify-between font-bold text-sm pb-4">
                <h4 class="text-grey-900 text-lg font-semibold">Attractions</h4>
                <button
                    class="text-grey-900 hover:text-primary-500"
                >
                    <AwIconArrowRight class="w-4"/>
                </button>
            </div>
            <div class="grid grid-cols-2 gap-3 text-center">
                <div
                    v-for="(attraction, index) in cities.attractions"
                    :key="index"
                >
                    <CardHorizontal :data="attraction" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup> 
const props = defineProps({
    cities:[Array,Object]
})
</script>