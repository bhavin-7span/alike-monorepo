<template>
  <header class="py-4">
    <div class="container">
      <div class="flex items-center justify-between">
        <a href="">
          <img
            src="https://alike-asset.b-cdn.net/vue-images/alike-logo-dark.png"
            class="h-[52px]"
            alt=""
          />
        </a>

        <div class="flex gap-14">
          <nuxt-link
            v-for="(link, index) in navLinks"
            :to="link.href"
            class="text-grey-900 hover:text-primary-500"
          >
            {{ link.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
const navLinks = ref([
  {
    name: "Explore",
    href: "#",
  },
  {
    name: "Trips",
    href: "#",
  },
  {
    name: "Offers",
    href: "#",
  },
]);
</script>
