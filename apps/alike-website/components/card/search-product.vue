<template>
  <div class="flex">
    <NuxtImg
      :src="img"
      :quality="100"
      class="h-12 w-12 mr-3 object-cover rounded-xxs"
      fit="cover"
      loading="lazy"
    />
    <div>
      <h3 class="text-base font-bold">{{ title }}</h3>
      <p class="text-sm text-grey-400 mt-1">{{ subTitle }}</p>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: String,
});
</script>
