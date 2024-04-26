<template>
  <header class="fixed z-50 inset-x-0 top-0">
    <div class="relative py-4 bg-white z-50">
      <div class="container mx-auto">
        <div class="flex items-center justify-between">
          <NuxtLink to="/">
            <NuxtImg
              provider="bunny"
              src="/alike-logo-dark.png"
              width="110"
              height="40"
              :quality="90"
            />
          </NuxtLink>

          <div class="flex gap-14">
            <div v-for="(link, index) in navLinks" :key="index">
              <div
                v-if="link.megaMenu"
                @click="dropMenu(link.name)"
                class="text-grey-900 hover:text-primary-500 inline-flex gap-2 cursor-pointer"
                :class="activeSlideMenu == link.name ? 'text-primary-500' : ''"
              >
                <span>{{ link.name }}</span>
                <AwIconArrowDown class="hover:text-primary-500 w-4" />
              </div>
              <nuxt-link v-else :to="link.href">
                {{ link.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HeaderMenu
      :slide-menu="slideMenu"
      :active-menu="activeSlideMenu"
      @closeMenu="dropMenu"
    />
  </header>
</template>
<script setup>
const navLinks = ref([
  {
    name: "Explore",
    href: "#",
    megaMenu: true,
  },
  {
    name: "Trips",
    href: "#",
    megaMenu: true,
  },
  {
    name: "Offers",
    href: "#",
    megaMenu: false,
  },
]);

const slideMenu = ref(false);
const activeSlideMenu = ref(null);
const dropMenu = (name) => {
  if (slideMenu.value == false && activeSlideMenu.value == null) {
    slideMenu.value = true;
    activeSlideMenu.value = name;
  } else if (activeSlideMenu.value == name || !name) {
    slideMenu.value = false;
    activeSlideMenu.value = null;
  } else if (activeSlideMenu.value !== null && name) {
    activeSlideMenu.value = name;
  }
};
</script>
<style>
.mega-menu {
  height: calc(100vh - 84px);
  transform-origin: top;
  transition: transform 0.4s ease-in-out;
  overflow: hidden;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
