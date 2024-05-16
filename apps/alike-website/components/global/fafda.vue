<template>
  <section
    class="flex items-center justify-center"
    v-if="data?.cards && data.cards.length == 2"
  >
    <div class="flex h-[720px] overflow-hidden cursor-pointer w-full">
      <NuxtLink
        :to="data.cards[0].cards_id.primary_button.page.path"
        :target="data.cards[0].cards_id.primary_button.target"
        class="image1 relative transition-all duration-500 h-full"
        :class="
          hovering ? 'w-full md:w-1/4 md:brightness-50' : 'w-full md:w-3/4'
        "
      >
        <NuxtImg
          provider="directus"
          :src="data.cards[0].cards_id.media[0].directus_files_id"
          :quality="90"
          class="h-full object-cover w-full"
          alt="Traveller Image"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <h5
            v-html="data.cards[0].cards_id.translations[0].title"
            class="text-white font-bold transition-all duration-200"
            :class="hovering ? 'text-3xl' : 'text-8xl'"
          />
        </div>
      </NuxtLink>
      <NuxtLink
        :to="data.cards[1].cards_id.primary_button.page.path"
        :target="data.cards[1].cards_id.primary_button.target"
        class="image2 relative transition-all duration-500 h-full"
        @mouseover="changeHover(true)"
        @mouseleave="changeHover(false)"
        :class="hovering ? 'md:w-3/4' : 'md:w-1/4 brightness-50'"
      >
        <NuxtImg
          provider="directus"
          :src="data.cards[1].cards_id.media[0].directus_files_id"
          :quality="90"
          class="h-full object-cover w-full"
          alt="Creator Image"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <h5
            v-html="data?.cards[1]?.cards_id?.translations[0]?.title"
            class="text-white font-bold transition-all duration-200"
            :class="hovering ? 'text-8xl' : 'text-3xl'"
          />
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  ...defaultProps(),
});

const hovering = ref(false);

const data = await useSectionData(props, {
  fields: [
    "cards.cards_id.translations.title",
    "cards.cards_id.primary_button.page.path",
    "cards.cards_id.primary_button.target",
    "cards.cards_id.media.directus_files_id",
  ],
  ...getDeepLocaleFilter(["cards", "cards_id"]),
});

const changeHover = (data) => {
  hovering.value = data;
};
</script>
