import { tours } from "@/server/db/tours";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TDS Enduro Moments in Algarve",
  description:
    "We have a wide range of motorbikes for sale in Algarve. Choose the one that suits your needs and get started on your motorbike adventure.",
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
        TDS Enduro <span className="text-tdsRed">Moments</span> in Algarve
      </h1>
      <p className="text-sm text-black/80 text-balance md:text-lg">
        Take a look at fun, dirty, silly, unique and exciting moments with our
        riders at TDS Algarve.
      </p>
    </div>
  );
}
