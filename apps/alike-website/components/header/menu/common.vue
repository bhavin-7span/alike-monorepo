<template>
    <div class="flex">
        <div class="w-72 me-10">
          <h3 class="text-grey-400 text-sm uppercase font-semibold mb-4">{{title}}</h3>
          <div
            v-for="(item,index) in data"
            :key="index"
            @mouseover="activeType(index)"
            class="p-4 rounded-xs relative group cursor-pointer hover:bg-primary-50"
            :class="isActive == index ? 'bg-primary-50' : ''"
          >
            <h4 class="text-grey-900 font-semibold text-lg group-hover:text-primary-500" :class="isActive == index ? 'text-primary-500' : ''">
            {{ item.title }}
            </h4>
          </div>
        </div>   
        <div class="flex-1 ">
          <div class="grid grid-cols-3 gap-6 mt-10">
            <div v-for="(item, index) in data[isActive].items" :key="index">
                <HeaderMenuCard type="common" :data="item"/>
            </div>
        </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(
    {
        data: Array,
        title: String
    }
)

const isActive = ref(0);

const activeType = (index) => {
    isActive.value = index; 
}
</script>