export const data = {
  tours: {
    slug: "tours",
    categories: [
      {
        id: 1,
        name: "Enduro",
        slug: "off-road-enduro-bike-rental",
        image: "/images/enduro.jpg",
        title: "KTM Hard enduro guided bike tours ALgaRVE",
        bikes: [
          {
            id: 1,
            category: "Enduro",
            name: "ktm exc 300 tpi",
            title: "KTM Hard enduro bike tours ALgaRVE",
            image: "/images/bikes/enduro.png",
            description:
              "With over 7 of these bad boys in our arsenal and thousands of combined hours in the Algarvian mountains, they have never let us down.",
            features: [
              "High-performance",
              "Lightweight",
              "Versatile",
              "Durable",
              "Reliable",
              "Comfortable",
            ],
            packageName: "rental + guided tour",
            packageInfo: "No bike license required off-road.",
            packageMaxRiders: 5,
            packages: [
              {
                id: 1,
                price: 330,
                days: 1,
                riders: 1,
                included: [
                  "Bike Rental",
                  "Full Day Tour Guide",
                  "All protective and riding equipment",
                  "Lunch",
                  "Water and snacks",
                  "Fuel",
                ],
              },
              {
                id: 2,
                price: 290,
                days: 1,
                riders: 2,
                included: [
                  "Bike Rental",
                  "Full Day Tour Guide",
                  "All protective and riding equipment",
                  "Lunch",
                  "Water and snacks",
                  "Fuel",
                ],
              },
              {
                id: 3,
                price: 270,
                days: 1,
                riders: 3,
                included: [
                  "Bike Rental",
                  "Full Day Tour Guide",
                  "All protective and riding equipment",
                  "Lunch",
                  "Water and snacks",
                  "Fuel",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  rentals: {
    slug: "rentals",
    categories: [
      {
        id: 2,
        name: "Adventure",
        slug: "adventure-bike-rental",
        image: "/images/enduro.jpg",
        title: "KTM Hard enduro bike tours ALgaRVE",
        bikes: [
          {
            id: 2,
            category: "Adventure",
            name: "ktm adv 790 2019",
            image: "/images/bikes/adventure.jpg",
            description:
              "Being the most well-rounded machine you'll ever come across, feel free to cruise on the highway or explore the beautiful dirt roads of Algarve.",
            features: [
              "High-performance",
              "Lightweight",
              "Versatile",
              "Durable",
              "Reliable",
              "Comfortable",
            ],
            packageName: "rental + tour",
            packageInfo: "No bike license required off-road.",
            packageMaxRiders: 5,
            packages: [
              { id: 1, price: 300, days: 1, riders: 1 },
              { id: 2, price: 280, days: 1, riders: 2 },
              { id: 3, price: 270, days: 1, riders: 3 },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Street",
        slug: "street-bike-rental",
        image: "/images/enduro.jpg",
        title: "KTM Hard enduro bike tours ALgaRVE",
        bikes: [
          {
            id: 3,
            category: "Street",
            name: "ktm duke 125 2022",
            image: "/images/bikes/duke.jpeg",
            description:
              "The KTM Duke is known for being the apex predator in its domain, boasting the most powerful 125 engine on the market.",
            features: [
              "High-performance",
              "Lightweight",
              "Versatile",
              "Durable",
              "Reliable",
              "Comfortable",
            ],
            packageName: "rental + tour",
            packageInfo: "No bike license required off-road.",
            packageMaxRiders: 5,
            packages: [
              { id: 1, price: 300, days: 1, riders: 1 },
              { id: 2, price: 280, days: 1, riders: 2 },
              { id: 3, price: 270, days: 1, riders: 3 },
            ],
          },
        ],
      },
    ],
  },
};

export const bikes = [
  {
    id: 1,
    category: "Enduro",
    name: "ktm exc 300 tpi",
    slug: "ktm-exc-300",
    title: "KTM Hard enduro bike tours ALgaRVE",
    image: "/images/bikes/enduro.png",
    descriptionLong:
      "The KTM 300 EXC is one of the most recognized names at the sharp end of hard enduro. With a bulletproof, fuel-injected 2-stroke engine churning out masses of low-down torque and top-end fury, it's the ideal companion when tackling challenging terrain.",
    description:
      "With over 7 of these bad boys in our arsenal and thousands of combined hours in the Algarvian mountains, they have never let us down.",
    features: [
      "High-performance",
      "Lightweight",
      "Versatile",
      "Durable",
      "Reliable",
    ],
    packageName: "rental + guided tour",
    packageInfo: "No bike license required off-road.",
    packageMaxRiders: 5,
    packages: [
      { id: 1, price: 330, days: 1, riders: 1 },
      { id: 2, price: 290, days: 1, riders: 2 },
      { id: 3, price: 270, days: 1, riders: 3 },
    ],
  },
  {
    id: 2,
    category: "Adventure",
    name: "ktm adv 790 2019",
    slug: "ktm-adv-790",
    image: "/images/bikes/adventure.jpg",
    description:
      "Being the most well-rounded machine you'll ever come across, feel free to cruise on the highway or explore the beautiful dirt roads of Algarve.",
    features: [
      "High-performance",
      "Lightweight",
      "Versatile",
      "Durable",
      "Reliable",
      "Comfortable",
    ],
    packageName: "rental + tour",
    packageInfo: "No bike license required off-road.",
    packageMaxRiders: 5,
    packages: [
      { id: 1, price: 300, days: 1, riders: 1 },
      { id: 2, price: 280, days: 1, riders: 2 },
      { id: 3, price: 270, days: 1, riders: 3 },
    ],
  },
  {
    id: 3,
    category: "Street",
    name: "ktm duke 125 2022",
    slug: "ktm-duke-125",
    image: "/images/bikes/duke.jpeg",
    description:
      "The KTM Duke is known for being the apex predator in its domain, boasting the most powerful 125 engine on the market.",
    features: [
      "High-performance",
      "Lightweight",
      "Versatile",
      "Durable",
      "Reliable",
      "Comfortable",
    ],
    packageName: "rental + tour",
    packageInfo: "No bike license required off-road.",
    packageMaxRiders: 5,
    packages: [
      { id: 1, price: 300, days: 1, riders: 1 },
      { id: 2, price: 280, days: 1, riders: 2 },
      { id: 3, price: 270, days: 1, riders: 3 },
    ],
  },
];
