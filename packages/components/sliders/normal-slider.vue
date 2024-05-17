<template>
  <div class="container h-full z-50 normal-slider">
    <Swiper
      :slidesPerView="2"
      :spaceBetween="20"
      :navigation="true"
      :autoplay="true"
      :pagination="{
        dynamicBullets: true,
      }"
      :modules="modules"
      class="mySwiper !pb-10"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <slot name="swiper-slide" :data="slide"> </slot>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// import required modules
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const props = defineProps({
  slides: Array,
});

const modules = [Keyboard, Autoplay, Pagination, Navigation];
</script>
<style lang="scss">
.slider-image::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
}

.normal-slider {
  .swiper {
    position: relative;
  }
  .swiper-button-next {
    @apply hidden;
  }
  .swiper-button-prev {
    @apply hidden;
  }

  .swiper-pagination {
    position: absolute;
    bottom: 0px !important;
  }
}
</style>
