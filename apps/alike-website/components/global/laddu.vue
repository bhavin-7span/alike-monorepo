<template>
  <AwSection
    name="offers"
    class="py-16 md:py-28"
    _class="flex items-center justify-center flex-col overflow-hidden"
  >
    <SectionTitle :data="detail.metadata.translations[0].title"> </SectionTitle>

    <div class="py-6 px-0 md:px-24 2xl:px-48 md:py-14 w-full">
      <NormalSlider :slides="[...detail.cards, ...detail.cards]">
        <template #swiper-slide="{ data }">
          <BundleCard
            :to="data?.cards_id.primary_button.page?.path"
            :img="getAssetURL(data.cards_id.media[0]?.directus_files_id)"
            :title="data?.cards_id.translations[0]?.title"
            :description="data.cards_id.translations[0]?.description"
            class="text-start"
          />
        </template>
      </NormalSlider>
      <div class="paginationEl flex items-center justify-center mt-6"></div>
    </div>
  </AwSection>
</template>
<script setup>
import BundleCard from "components/cards/bundle.vue";
import NormalSlider from "components/sliders/normal-slider.vue";

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

console.log("the detail is", detail);
</script>

<style lang="scss"></style>
