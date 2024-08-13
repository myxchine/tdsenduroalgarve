import { bikes } from "@/server/bikes";

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motorcycles",
  description:
    "Take a look at the sick bikes we have available here in Algarve, Portugal. We offer the beautiful Algarve experience whilst making sure you have a great time with everything prepared for you.! The perfect way to explore the region and experience the local culture whether with friends, family or by yourself.",
};

export default function Bikes() {
  return (
    <div className="flex flex-col  gap-8 py-8 max-w-6xl mx-auto">
      <Title />
      <BikesList />
    </div>
  );
}

function Title() {
  return (
    <div className="flex flex-col gap-2 w-full px-6  xl:px-0 pb-4">
      <h1 className="text-4xl font-tds md:text-5xl">
        Explore <span className="text-tdsRed">Motorcycles</span>
      </h1>
      <p className="text-xs text-black/80 text-balance md:text-lg">
        Explore enduro, motorcross, adventure or street bikes in Portugal.
      </p>
    </div>
  );
}

function BikesList() {
  return (
    <section className="flex flex-col w-full  p-6 xl:px-0">
      <div className="flex flex-col gap-8 w-full  md:grid md:grid-cols-2 md:gap-16 max-w-6xl mx-auto py-4 xl:px-0 ">
        {bikes.map((bike) => (
          <section
            className="flex flex-col items-start gap-8 bg-white w-full   relative"
            key={bike.id}
          >
            <Image
              src={`/images/bikes/${bike.image}`}
              alt={bike.slug}
              width={500}
              height={500}
              quality={100}
              priority={true}
              className=" object-cover w-full "
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-tds uppercase">{bike.name}</h1>
              <p className="text-xs text-black/80 md:text-sm">{bike.shout}</p>
              <Link
                href={`/bikes/${bike.slug}`}
                className="w-full text-tdsRed hover:underline"
              >
                Let's do it {"->"}
              </Link>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function BikesList2() {
  return (
    <section className="flex flex-col w-full bg-white py-8 p-4">
      <div className="flex  gap-12 w-full  grid grid-cols-1 md:grid-cols-2 md:gap-16 max-w-6xl mx-auto xl:px-0  md:py-12">
        {bikes.map((bike) => (
          <section
            className="flex flex-col items-start gap-12 bg-white sw-full  relative"
            key={bike.id}
          >
            <Image
              src={`/images/bikes/${bike.image}`}
              alt={bike.slug}
              width={500}
              height={500}
              quality={100}
              priority={true}
              className=" object-cover w-full "
            />
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-tds ">{bike.name}</h2>
              <p className="text-sm ">{bike.shout}</p>

              <div className="flex flex-row gap-4">
                {bike.buy && <Button label="Buy" link={`/buy/${bike.slug}`} />}
                {bike.rental && (
                  <ButtonSecondary
                    label="Rent"
                    link={`/rentals/${bike.slug}`}
                  />
                )}
                {bike.tour && (
                  <ButtonAccent label="Tours" link={`/tours/${bike.slug}`} />
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function Pills({ data }: { data: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 w-full">
      {data.map((item) => (
        <div
          key={item}
          className="flex flex-col gap-2 w-fit text-xs text-black/60 bg-black/5 p-1 px-2 rounded"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function Button({ label, link }: { label: string; link: string }) {
  return (
    <Link
      href={link}
      className={`w-fit border border-black rounded p-2 px-4 text-sm font-semibold bg-black text-white hover:bg-black/80`}
    >
      {label}
    </Link>
  );
}

function ButtonSecondary({ label, link }: { label: string; link: string }) {
  return (
    <Link
      href={link}
      className={`w-fit border border-tdsRed rounded p-2 px-4 text-sm font-semibold bg-tdsRed text-white hover:bg-tdsRed/80`}
    >
      {label}
    </Link>
  );
}

function ButtonAccent({ label, link }: { label: string; link: string }) {
  return (
    <Link
      href={link}
      className={`w-fit border border-accent rounded p-2 px-4 text-sm font-semibold bg-accent text-white hover:bg-accent/80`}
    >
      {label}
    </Link>
  );
}
