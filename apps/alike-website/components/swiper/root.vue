<template>
  <div class="common-slider">
    <Swiper
      :slidesPerView="1.4"
      :spaceBetween="0"
      :keyboard="{
        enabled: true,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :breakpoints="breakPoints"
      :modules="modules"
      class="mySwiper h-full"
    >
      <SwiperSlide
        class="!h-auto"
        v-for="(slide, index) in slides"
        :key="index"
      >
        <slot name="swiper-slide" :data="slide"> </slot>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup>
// :: Swiper instance ref - https://stackoverflow.com/questions/64872840/how-to-use-swiper-slideto-in-vue3-0
// :: Swiper API - https://swiperjs.com/swiper-api#prop-swiper-activeIndex
// :: Swiper Demos - https://swiperjs.com/demos

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [Keyboard, Pagination, Navigation];

const props = defineProps({
  breakPoints: {
    type: Object,
    default: {
      640: {
        slidesPerView: 2.5,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  },
  slides: {
    type: Array,
    default: () => [],
  },
});
</script>
<style lang="scss">
.common-slider {
  .swiper {
    position: static;
  }

  .swiper-button-next {
    @apply absolute hidden md:block -right-14;
  }
  .swiper-button-prev {
    @apply absolute hidden md:block -left-14;
  }

  .swiper-button-next,
  .swiper-button-prev {
    @apply bg-white bg-center size-8 px-5 py-5 bg-no-repeat rounded-full border border-black;
  }

  .swiper-button-prev {
    background-image: url("/prev-icon.svg");
  }

  .swiper-button-next {
    background-image: url("/next-icon.svg");
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    content: "";
  }

  .swiper-pagination-bullet {
    @apply invisible md:visible h-1.5 w-1.5 bg-primary-500;
  }

  .swiper-pagination {
    bottom: -28px !important;
  }
}
</style>
