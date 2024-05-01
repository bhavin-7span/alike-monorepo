<template>
  <header class="fixed z-50 inset-x-0 top-0">
    <div class="relative py-4 bg-white z-40">
      <div class="container mx-auto">
        <div class="flex items-center justify-between">
          <a href="">
            <NuxtImg
              provider="bunny"
              src="/alike-logo-dark.png"
              width="110"
              height="40"
              :quality="90"
            />
          </a>

          <div class="flex font-bold gap-14">
            <template v-for="(link, index) in navLinks" :key="index">
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
            </template>
          </div>

          <button
            @click="openSearchMenu()"
            class="bg-grey-100 rounded-full flex items-center justify-center"
          >
            <p class="text-base px-4 py-3 text-grey-500">
              Places to go, Things to do, hotels...
            </p>
            <div class="m-1 p-2 rounded-full bg-black text-white">
              <AwIconSearch class="text-xl" />
            </div>
          </button>
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
const route = useRoute();
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

watch(
  () => route.fullPath,
  () => {
    activeSlideMenu.value = false;
    slideMenu.value = false;
  }
);

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

function openSearchMenu() {
  if (activeSlideMenu.value != "Search") {
    slideMenu.value = true;
    activeSlideMenu.value = "Search";
  } else {
    slideMenu.value = false;
    activeSlideMenu.value = null;
  }
}
</script>
<style>
.mega-menu {
  height: 100vh;
  transform-origin: top;
  transition: transform 0.8s ease-in-out;
  overflow: hidden;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
}

.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
