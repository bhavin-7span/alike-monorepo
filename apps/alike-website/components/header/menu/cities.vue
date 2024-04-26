<template>
    <div class="flex">
        <div class="w-72 pe-10">
          <h3 class="text-grey-400 text-sm uppercase font-semibold">Cities</h3>
          <div
            v-for="(type,index) in cityTypes"
            :key="type.id"
            @mouseover="showExploreCategory(type.id)"
            class="mt-4 p-4 rounded-xs relative group cursor-pointer hover:bg-primary-50"
            :class="activeHover == type.id ? 'is-hover' : ''"
          >
            <div class="space-y-1 ">
              <h4 class="text-grey-900 font-sedmibold text-lg group-hover:text-primary-500">
                {{ type.name }}
              </h4>
              <p v-if="type.content" class="text-grey-500 text-sm">
                {{ type.content }}
              </p>
              <ul
                v-else
                class="text-grey-500 text-xs flex items-center gap-3 "
              >
                <li
                  v-for="(link, index) in type?.links"
                  :key="index"
                >
                  <button @click="routerChange(link.path)" class="text-sm hover:text-grey-900">
                    {{ link.name }}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex-1 pt-10">
          <HeaderMenuPopularDestination :destinations="popularDestinations"/>
        </div>
    </div>
</template>
<script setup>
const cityTypes = ref(
    [
        {
          id: 1,
          name: 'Popular destinations',
          content: 'See where other people are travelling more often',
        },
        {
          id: 2,
          name: 'Top cities by month',
          content: 'Popular cities you want to visit for every month',
        },
        {
          id: 3,
          name: 'Middle East & Africa',
          links: [
            {
              name: 'Dubai',
              path: '/cities/dubai',
            },
            {
              name: 'Abu Dhabi',
              path: '/cities/abu-dhabi',
            },
          ],
        },
        {
          id: 4,
          name: 'Asia',
          links: [
            {
              name: 'Bangkok',
              path: '/cities/bangkok',
            },
            {
              name: 'Bali',
              path: '/cities/bali',
            },
          ],
        },
        {
          id: 5,
          name: 'Europe',
          links: [
            {
              name: 'London',
              path: '/cities/london',
            },
            {
              name: 'Paris',
              path: '/cities/paris',
            },
          ],
        },
      ]
)

const popularDestinations = ref(
  [
    {
      img: 'dropdowns/destinations/dubai.png',
      title: 'Dubai',
      link: '/cities/dubai',
    },
    {
      img: 'dropdowns/destinations/new-delhi.png',
      title: 'New Delhi',
      link: '/cities/new-delhi',
    },
    {
      img: 'dropdowns/destinations/jaipur.png',
      title: 'Jaipur',
      link: '/cities/jaipur',
    },
    {
      img: 'dropdowns/destinations/singapore.png',
      title: 'Singapore',
      link: '/cities/singapore',
    },
    {
      img: 'dropdowns/destinations/doha.png',
      title: 'Doha',
      link: '/cities/doha',
    },
    {
      img: 'dropdowns/destinations/hong-kong.png',
      title: 'Hong Kong',
      link: '/cities/hong-kong',
    },
    {
      img: 'dropdowns/destinations/abu-dhabi.png',
      title: 'Abu Dhabi',
      link: '/cities/abu-dhabi',
    },
    {
      img: 'dropdowns/destinations/goa.png',
      title: 'Goa',
      link: '/cities/goa',
    },
    {
      img: 'dropdowns/destinations/mumbai.png',
      title: 'Mumbai',
      link: '/cities/mumbai',
    },
    {
      img: 'dropdowns/destinations/paris.png',
      title: 'Paris',
      link: '/cities/paris',
    },
    {
      img: 'dropdowns/destinations/london.png',
      title: 'London',
      link: '/cities/london',
    },
    {
      img: 'dropdowns/destinations/new-york.png',
      title: 'New York',
      link: '/cities/new-york',
    },
  ]
)
</script>