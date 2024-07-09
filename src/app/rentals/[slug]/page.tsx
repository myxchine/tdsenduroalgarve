import { rentals } from "@/server/db/rentals";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export async function generateStaticParams() {
  return rentals.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const bike = rentals.find((bike) => bike.slug === params.slug);

  if (!bike) {
    notFound();
  }

  return {
    title: `Rent a ${bike.name}`,
    description: `Hire a ${bike.name} for your next adventure in Portugal, Algarve! Whether you are in Vilamoura, Faro, Loulé, or anyone else in the Algarve region, we have the perfect solution for you.`,
    openGraph: {
      images: [
        {
          url: bike.openGraphImage ?? bike.image,
          alt: bike.slug,
        },
      ],
    },
  };
}

export default async function Bike({ params }: { params: { slug: string } }) {
  const bike = rentals.find((bike) => bike.slug === params.slug);

  if (!bike) {
    notFound();
  }
  return (
    <section className="flex flex-col items-center gap-8 pt-32 p-6 max-w-6xl mx-auto  md:flex-row mb-12 text-left xl:px-0">
      <h1 className="text-4xl font-tds uppercase md:hidden w-full">
        <span className="text-tdsRed">Rent</span> a {bike.name}
      </h1>
      <Image
        src={bike.image}
        alt={bike.slug}
        width={500}
        height={500}
        quality={100}
        priority={true}
        className="w-full object-cover "
      />

      <div className="flex text-left flex-col gap-8 w-full md:max-w-md md:text-right">
        <h1 className="text-4xl font-tds uppercase hidden md:block w-full">
          <span className="text-tdsRed">Rent</span> a {bike.name}
        </h1>

        <div className="flex flex-col gap-2 w-full">
          <Link href={`/reserve/rent?bike=${bike.name}`} className="w-full">
            <button className="flex flex-col w-full p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center text-left">
              Reserve {bike.name} Now
            </button>
          </Link>
        </div>
        <p>{bike.description}</p>

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
