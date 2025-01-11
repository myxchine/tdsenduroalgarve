export interface Post {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
}

export interface Bike {
  name: string;
  excerpt: string;
  description: string; // HTML content or rich text
  image: string; // Relative or absolute URL
  brand: string;
  price: number; // Price in USD or relevant currency

  engine: {
    stroke: number; // Number of strokes (2 or 4)
    displacement: number; // Displacement in cc
    cylinders: number; // Number of cylinders
    powerHP: number | null; // Horsepower
    torqueNM: number | null; // Torque in Newton meters
  };

  specs: {
    weight: number; // Weight in kilograms
    fuelCapacity: number; // Fuel capacity in liters
    seatHeight: number; // Seat height in millimeters
    gears: number; // Number of gears
    startType: string; // Type of start mechanism (e.g., Electric, Kickstart)
  };

  suspension: {
    front: string; // Description of the front suspension
    rear: string; // Description of the rear suspension
  };

  frame: string; // Frame material or type

  brakes: {
    front: string; // Description of the front brake
    rear: string; // Description of the rear brake
    clutch: string; // Clutch type or details
  };

  url: string; // Manufacturer or product URL
  slug: string; // URL-friendly identifier
}
