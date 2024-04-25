<template>
  <div class="test-page">
    <AwSection
      name="test-page"
      class="py-16 md:py-28"
      _class="flex items-center justify-center flex-col border-4 border-black py-10"
    >
      <AwHeading2 class="text-center max-w-sm md:max-w-3xl">
        Carousel Demo
      </AwHeading2>

      <div class="mt-6 md:mt-14">
        <ClientOnly>
          <Swiper
            :spaceBetween="20"
            :pagination="{
              clickable: true,
            }"
            :autoplay="{
              delay: 500,
              disableOnInteraction: false,
            }"
            :modules="modules"
            class="mySwiper"
          >
            <SwiperSlide v-for="(img, index) in sliderImages" :key="index">
              <img
                :src="img.url"
                class="h-72 object-contain object-center rounded-lg w-full"
                alt="image"
              />
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
      </div>
    </AwSection>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const modules = [Pagination, Autoplay];
const sliderImages = [
  {
    __typename: "ProductImage",
    url: "https://alike-asset-uat.s3.eu-central-1.amazonaws.com/catalog/product/b/i/big_bus_tour_abu_dhabi_book_now_alike_5_.png?store=abudhabi_en&image-type=image",
    label:
      "Big Bus Tour - Explore Abu Dhabi at Your Own Pace \r\n| Book Now | Alike",
    disabled: false,
  },
  {
    __typename: "ProductImage",
    url: "https://alike-asset-uat.s3.eu-central-1.amazonaws.com/catalog/product/b/i/big_bus_tour_abu_dhabi_book_now_alike_1_.png?store=abudhabi_en&image-type=image",
    label:
      "Big Bus Tour - Explore Abu Dhabi at Your Own Pace \r\n| Book Now | Alike",
    disabled: false,
  },
  {
    __typename: "ProductImage",
    url: "https://alike-asset-uat.s3.eu-central-1.amazonaws.com/catalog/product/b/i/big_bus_tour_abu_dhabi_book_now_alike_2_.png?store=abudhabi_en&image-type=image",
    label:
      "Big Bus Tour - Explore Abu Dhabi at Your Own Pace \r\n| Book Now | Alike",
    disabled: false,
  },
  {
    __typename: "ProductImage",
    url: "https://alike-asset-uat.s3.eu-central-1.amazonaws.com/catalog/product/b/i/big_bus_tour_abu_dhabi_book_now_alike_3_.png?store=abudhabi_en&image-type=image",
    label:
      "Big Bus Tour - Explore Abu Dhabi at Your Own Pace \r\n| Book Now | Alike",
    disabled: true,
  },
  {
    __typename: "ProductImage",
    url: "https://alike-asset-uat.s3.eu-central-1.amazonaws.com/catalog/product/b/i/big_bus_tour_abu_dhabi_book_now_alike_4_.png?store=abudhabi_en&image-type=image",
    label:
      "Big Bus Tour - Explore Abu Dhabi at Your Own Pace \r\n| Book Now | Alike",
    disabled: true,
  },
];
</script>
<style scoped>
.swiper {
  width: 500px;
  height: 500px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
