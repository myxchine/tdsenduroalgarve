export const map = [
  {
    name: "Home Page",
    description: "Landing page, first impression.",
    components: [
      {
        name: "Hero",
      },
      {
        name: "Tours and rentals summary",
      },
      {
        name: "CTA for viewing packages",
      },
    ],
    children: [
      {
        name: "Tours Page",
        description: "Breakdown of tour packages",
        components: [
          {
            name: "Packages available for tour",
          },
          {
            name: "What included in each package",
          },
          {
            name: "Button to see more info about the bike (redirect to bikes page)",
          },
          {
            name: "Button to see more info about the tour (redirect to about-tour page)",
          },
          {
            name: "Reserve button",
          },
        ],
      },
      {
        name: "Rentals Page",
        description: "Breakdown of rentals and packages",
        components: [
          {
            name: "List of rentals",
          },
          {
            name: "Packages",
          },

          {
            name: "Book button",
          },
        ],
      },
      {
        name: "Bikes page",
        description: "List of available bikes for rentals/tours",
        components: [
          {
            name: "Bikes",
          },
          {
            name: "Button to View more Info",
          },
          {
            name: "Button to View Available packages",
          },
        ],
      },
      {
        name: "About Tour page",
        description:
          "Breakdown of what is included in the tour and what to expect to explain the product better",
        components: [
          {
            name: "Summary of what is included in the tour",
          },
          {
            name: "List of included items",
          },
          {
            name: "Button to View Available packages",
          },
        ],
      },
      {
        name: "Contact Page",
        description: "Contact regarding specific questions or problems",
        components: [
          {
            name: "Form",
          },
        ],
      },
      {
        name: "Reservation Page",
        description: "Page to reserve a tour or rental",
        components: [
          {
            name: "Form",
          },
        ],
      },
      {
        name: "About Page",
        description: "Information about the company",
        components: [
          {
            name: "Company information",
          },
          {
            name: "Story",
          },
        ],
      },
    ],
  },
];
