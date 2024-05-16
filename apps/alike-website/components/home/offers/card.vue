<template>
  <div
    class="offer-card relative rounded-md overflow-hidden"
    @mouseover="changeHover(true)"
    @mouseleave="changeHover(false)"
  >
    <div
      class="h-[279px] w-[558px] flex items-start justify-between flex-col p-6"
      :style="`background-image: url(${getAssetURL(mediaId)})`"
    >
      <IconsOfferBadge />
      <div class="p-2">
        <h5 class="text-3xl font-bold text-white" v-html="title" />
      </div>
    </div>
    <transition name="fade">
      <div v-if="isHovering" class="absolute h-full w-full top-0 bg-black">
        <div class="p-5 h-full flex items-start justify-between flex-col">
          <div class="text-start">
            <h5 class="text-white text-3xl font-bold" v-html="title" />
            <h5 class="mt-4 text-grey-400 text-lg" v-html="description" />
          </div>
          <NuxtLink
            :to="link"
            class="bg-primary-500 rounded-full h-12 w-12 mt-auto flex items-center justify-center"
          >
            <Icon :name="icon" class="" />
          </NuxtLink>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  description: String,
  mediaId: String,
  link: String,
  icon: String,
});

const isHovering = ref(false);
const changeHover = (data) => {
  isHovering.value = data;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
