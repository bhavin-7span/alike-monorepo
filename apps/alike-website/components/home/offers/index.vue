<template>
  <AwSection
    name="offers"
    class="py-16 md:py-28"
    _class="flex items-center justify-center flex-col"
  >
    <AwHeading2 class="text-center max-w-sm md:max-w-3xl">
      Bundle up with savings : cozy winter offers now LIVE!
    </AwHeading2>
    <!-- <div class="mt-6 md:mt-14">Winter Offer Cards With Swiper</div> -->
    <div class="mt-6 md:mt-14 relative w-full overflow-hidden">
      <!-- :pagination="{  }" -->
      <Swiper
        :slidesPerView="1"
        :spaceBetween="20"
        :pagination="{ el: '.paginationEl', dynamicBullets: true }"
        :autoplay="{
          pauseOnMouseEnter: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide class="flex gap-6" v-for="_ in 5">
          <HomeOffersCard />
          <HomeOffersCard />
        </SwiperSlide>
      </Swiper>
      <div class="paginationEl flex items-center justify-center mt-6"></div>
    </div>
  </AwSection>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const modules = [Pagination, Autoplay];
</script>
<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: 100% !important;
  @apply flex items-center justify-center;
}
.paginationEl {
  width: 100% !important;
  transform: none !important;

  .swiper-pagination-bullet-active {
    background: grey !important;
  }
}
</style>
