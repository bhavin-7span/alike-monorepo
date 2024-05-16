<template>
  <div class="h-72 relative overflow-hidden rounded-sm">
    <div class="bundle-image">
      <img
        class="h-full w-full object-cover object-center"
        src="https://alike-asset-uat.s3.eu-central-1.amazonaws.com/catalog/product/q/a/qasr_al_hosn_2_.jpg?store=abudhabi_en&image-type=image"
      />
    </div>
  </div>
</template>
<script setup></script>
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
