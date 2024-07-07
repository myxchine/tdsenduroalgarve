import { bikes } from "@/server/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  return bikes.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const bike = bikes.find((bike) => bike.slug === params.slug);

  if (!bike) {
    notFound();
  }

  return {
    title: bike.name,
    description: bike.descriptionLong ?? bike.description,
    openGraph: {
      images: [
        {
          url: bike.openGraphImage ?? bike.image,
          alt: bike.name,
        },
      ],
    },
  };
}

export default async function Bike({ params }: { params: { slug: string } }) {
  const bike = bikes.find((bike) => bike.slug === params.slug);

  if (!bike) {
    notFound();
  }
  return (
    <section className="flex flex-col items-center gap-8 pt-32 p-6 max-w-6xl mx-auto  md:flex-row mb-12 text-left xl:px-0">
      <h1 className="text-4xl font-tds uppercase md:hidden w-full">
        {bike.name}
      </h1>
      <Image
        src={bike.image}
        alt={bike.name}
        width={400}
        height={400}
        priority={true}
        className="w-full object-cover "
      />

      <div className="flex text-left flex-col gap-8 w-full md:max-w-md md:text-right">
        <h1 className="text-4xl font-tds uppercase hidden md:block w-full">
          {bike.name}
        </h1>

        <div className="flex flex-col gap-2 w-full">
          <Link href={`/tours/off-road-enduro-bike-rental`} className="w-full">
            <button className="flex flex-col w-full p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center text-left">
              View Packages
            </button>
          </Link>

          <Link href={`/about-tour`} className="w-full">
            <button className="flex flex-col w-full p-2 px-4 rounded bg-black text-white font-tds hover:bg-black/80 text-center justify-center items-center ">
              View Tour
            </button>
          </Link>
        </div>
        <p>{bike.descriptionLong ?? bike.description}</p>

        <div className="flex flex-col gap-4 w-full">
          <p className="text-2xl font-tds uppercase">Features</p>
          <ul className="flex flex-wrap gap-2 md:justify-end md:items-end">
            {bike.features.map((feature) => (
              <li key={feature} className="bg-black/5 p-2 px-4 rounded">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
