import { Bike } from "@/app/types";

export const all: Bike[] = [
  {
    name: "KTM 300 EXC",
    excerpt:
      "The KTM 300 EXC maintains legendary status as the undisputed King of enduro. Not only does it have the most recognized title at the sharp end of hard enduro, it's still unmatched when it comes to 2-stroke ingenuity, fury, and downright fun. With a bulletproof, fuel-injected 2-stroke engine churning out masses of low-down torque and top-end fury, it's the ideal companion when tackling challenging terrain.",
    description: `
 At TDS Enduro Algarve, the KTM EXC 300 isn’t just a motorbike—it’s the heart and soul of our enduro adventures. There’s a thrill that only this machine can deliver, a raw, visceral connection to the trail beneath your wheels. Lightweight yet impossibly powerful, the KTM EXC 300’s two-stroke engine roars to life with a pulse-quickening intensity, ready to conquer rocky ascents, steep descents, and everything in between. Its cutting-edge suspension absorbs the terrain with a grace that feels almost supernatural, turning even the gnarliest trails into a thrilling dance. This bike isn’t just a favorite of ours; it’s the weapon of choice for top riders like Manuel Lettenbichler, who rely on its precision and durability to dominate the world’s toughest Enduro races. Whether you’re pushing your limits or flowing through the Algarve’s scenic trails, the KTM EXC 300 delivers an experience that’s equal parts power, finesse, and freedom. At TDS, we trust this legendary machine because it embodies everything we love about enduro riding: resilience, performance, and the undeniable rush of adventure.`,
    image: "ktm-300-exc.png",
    brand: "KTM",
    price: 11435,
    engine: {
      stroke: 2,
      displacement: 293.15,
      cylinders: 1,
      powerHP: 49,
      torqueNM: 43.8,
    },
    specs: {
      weight: 104.6,
      fuelCapacity: 9,
      seatHeight: 963,
      gears: 6,
      startType: "Electric",
    },
    suspension: {
      front: "WP XACT-USD, Ø 48 mm",
      rear: "WP XPLOR shock absorber with PDS",
    },
    frame: "Aluminum-reinforced polyamide",
    brakes: {
      front: "260 mm disc brake",
      rear: "220 mm disc brake",
      clutch: "DDS multi-disc clutch in oil bath, with Brembo hydraulic drive",
    },
    url: "https://ktm.com/",
    slug: "ktm-300-exc",
  },
];
