import { rentals } from "@/server/db/rentals";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Rentals",
  description:
    "We offer premium bikes for rental and find the perfect one for your needs. Take a look at our available premium bikes for rental and find the perfect one for your needs.",
};

export default function Tours() {
  return (
    <div className="flex flex-col items-start gap-8 pt-32 ">
      <div className="flex flex-col gap-2 w-full px-6 max-w-6xl mx-auto xl:px-0 pb-4">
        <h1 className="text-4xl font-tds">
          Rent a <span className="text-tdsRed">Motorbike</span>
        </h1>
        <p className="text-sm text-black/80 text-balance">
          Take a look at our available premium motrobikes for rental and find
          the perfect one for your needs.
        </p>
      </div>
      <section className="flex flex-col w-full bg-black/10  ">
        <div className="flex flex-col gap-8 w-full  md:grid md:grid-cols-2 md:gap-16 max-w-6xl mx-auto xl:px-0 p-4 py-8 md:py-12">
          {rentals.map((rental) => (
            <section
              className="flex flex-col items-start gap-8 bg-white shadow rounded-md w-full md:w-fit p-4 py-6 relative"
              key={rental.id}
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-tds uppercase">
                  {" "}
                  <span className="text-tdsRed">Hire</span> a {rental.name}{" "}
                </h1>
                <p className="text-xs text-black/80 ">{rental.description}</p>
              </div>

              <Image
                src={rental.image}
                alt={rental.slug}
                width={500}
                height={500}
                quality={100}
                priority={true}
                className=" object-cover w-full "
              />
              <Link href={`/rentals/${rental.slug}`} className="w-full">
                <button className="flex flex-col w-full p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center ">
                  Rent {rental.name} Now
                </button>
              </Link>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
