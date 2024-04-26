<template>
  <AwSection
    name="plan-trip"
    class="overflow-hidden py-16 md:py-28"
    _class="flex items-center justify-center flex-col"
  >
    <AwHeading2 class="text-center"> Plan your trip with Alike </AwHeading2>
    <div class="mt-6 md:mt-14">Trip Plan Advice 4 Card</div>
    <NuxtLink
      to="/trip-stories"
      class="py-4 px-6 rounded-full border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-primary-50 hover:text-white flex gap-1 items-center"
    >
      <span>Plan a Trip</span>
      <AwIconArrowRight />
    </NuxtLink>
  </AwSection>
</template>
