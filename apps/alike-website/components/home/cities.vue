<template>
  <AwSection
    name="cities"
    class="overflow-hidden py-16 md:py-28"
    _class="flex items-center justify-center flex-col"
  >
    <AwHeading2 class="text-center max-w-sm md:max-w-3xl">
      Discover lively cities around the world.
    </AwHeading2>
    <div class="mt-6 md:mt-14">
      <Swiper
        :loop="true"
        direction="horizontal"
        :loopedSlides="cities.length"
        :slidesPerView="1"
        :spaceBetween="30"
        :a11y="false"
        :grabCursor="true"
        :speed="41000"
        :modules="modules"
        :autoplay="{
          delay: 500,
          pauseOnMouseEnter: true,
        }"
        class="mySwiper !flex items-center w-full gap-6 transition-all duration-400"
      >
        <SwiperSlide v-for="(city, i) in cities" :key="i">
          <NuxtLink
            :to="`/cities/${city?.name.toLocaleLowerCase()}`"
            class="city-card overflow-hidden group relative flex items-center justify-center"
            @click="openCityPage(city?.name)"
          >
            <div
              class="w-[267px] h-[356px] group-hover:brightness-50"
              style="
                background-image: url('https://source.unsplash.com/featured/300x201');
                background-size: cover;
              "
            ></div>
            <div
              class="hidden group-hover:flex absolute text items-center justify-center h-full w-full text-white text-4xl font-bold"
            >
              {{ city.name }}
            </div>
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
    </div>
    <NuxtLink
      to="/trip-stories"
      class="mt-12 py-4 px-6 rounded-full border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-primary-50 hover:text-white flex gap-1 items-center"
    >
      <span>All Cities</span>
      <AwIconArrowRight />
    </NuxtLink>
  </AwSection>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const modules = [Autoplay];

const cities = [
  { name: "Dubai" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
  { name: "Abu Dhabi" },
];

const openCityPage = (name) => {
  console.log("Opening City Page : ", name);
};
</script>
<style scoped lang="scss">
/* Set radius for even iterations */
.city-card:nth-of-type(even) {
  border-radius: 40px;
}

/* Set radius for odd iterations */
.city-card:nth-of-type(odd) {
  border-radius: 148px;
}

.swiper-slide {
  width: fit-content !important;
  -webkit-transition-timing-function: linear !important;
  -o-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
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
