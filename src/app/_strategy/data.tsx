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
        description: "Breakdown of tours and packages",
        components: [
          {
            name: "List of tours",
          },
          {
            name: "Packages",
          },
          {
            name: "Longer form information about guided tours",
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
