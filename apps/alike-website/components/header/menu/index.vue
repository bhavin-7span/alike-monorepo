<template>
    <transition name="slide-fade">
      <div v-if="slideMenu" @click="onClickOutside" class="mega-menu absolute top-20 inset-x-0 bg-white">
        <div class="bg-white p-10" @click.stop >
          <div class="max-w-5xl mx-auto">
            <HeaderMenuExplore v-if="activeMenu == 'Explore'"/>
            <HeaderMenuTrips v-if="activeMenu == 'Trips'"/>
          </div>
        </div>
      </div>
    </transition>
</template>
<script setup>
const props = defineProps({
  slideMenu: {
    default:false,
    type:Boolean
  },
  activeMenu: String
})

const emit = defineEmits(["closeMenu"]);

const onClickOutside = () => {
  emit("closeMenu");
}
</script>