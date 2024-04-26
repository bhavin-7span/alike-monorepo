<template>
  <AwSection
    name="curated-packages"
    class="bg-primary-50 py-16 md:py-28"
    _class="flex items-center justify-center flex-col"
  >
    <AwHeading2 class="text-center max-w-sm md:max-w-xl c">
      Curated holiday packages for all
    </AwHeading2>
    <div class="mt-6 md:mt-14">
      <TripStoryCard />
    </div>

    <div class="mt-16">
      <NuxtLink
        to="/trip-stories"
        class="py-4 px-6 rounded-full border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-primary-50 hover:text-white flex gap-1 items-center"
      >
        <span>All Trip Stories</span>
        <AwIconArrowRight />
      </NuxtLink>
    </div>
  </AwSection>
</template>
<script setup></script>
