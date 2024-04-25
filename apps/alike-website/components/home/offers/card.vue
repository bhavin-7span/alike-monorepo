<template>
  <div
    class="offer-card relative rounded-md overflow-hidden"
    @mouseover="changeHover(true)"
    @mouseleave="changeHover(false)"
  >
    <div
      class="h-[279px] w-[558px] flex items-start justify-between flex-col p-6"
      style="background-image: url('/images/home/offers/pass-demo.jpg')"
    >
      <IconsOfferBadge />
      <div class="p-2">
        <p class="text-3xl font-bold text-white">
          The MOE Pass
          <br />(Ski, Shop, SIM, Snack)
        </p>
      </div>
    </div>
    <transition name="fade">
      <div v-if="isHovering" class="absolute h-full w-full top-0 bg-black">
        <div class="p-5 h-full flex items-start justify-between flex-col">
          <div class="text-start">
            <p class="text-white text-3xl font-bold">
              Snow and Sand Pass with Free <br />SIM Card
            </p>
            <p class="mt-4 text-grey-400 text-lg">
              Experience the captivating contrasts of Dubai with our exclusive
              "Snow and Sand Pass with ...
            </p>
          </div>
          <button class="bg-primary-500 rounded-full p-4 mt-auto">
            <AwIconArrowRight />
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
