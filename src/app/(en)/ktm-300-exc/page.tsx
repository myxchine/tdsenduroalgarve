import { bikes } from "@/server/db/market";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Buy a KTM 300 EXC in Portugal`,
  description:
    "KTM 300 is a four-stroke, two-wheeler with a 2020 Six Days Chile experience. It is a great bike for the adventurous and the serious. The bike is built for comfort and durability. KTM 300 is a great bike for the adventurous and the serious. The bike is built for comfort and durability.",
};

export default async function Bike() {
  const bike = bikes.find((bike) => bike.slug === "ktm-300-exc");

  if (!bike) {
    notFound();
  }
  return (
    <section className="flex flex-col items-start gap-8 pt-8 p-6 max-w-6xl mx-auto  md:flex-row mb-12 text-left xl:px-0 md:py-24">
      <div className="md:hidden w-full flex flex-col gap-2">
        <h1 className="text-3xl font-tds uppercase ">{bike.name}</h1>
        <p className="text-xs text-black/80 md:text-sm">{bike.shout}</p>

        <p className="my-4 font-semibold">
          Contact +351 964 691 830 for more info about purchasing a {bike.name}{" "}
          or email us at michael.dozzantoz@gmail.com
        </p>
        {bike.tour && (
          <Link href={`/tours/`} className="w-full mt-2">
            <button className="flex flex-col w-fit p-2 px-4 rounded bg-tdsRed text-white  hover:bg-tdsRed/80 text-center justify-center items-center text-left text-xs font-semibold tracking-wider">
              Guided tour available
            </button>
          </Link>
        )}
      </div>

      <Image
        src={`/images/bikes/${bike.image}`}
        alt={bike.slug}
        width={500}
        height={400}
        quality={100}
        priority={true}
        className="w-full object-cover md:order-last"
      />

      <div className="flex text-left flex-col gap-8 w-full md:max-w-md md:text-left">
        <div className="hidden md:flex w-full flex flex-col gap-2">
          <h1 className="text-3xl font-tds uppercase md:text-5xl">
            {bike.name}
          </h1>
          <p className="text-xs text-black/80 md:text-sm">{bike.shout}</p>
          <p className="text-xs text-black/80 md:text-sm">
            Both brand new and second-hand {bike.name}s are available.
          </p>

          <p className="my-4 font-semibold text-tdsRed">
            Contact +351 964 691 830 for more info about purchasing a{" "}
            {bike.name} or email us at michael.dozzantoz@gmail.com
          </p>
          {bike.tour && (
            <Link href={`/tours/`} className="w-full mt-2">
              <button className="flex flex-col w-fit p-2 px-4 rounded bg-tdsRed text-white  hover:bg-tdsRed/80 text-center justify-center items-center text-left font-semibold tracking-wider">
                Guided tour available
              </button>
            </Link>
          )}
        </div>

        <p className="text-xs md:text-sm">{bike.description}</p>

        <Link href={`/reserve`} className="text-tdsRed hover:underline">
          Reserve Off Road Experience now for free {`->`}
        </Link>
        {bike.specsTrue && <Specifications bike={bike} />}

        <div className="flex flex-col gap-4 w-full">
          <p className="text-2xl font-tds uppercase">Features</p>
          <ul className="flex flex-wrap gap-2 md:justify-start md:items-start">
            {bike.tags.map((feature) => (
              <li
                key={feature}
                className="bg-black/5 p-2 px-4 rounded text-xs uppercase tracking-wider font-semibold"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Specifications({ bike }: { bike: any }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-2xl font-tds uppercase">Specifications</p>
      <ul className="flex flex-col grid grid-cols-2 gap-2 md:justify-start md:items-start">
        <li className="bg-black/5 p-2 px-4 rounded text-xs uppercase tracking-wider font-semibold">
          {bike.horsepower} hp
        </li>
        <li className="bg-black/5 p-2 px-4 rounded text-xs uppercase tracking-wider font-semibold">
          {bike.kw} kw
        </li>
        <li className="bg-black/5 p-2 px-4 rounded text-xs uppercase tracking-wider font-semibold">
          {bike.weight} kg
        </li>
        <li className="bg-black/5 p-2 px-4 rounded text-xs uppercase tracking-wider font-semibold">
          {bike.tank} l
        </li>
        <li className="bg-black/5 p-2 px-4 rounded text-xs uppercase tracking-wider font-semibold">
          {bike.displacement} cm³
        </li>
        <li className="bg-black/5 p-2 px-4 rounded text-xs uppercase tracking-wider font-semibold">
          {bike.cylinders} cylinders
        </li>
        <li className="bg-black/5 p-2 px-4 rounded text-xs uppercase tracking-wider font-semibold">
          {bike.stroke} stroke
        </li>
        <li className="bg-black/5 p-2 px-4 rounded text-xs uppercase tracking-wider font-semibold">
          Seat height: {bike.seatHeight} cm
        </li>
        <li className="bg-black/5 p-2 px-4 rounded text-xs uppercase tracking-wider font-semibold">
          Starter: {bike.starter}
        </li>
        <li className="bg-black/5 p-2 px-4 rounded text-xs uppercase tracking-wider font-semibold">
          Cooling: {bike.cooling}
        </li>
        <li className="bg-black/5 p-2 px-4 rounded text-xs uppercase tracking-wider font-semibold">
          Gears: {bike.gears}
        </li>
      </ul>
    </div>
  );
}
