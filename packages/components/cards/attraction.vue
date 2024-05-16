<template>
  <div class="bg-white rounded-md overflow-hidden">
    <div class="relative">
      <CardCarousel :autoplay="true" />
      <CartFavoriteButton class="absolute top-5 z-10 right-5" />
      <div class="absolute flex gap-2 z-10 -bottom-4 items-center right-7">
        <Icon name="AwIconPremium" />
        <CardStayDuration data="1N/2D" />
      </div>
    </div>
    <div class="px-8 pb-8 pt-6">
      <CardSubtitle data="Abu Dhabi, Dubai " />
      <CardTitle
        class="mt-1"
        data="A Romantic Escapade Through Dubai and Abu"
      />
      <CardList
        class="py-4"
        :data="['2 Activities', '1 Hotel', '5 Attractions', '1 SIM']"
      />
      <div
        class="flex pt-3 border-t w-full justify-between items-center items-center"
      >
        <CardPricing :amount="150" amount-per="Person" />
        <CardAvatar
          class="w-12 h-12 rounded-full object-cover object-center"
          img="https://alike-asset.s3.eu-central-1.amazonaws.com/insider_insiders/logo/avatar_3531_1693418320.jpg?width=377&height=440&store=alike&image-type=image"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import CardCarousel from "../atoms/card/carousel.vue";
import CardSubtitle from "../atoms/card/subtitle.vue";
import CardTitle from "../atoms/card/title.vue";
import CardList from "../atoms/card/list.vue";
import CardPricing from "../atoms/card/pricing.vue";
import CardAvatar from "../atoms/card/avatar.vue";
import CardStayDuration from "../atoms/card/stay-duration.vue";
import CartFavoriteButton from "../atoms/card/favorite-button.vue";
</script>
