<template>
  <div class="h-72 relative overflow-hidden rounded-sm">
    <div class="bundle-image">
      <img
        class="h-full w-full object-cover object-center"
        src="https://alike-asset-uat.s3.eu-central-1.amazonaws.com/catalog/product/q/a/qasr_al_hosn_2_.jpg?store=abudhabi_en&image-type=image"
      />
    </div>
    <div
      class="absolute p-8 bottom-0 flex flex-col gap-4 cursor-pointer justify-end h-full group transition-all duration-500 hover:bg-black"
    >
      <h3 class="text-3xl font-bold text-white">
        The MOE Pass (Ski, Shop, SIM, Snack)
      </h3>
      <p
        class="hidden text-lg text-grey-400 group-hover:block transition-all duration-700 line-clamp-2 text-white"
      >
        Experience the captivating contrasts of Dubai with our exclusive "Snow
        and Sand Pass with..
      </p>
      <Button
        shape="circle"
        size="sm"
        icon="AwIconArrowRight"
        class="hidden transition-transform duration-700 group-hover:flex"
      />
    </div>
  </div>
</template>
<script setup>
import Button from "../button.vue";
</script>
<style scoped>
.bundle-image::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    359.55deg,
    rgba(0, 0, 0, 0.74) -8.64%,
    rgba(0, 0, 0, 0) 109.98%
  );
}
</style>
