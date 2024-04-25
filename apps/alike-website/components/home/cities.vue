<template>
  <Section
    name="cities"
    class="overflow-hidden"
    _class="flex items-center justify-center flex-col"
  >
    <AWHeading2 class="text-center max-w-sm md:max-w-3xl">
      Discover lively cities around the world.
    </AWHeading2>
    <div class="mt-6 md:mt-14">
      <div class="flex items-center w-full gap-6 transition-all duration-400">
        <div
          v-for="(city, i) in cities"
          :key="i"
          class="city-card overflow-hidden group relative flex items-center justify-center"
          @click="openCityPage(city?.name)"
        >
          <div
            class="w-[267px] h-[356px] group-hover:brightness-50"
            style="
              background-image: url('https://source.unsplash.com/featured/300x201');
              background-size: cover;
            "
          ></div>
          <div
            class="hidden group-hover:flex absolute text items-center justify-center h-full w-full text-white text-4xl font-bold"
          >
            {{ city.name }}
          </div>
        </div>
      </div>
    </div>
    <button
      class="border-primary-500 border px-6 py-4 text-primary-500 rounded-full md:mt-16"
    >
      All Cities
    </button>
  </Section>
</template>
<script setup>
// https://source.unsplash.com/featured/267x356
// 40px 148px radius
const cities = [
  { name: "Dubai" },
  { name: "Abu Dhabi" },
  { name: "Sharjah" },
  { name: "Al Ain" },
  { name: "Ajman" },
  { name: "Ras Al Khaimah" },
  { name: "Fujairah" },
  { name: "Umm Al Quwain" },
  { name: "Dibba" },
  { name: "Jebel Ali" },
  { name: "Hatta" },
  { name: "Al Lisaili" },
  { name: "Al Aweer" },
  { name: "Lehbab" },
  { name: "Al Meryal" },
];

const openCityPage = (name) => {
  console.log("Opening City Page : ", name);
};
</script>
<style scoped>
/* Set radius for even iterations */
.city-card:nth-of-type(even) {
  border-radius: 40px;
}

/* Set radius for odd iterations */
.city-card:nth-of-type(odd) {
  border-radius: 148px;
}
</style>
