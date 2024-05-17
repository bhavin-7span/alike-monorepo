<template>
  <div class="h-72 relative overflow-hidden rounded-sm">
    <div class="bundle-image">
      <img class="h-full w-full object-cover object-center" :src="img" />
    </div>
    <div
      class="absolute p-8 bottom-0 flex flex-col gap-4 cursor-pointer justify-end h-full group transition-all duration-500 hover:bg-black"
    >
      <h3 class="text-3xl font-bold text-white">
        {{ title }}
      </h3>
      <p
        class="hidden text-lg text-grey-400 group-hover:block transition-all duration-700 line-clamp-2 text-white"
      >
        {{ description }}
      </p>
      <Button
        shape="circle"
        size="sm"
        :to="link"
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
  link: String,
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
