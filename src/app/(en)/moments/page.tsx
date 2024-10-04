import { tours } from "@/server/db/tours";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Enduro Tour Moments Portugal",
  description:
    " Take a look at fun, dirty, silly, unique and exciting moments with our riders at TDS Algarve on our Portugal Enduro Tours.",
};

export default function ToursPage() {
  return (
    <div className="flex flex-col items-start gap-8 py-8 max-w-6xl mx-auto">
      <Title />
      <Gallery />
    </div>
  );
}

function Title() {
  return (
    <div className="flex flex-col gap-2 w-full px-6   pb-4">
      <h1 className="text-4xl font-tds md:text-5xl">
        TDS Enduro <span className="text-tdsRed">Moments</span> in Algarve
      </h1>
      <p className="text-sm text-black/80 text-balance md:text-lg">
        Take a look at fun, dirty, silly, unique and exciting moments with our
        riders at TDS Algarve on our Portugal Enduro Tours.
      </p>
      <Link
        href={"/tours"}
        className="text-lg text-tdsRed hover:underline md:text-lg mt-4"
      >
        View our available all inclusive tours{"->"}
      </Link>
    </div>
  );
}

function Gallery() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 justify-center items-start w-full p-6">
      {images.map((image, index) => (
        <Image
          key={index}
          src={`/images/moments/${image}`}
          alt={image}
          width={300}
          height={300}
          loading="lazy"
          className="object-cover w-full"
          draggable={true}
        />
      ))}
    </section>
  );
}
