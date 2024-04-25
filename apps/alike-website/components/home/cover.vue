<template>
  <section class="flex items-center justify-center">
    <div class="flex h-screen overflow-hidden cursor-pointer w-full">
      <NuxtLink
        to="/traveller"
        class="image-1 relative transition-all duration-500"
        :class="
          hovering ? 'w-full md:w-1/4 md:brightness-50' : 'w-full md:w-3/4'
        "
      >
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
      </NuxtLink>
      <NuxtLink
        class="image-2 relative transition-all duration-500 h-full"
        @mouseover="changeHover(true)"
        @mouseleave="changeHover(false)"
        :class="hovering ? 'md:w-3/4' : 'md:w-1/4 brightness-50'"
        to="/creator"
      >
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
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const hovering = ref(false);

const changeHover = (data) => {
  hovering.value = data;
};
</script>
<style lang="scss"></style>
