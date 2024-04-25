<template>
  <div class="flex items-center justify-center">
    <div class="flex h-[720px] overflow-hidden cursor-pointer w-full">
      <div
        class="image1 relative transition-all duration-500 h-full"
        :class="
          hovering ? 'w-full md:w-1/4 md:brightness-50' : 'w-full md:w-3/4'
        "
        @click="selectTraveller()"
      >
        <!-- style="
          background-image: url('/images/cover/traveller.jpg');
          background-position: center;
        " -->
        <img
          src="/images/cover/traveller.jpg"
          class="h-full object-cover w-full"
          alt="Traveller Image"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <p
            class="text-white font-bold transition-all duration-200"
            :class="hovering ? 'text-3xl' : 'text-8xl'"
          >
            Traveller
          </p>
        </div>
      </div>
      <div
        class="image2 relative transition-all duration-500 h-full"
        @mouseover="changeHover(true)"
        @mouseleave="changeHover(false)"
        @click="selectCreator()"
        :class="hovering ? 'md:w-3/4' : 'md:w-1/4 brightness-50'"
      >
        <!-- style="
          background-image: url('/images/cover/creator.jpg');
          background-position: center;
        " -->
        <img
          src="/images/cover/creator.jpg"
          class="h-full object-cover w-full"
          alt="Creator Image"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <p
            class="text-white font-bold transition-all duration-200"
            :class="hovering ? 'text-8xl' : 'text-3xl'"
          >
            Creator
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hovering = ref(false);
const isCreator = ref(false);

const changeHover = (data) => {
  hovering.value = data;
};
const selectTraveller = () => {
  console.log("Selecting Traveller");
};
const selectCreator = () => {
  isCreator.value = true;
  console.log("Selecting Creator");
};
</script>
<style lang="scss"></style>
