export const cityTypes = [
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

export const popularDestinations = [
    {
      thumbnail: 'dropdowns/destinations/dubai.png',
      name: 'Dubai',
      link: '/cities/dubai',
    },
    {
      thumbnail: 'dropdowns/destinations/new-delhi.png',
      name: 'New Delhi',
      link: '/cities/new-delhi',
    },
    {
      thumbnail: 'dropdowns/destinations/jaipur.png',
      name: 'Jaipur',
      link: '/cities/jaipur',
    },
    {
      thumbnail: 'dropdowns/destinations/singapore.png',
      name: 'Singapore',
      link: '/cities/singapore',
    },
    {
      thumbnail: 'dropdowns/destinations/doha.png',
      name: 'Doha',
      link: '/cities/doha',
    },
    {
      thumbnail: 'dropdowns/destinations/hong-kong.png',
      name: 'Hong Kong',
      link: '/cities/hong-kong',
    },
    {
      thumbnail: 'dropdowns/destinations/abu-dhabi.png',
      name: 'Abu Dhabi',
      link: '/cities/abu-dhabi',
    },
    {
      thumbnail: 'dropdowns/destinations/goa.png',
      name: 'Goa',
      link: '/cities/goa',
    },
    {
      thumbnail: 'dropdowns/destinations/mumbai.png',
      name: 'Mumbai',
      link: '/cities/mumbai',
    },
    {
      thumbnail: 'dropdowns/destinations/paris.png',
      name: 'Paris',
      link: '/cities/paris',
    },
    {
      thumbnail: 'dropdowns/destinations/london.png',
      name: 'London',
      link: '/cities/london',
    },
    {
      thumbnail: 'dropdowns/destinations/new-york.png',
      name: 'New York',
      link: '/cities/new-york',
    },
  ]

export const topCities = {
    firstMonths: [
      {
        month: 'January',
        lists: [
          { name: 'Dubai', link: '/cities/dubai' },
          { name: 'Abu Dhabi', link: '/cities/abu-dhabi' },
          { name: 'Bangkok', link: '/cities/bangkok' },
        ],
      },
      {
        month: 'February',
        lists: [
          { name: 'Cairo', link: '/cities/cairo' },
          { name: 'Singapore', link: '/cities/singapore' },
          { name: 'Muscat', link: '/cities/muscat' },
        ],
      },
      {
        month: 'March',
        lists: [
          { name: 'Madrid', link: '/cities/madrid' },
          {
            name: 'Palma de Mallorca',
            link: '/cities/palma-de-mallorca',
          },
          { name: 'Amman', link: '/cities/amman' },
        ],
      },
      {
        month: 'April',
        lists: [
          { name: 'Bali', link: '/cities/bali' },
          { name: 'Barcelona', link: '/cities/barcelona' },
          {
            name: 'Sharm el Sheikh',
            link: '/cities/sharm-el-sheikh',
          },
        ],
      },
      {
        month: 'May',
        lists: [
          { name: 'Paris', link: '/cities/paris' },
          { name: 'Istanbul', link: '/cities/istanbul' },
          { name: 'Madrid', link: '/cities/madrid' },
        ],
      },
      {
        month: 'June',
        lists: [
          { name: 'London', link: '/cities/london' },
          { name: 'Antalya', link: '/cities/antalya' },
          {
            name: 'Palma de Mallorca',
            link: '/cities/palma-de-mallorca',
          },
        ],
      },
    ],
    lastMonths: [
      {
        month: 'July',
        lists: [
          { name: 'Bali', link: '/cities/bali' },
          { name: 'London', link: '/cities/london' },
          { name: 'Madrid', link: '/cities/madrid' },
        ],
      },
      {
        month: 'August',
        lists: [
          { name: 'Antalya', link: '/cities/antalya' },
          { name: 'New Delhi', link: '/cities/new-delhi' },
          { name: 'Agra', link: '/cities/agra' },
        ],
      },
      {
        month: 'September',
        lists: [
          { name: 'Jaipur', link: '/cities/jaipur' },
          { name: 'Mumbai', link: '/cities/mumbai' },
          { name: 'Goa', link: '/cities/goa' },
        ],
      },
      {
        month: 'October',
        lists: [
          { name: 'Udaipur', link: '/cities/udaipur' },
          { name: 'Phuket', link: '/cities/phuket' },
          { name: 'Muscat', link: '/cities/muscat' },
        ],
      },
      {
        month: 'November',
        lists: [
          { name: 'Cairo', link: '/cities/cairo' },
          { name: 'Qatar', link: '/cities/qatar' },
          { name: 'Dubai', link: '/cities/dubai' },
        ],
      },
      {
        month: 'December',
        lists: [
          { name: 'Bangkok', link: '/cities/bangkok' },
          { name: 'Bali', link: '/cities/bali' },
          { name: 'Jaipur', link: '/cities/jaipur' },
        ],
      },
    ],
  }

export const middleEastAfrica = [
    {
      name: 'UAE',
      lists: [
        {
          name: 'Dubai',
          link: '/cities/dubai',
        },
        {
          name: 'Abu Dhabi',
          link: '/cities/abu-dhabi',
        },
        {
          name: 'Sharjah',
          link: '/cities/sharjah',
        },
        {
          name: 'Ras Al Khaimah',
          link: '/cities/ras-al-khaimah',
        },
      ],
    },
    {
      name: 'Qatar',
      lists: [
        {
          name: 'Doha',
          link: '/cities/doha',
        },
      ],
    },
    {
      name: 'Egypt',
      lists: [
        {
          name: 'Cairo',
          link: '/cities/cairo',
        },
        {
          name: 'Sharm el Sheikh',
          link: '/cities/sharm-el-sheikh',
        },
      ],
    },
    {
      name: 'Oman',
      lists: [
        {
          name: 'Muscat',
          link: '/cities/muscat',
        },
      ],
    },
    {
      name: 'Turkey',
      lists: [
        {
          name: 'Antalya',
          link: '/cities/antalya',
        },
        {
          name: 'Istanbul',
          link: '/cities/istanbul',
        },
      ],
    },
    {
      name: 'Jordan',
      lists: [
        {
          name: 'Amman',
          link: '/cities/amman',
        },
      ],
    },
    {
      name: 'Saudi Arabia',
      lists: [
        {
          name: 'Riyadh',
          link: '/cities/riyadh',
        },
        {
          name: 'Jeddah',
          link: '/cities/jeddah',
        },
      ],
    },
  ]

export const asia = [
    {
      name: 'India',
      lists: [
        {
          name: 'New Delhi',
          link: '/cities/new-delhi',
        },
        {
          name: 'Agra',
          link: '/cities/agra',
        },
        {
          name: 'Jaipur',
          link: '/cities/jaipur',
        },
        {
          name: 'Mumbai',
          link: '/cities/mumbai',
        },
        {
          name: 'Udaipur',
          link: '/cities/udaipur',
        },
        {
          name: 'Goa',
          link: '/cities/goa',
        },
      ],
    },
    {
      name: 'Indonesia',
      lists: [
        {
          name: 'Bali',
          link: '/cities/bali',
        },
      ],
    },
    {
      name: 'Thailand',
      lists: [
        {
          name: 'Bangkok',
          link: '/cities/bangkok',
        },
        {
          name: 'Phuket',
          link: '/cities/phuket',
        },
      ],
    },
    {
      name: 'Singapore',
      lists: [
        {
          name: 'Singapore',
          link: '/cities/singapore',
        },
      ],
    },
  ]

export const europe = [
    {
      name: 'Spain',
      lists: [
        {
          name: 'Madrid',
          link: '/cities/madrid',
        },
        {
          name: 'Palma de Mallorca',
          link: '/cities/palma-de-mallorca',
        },
        {
          name: 'Barcelona',
          link: '/cities/barcelona',
        },
      ],
    },
    {
      name: 'France',
      lists: [
        {
          name: 'Paris',
          link: '/cities/paris',
        },
      ],
    },
    {
      name: 'UK',
      lists: [
        {
          name: 'London',
          link: '/cities/london',
        },
      ],
    },
  ]