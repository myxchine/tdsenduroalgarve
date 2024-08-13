import Pricing from "./_components/Pricing";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { tours } from "@/server/db/tours";
import Image from "next/image";
import Link from "next/link";
export async function generateStaticParams() {
  return tours.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const tour = tours.find((tour) => tour.slug === params.slug);

  if (!tour) {
    notFound();
  }

  return {
    title: tour.title,
    description: tour.description,
    openGraph: {
      images: [
        {
          url: tour.image,
          alt: tour.slug,
        },
      ],
    },
  };
}

export default async function ToursList({
  params,
}: {
  params: { slug: string };
}) {
  const tour = tours.find((c) => c.slug === params.slug);

  if (!tour) {
    notFound();
  }
  return (
    <section className="flex flex-col items-center justify-center w-full ">
      <Hero tour={tour} />
      <Pricing tour={tour} />
    </section>
  );
}

function Hero({ tour }: { tour: any }) {
  return (
    <div className="gap-2 flex flex-col w-full pt-8 p-6 pb-12 xl:px-0 md:pb-12 md:pt-8 max-w-6xl mx-auto md:flex-row items-center gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-tds sm:text-5xl xl:text-5xl tracking-wider uppercase text-balance max-w-3xl">
          {tour.name} enduro guided bike{" "}
          <span className="text-tdsRed">
            tour <span className="text-black">+</span> Rental
          </span>
        </h1>
        <p className="max-w-[500px] text-black/60 text-sm  md:text-base text-balance">
          The full day off road motorbike enduro adventure you'll never forget
          this holiday. We offer the beautiful Algarve experience whilst making
          sure you have a great time with everything prepared for you.
        </p>
        <Link href={`/reserve/`} className="w-full text-tdsRed hover:underline">
          Reserve now {"->"}
        </Link>
      </div>
    </div>
  );
}

function ImageHero({ tour }: { tour: any }) {
  return (
    <section className="">
      <Image
        src={`/images/tours/${tour.image}`}
        alt={tour.slug}
        width={500}
        height={500}
        quality={100}
        priority={true}
        className="w-full aspect-square object-cover  "
      />
    </section>
  );
}
