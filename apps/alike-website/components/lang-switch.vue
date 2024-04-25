<template>
  <div class="relative">
    <button
      @click="isDropdown = !isDropdown"
      class="rounded-full px-1 md:px-5 gap-1 w-full items-center flex text-start h-10 !border-0 md:!border capitalize hover:border-primary-500 hover:text-primary-500 font-bold"
      :class="{
        ' border-black text-black': !isScrolled,
        ' border-black text-black': isScrolled,
        'active-dropdown': isDropdown,
      }"
    >
      <!-- <Icon name="language" class="text-lg md:hidden" /> -->
      {{ language }}
    </button>

    <div v-if="isDropdown">
      <div
        v-if="isDropdown"
        class="lang-dropdown w-[300px] py-6 hidden md:block absolute top-14 text-black bg-white rounded -right-28 space-y-1 box-shadow"
      >
        <button
          v-for="item in locales"
          :key="item"
          :value="item.code"
          :class="language == item.code ? ' text-black bg-grey-100' : ''"
          @click="language = item.code"
          class="py-4 px-10 hover:bg-grey-100 text-lg font-bold w-full transition-all flex items-center justify-between"
        >
          <span>{{ item.name }}</span>
          <!-- <IconsChecked
            v-if="language == item.code"
            class="ms-5 font-bold"
          ></IconsChecked> -->
        </button>
      </div>
      <div
        class="md:hidden fixed inset-0 z-40 w-full bg-black !text-black bg-opacity-70"
      >
        <div
          class="absolute bottom-0 w-full rounded-tl-2xl rounded-tr-2xl bg-black transition-all"
        >
          <div
            class="flex items-center justify-between border-b border-grey-300 p-4 text-grey-900 font-bold text-2xl"
          >
            <h5 class="font-bold">{{ language }}</h5>
            <button
              @click="hideDropDown()"
              class="bg-gray-200 p-1 rounded-full"
            >
              X
              <!-- <Icon name="close" /> -->
            </button>
          </div>
          <div class="py-6">
            <button
              v-for="item in locales"
              :key="item"
              :value="item.code"
              :class="language == item.code ? ' text-black bg-grey-100' : ''"
              @click="language = item.code"
              class="py-4 md:py-2.5 px-10 hover:bg-grey-100 w-full transition-all font-bold text-lg flex items-center justify-between"
            >
              <span>{{ item.name }}</span>
              <!-- <IconsChecked
                v-if="language == item.code"
                class="ms-5 font-bold"
              ></IconsChecked> -->
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const env = useRuntimeConfig();
//--------------------------------------------------props
defineProps({
  isScrolled: Boolean,
});

//--------------------------------------------------stats
const isDropdown = ref(false);
const { locales, locale, setLocale } = useI18n();

//--------------------------------------------------life-cycle
const language = computed({
  get: () => locale.value,
  set: (value) => {
    document.cookie = `aw_locale=` + value + `;path=/;`;
    isDropdown.value = false;
    location.reload();
  },
});

//---------------------------------------------------methods
const hideDropDown = (isShow) => {
  isDropdown.value = false;
};
</script>
<style lang="scss">
.lang-dropdown {
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  &::after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    left: auto;
    right: 135px;
    top: -5px;

    /* Natural/black */

    background: #ffffff;
    transform: rotate(45deg);

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;
  }
}
.active-dropdown {
  @apply border text-primary-500 border-primary-500;
}
</style>
