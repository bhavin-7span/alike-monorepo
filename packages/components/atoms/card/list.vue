<template>
  <ul
    v-if="data"
    class="text-base card-listing grid list-disc list-inside grid-cols-2 gap-1 text-grey-500"
  >
    <li v-for="(item, index) in data" :key="index">{{ item }}</li>
  </ul>
</template>
<script setup>
const props = defineProps({
  data: Array,
});
</script>
<style scoped lang="scss">
.card-listing {
  @apply list-none;
  li {
    @apply relative pl-5;
    &::before {
      @apply absolute left-0 right-auto top-2  rounded-full  bottom-auto flex items-center justify-center h-2 w-2 bg-grey-300;
      content: "";
    }
  }
}
</style>
