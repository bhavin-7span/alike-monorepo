<template>
  <div class="relative">
    <button
      @click="isDropdown = !isDropdown"
      class="nav-btn"
      :class="{
        ' border-black text-black': !isScrolled,
        ' border-black text-black': isScrolled,
        'active-dropdown': isDropdown,
      }"
    >
      {{ currency.symbol }} {{ currency.abbreviation }}
    </button>

    <div v-if="isDropdown">
      <div
        v-if="isDropdown"
        class="lang-dropdown w-[300px] py-6 hidden md:block absolute top-14 text-black bg-white rounded -right-28 space-y-1 box-shadow"
      >
        <button
          v-for="item in currencies"
          :key="item"
          :value="item.abbreviation"
          :class="
            currency == item.abbreviation ? ' text-black bg-grey-100' : ''
          "
          @click="currency = item.abbreviation"
          class="py-4 px-10 hover:bg-grey-100 text-lg font-bold w-full transition-all flex items-center justify-between"
        >
          <span>{{ item.name }}</span>
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
            <h5 class="font-bold">{{ currency }}</h5>
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
              v-for="item in currencies"
              :key="item"
              :value="item.abbreviation"
              :class="
                currency == item.abbreviation ? ' text-black bg-grey-100' : ''
              "
              @click="currency = item.abbreviation"
              class="py-4 md:py-2.5 px-10 hover:bg-grey-100 w-full transition-all font-bold text-lg flex items-center justify-between"
            >
              <span>{{ item.name }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCurrencyStore } from "@/store/currency";
const currencyStore = useCurrencyStore();

defineProps({
  isScrolled: Boolean,
});

const isDropdown = ref(false);
const currencies = currencyStore.getAllCurrencies;
const currentCurrency = computed(() => currencyStore.getCurrentCurrency);

const currency = computed({
  get: () => currentCurrency.value,
  set: (value) => {
    currencyStore.setCurrentCurrency(value);
    document.cookie = `aw_currency=` + value + `;path=/;`;
    isDropdown.value = false;
  },
});

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
