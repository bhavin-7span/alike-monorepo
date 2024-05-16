<template>
  <div class="card-slider rounded-b-md overflow-hidden relative h-full w-full">
    <Swiper
      :slidesPerView="1"
      :spaceBetween="0"
      :keyboard="{
        enabled: false,
      }"
      :autoplay="autoplay ? sliderAutoplay : false"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper h-full w-full"
    >
      <SwiperSlide
        class="!h-auto slider-image"
        v-for="(img, index) in images"
        :key="index"
      >
        <img :src="img" class="h-60 w-full object-cover object-center" />
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
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper/modules";

const props = defineProps({
  autoplay: {
    type: Boolean,
  },
});
const modules = [Pagination, Navigation, Autoplay];
const sliderAutoplay = {
  delay: 2000,
  disableOnInteraction: false,
};
const images = [
  "https://alike-asset.b-cdn.net/abudhabi/emirates-park.png",
  "https://alike-asset.b-cdn.net/abudhabi/desert-safari.png",
  "https://alike-asset.b-cdn.net/abudhabi/ferrari-world.png",
  "https://alike-asset.b-cdn.net/abudhabi/national-aquarium.png",
];
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

.card-slider {
  .swiper {
    position: static;
  }

  .swiper-button-next {
    @apply hidden;
  }
  .swiper-button-prev {
    @apply hidden;
  }

  .swiper-pagination-bullet {
    @apply visible h-1.5 w-1.5 bg-white;
  }

  .swiper-pagination {
    bottom: 10px;
  }
}
</style>
