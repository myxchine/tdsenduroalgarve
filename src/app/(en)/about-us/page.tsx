import { tours } from "@/server/db/tours";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We are TDS Enduro Algarve, a company that offers a wide range of motorbikes for sale in Algarve. Our goal is to provide our customers with the best possible experience when buying a motorbike.",
};

export default function ToursPage() {
  return (
    <div className="flex flex-col  gap-8 py-8 max-w-6xl mx-auto">
      <Title />
    </div>
  );
}

function Title() {
  return (
    <div className="flex flex-col gap-2 w-full px-6  xl:px-0 pb-4">
      <h1 className="text-4xl font-tds md:text-5xl">
        About <span className="text-tdsRed">Us </span>
      </h1>
      <p className="text-sm text-black/80 text-balance md:text-lg">
        Learn about who we are and what we do.
      </p>

      <h2 className="text-2xl text-balance md:text-3xl mt-8">
        We are TDS Enduro Bikes Algarve, Portugal, an Off-Road Enduro Motorbike
        Tour & Rental Company
      </h2>
      <p className="text-balance">
        We are in love with enduro motorbikes and we are passionate about
        sharing our love for motorbikes with others.
      </p>
      <Image
        src="/images/water.jpg"
        alt="Enduro"
        width={500}
        height={500}
        quality={65}
        priority={true}
        className="w-full h-auto my-8 object-cover max-w-[500px]"
      />
    </div>
  );
}
