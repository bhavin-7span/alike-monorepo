<template>
  <AwSection
    name="offers"
    class="py-16 md:py-28"
    _class="flex items-center justify-center flex-col overflow-hidden"
  >
    <RichText
      class="text-center max-w-3xl"
      as="h2"
      size="7xl"
      weight="bold"
      :data="detail.metadata.translations[0].title"
    >
    </RichText>

    <div class="mt-6 md:mt-14 relative">
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
        <!-- <SwiperSlide class="flex gap-6" v-for="_ in 3" :key="_">
          <BundleCard
            v-for="(item, i) in detail.cards"
            :key="i"
            :icon="item?.cards_id.primary_button?.icon?.value"
            :to="item?.cards_id.primary_button.page?.path"
            :img="getAssetURL(item.cards_id.media[0]?.directus_files_id)"
            :title="item?.cards_id.translations[0]?.title"
            :description="item.cards_id.translations[0]?.description"
          />
        </SwiperSlide> -->
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
import BundleCard from "components/cards/bundle.vue";

const modules = [Pagination, Autoplay];

const props = defineProps({
  ...defaultProps(),
});

const detail = await useSectionData(props, {
  fields: [
    "metadata.translations.title",
    "cards.cards_id.translations.title",
    "cards.cards_id.translations.description",
    "cards.cards_id.primary_button.page.path",
    "cards.cards_id.primary_button.icon.value",
    "cards.cards_id.media.directus_files_id",
  ],
  deep: {
    ...getDeepLocaleFilter(["metadata"]),
    ...getDeepLocaleFilter(["cards", "cards_id"]),
  },
});

console.log("the detail is:", detail);
</script>

<style lang="scss">
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
