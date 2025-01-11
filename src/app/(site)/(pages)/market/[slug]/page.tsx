import { market as bikes } from "@/_market/bikes";
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
    title: `Buy a ${bike.name} in Portugal`,
    description: bike.description,
    openGraph: {
      images: [
        {
          url: `/images/market/${bike.slug}/1.jpg`,
          alt: bike.slug,
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
    <section className="flex flex-col items-start gap-8 pt-8 p-6 max-w-6xl mx-auto  md:flex-row mb-12 text-left xl:px-0 md:py-24">
      <BikeGallery slug={bike.slug} numberOfImages={bike.images} />

      <div className="flex text-left flex-col gap-8 w-full md:max-w-md md:text-left md:min-w-[450px]">
        <h1 className="text-3xl font-tds uppercase md:text-5xl">
          {bike.name} {bike.year} for Sale
        </h1>

        {bike.location}

        <Link
          href={`/reserve?message=I'm interested in buying a ${bike.name} in Portugal`}
          className="hover:underline text-tdsRed "
        >
          Quick Contact {`->`}
        </Link>

        <p className="text-lg md:text-xl">{bike.description}</p>

        <ul className="text-xl font-bold">
          <li>
            Model - {bike.year} {bike.name}
          </li>
          {bike.firstOwner && <li>First Owner</li>}

          <li>Hours - {bike.hours} hours</li>
          <li>Mileage - {bike.km} km</li>
          <li>Price - €{bike.price}</li>
        </ul>

        <Link
          href={`/reserve?message=I'm interested in buying a ${bike.name} in Portugal`}
          className="hover:bg-tdsRed/80 bg-tdsRed text-white py-4 px-6 rounded text-center"
        >
          Contact us on this form and we will get right back to you {`->`}
        </Link>

        <Link
          href={`/market`}
          className="hover:bg-black/80 bg-black text-white py-4 px-6 rounded text-center"
        >
          Other Listings {`->`}
        </Link>
        <p className="my-4  text-tdsRed text-balance">
          You can also contact +351 964 691 830 for more info about purchasing a{" "}
          {bike.name} or email us at michael.dozzantoz@gmail.com
        </p>
      </div>
    </section>
  );
}

function BikeGallery({
  slug,
  numberOfImages,
}: {
  slug: string;
  numberOfImages: number;
}) {
  return (
    <div className="flex overflow-x-auto scrollbar-hide gap-4 pb-6 md:gap-12 items-center md:grid md:grid-cols-2 w-full">
      {Array.from({ length: numberOfImages }, (_, index) => (
        <Image
          key={index}
          src={`/images/market/${slug}/${index + 1}.jpg`}
          alt={`purchase-a-${slug}-${index + 1}`}
          width={500}
          height={500}
          className="object-cover w-[250px] md:w-full   flex-shrink-0 "
        />
      ))}
    </div>
  );
}
