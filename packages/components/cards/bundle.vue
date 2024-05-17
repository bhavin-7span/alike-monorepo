<template>
  <div class="h-fit w-fit relative overflow-hidden rounded-md">
    <div class="bundle-image">
      <img class="h-full object-cover object-center" :src="img" />
    </div>
    <div
      class="absolute p-8 w-full bottom-0 flex flex-col gap-4 cursor-pointer justify-end h-full group transition-all duration-500 hover:bg-black"
    >
      <div class="text-3xl font-bold text-white" v-html="title" />
      <div
        class="hidden text-lg text-grey-400 group-hover:block transition-all duration-700 line-clamp-2 text-white"
        v-html="description"
      />
      <Button
        shape="circle"
        size="sm"
        :to="to"
        :icon="icon"
        class="hidden transition-transform duration-700 group-hover:flex"
      />
    </div>
  </div>
</template>
<script setup>
import Button from "../button.vue";

const props = defineProps({
  icon: { type: String, default: "AwIconArrowRight" },
  title: String,
  description: String,
  to: String,
  img: String,
});
</script>
<style scoped>
.bundle-image::after {
  content: "";
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    359.55deg,
    rgba(0, 0, 0, 0.74) -8.64%,
    rgba(0, 0, 0, 0) 109.98%
  );
}
</style>
