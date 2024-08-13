import { tours } from "@/server/db/tours";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Guided Tours",
  description:
    "An experienced guide through the beautiful Algarve region with bike, gear, transport and even lunch included! The perfect way to explore the region and experience the local culture whether with friends, family or by yourself.",
};

export default function ToursPage() {
  return (
    <div className="flex flex-col  gap-8 py-8 max-w-6xl mx-auto">
      <Title />
      <ToursList />
    </div>
  );
}

function Title() {
  return (
    <div className="flex flex-col gap-2 w-full px-6  xl:px-0 pb-4">
      <h1 className="text-4xl font-tds md:text-5xl">
        Guided <span className="text-tdsRed">TOURS</span>
      </h1>
      <p className="text-sm text-black/80 text-balance md:text-lg">
        Take a look at the tours we offer and find the perfect motorcycle
        adventure for you.
      </p>
    </div>
  );
}

function ToursList() {
  return (
    <section className="flex flex-col gap-4  w-full ">
      <div className="flex flex-row overflow-x-auto scrollbar-hide gap-16 p-6  grid grid-cols-1 md:grid-cols-3 w-full xl:px-0">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="flex-shrink-0  flex flex-col items-start justify-start  gap-6 "
          >
            <Image
              src={`/images/tours/${tour.image}`}
              alt={tour.slug}
              width={200}
              height={200}
              quality={65}
              priority={true}
              className="w-full h-[300px] object-cover  md:h-[400px] md:w-full"
            />
            <div className="flex flex-col gap-2 w-full justify-start items-start md:w-full md:gap-4">
              <h3 className="text-xl font-bold text-center  md:text-3xl">
                {tour.name}
              </h3>

              <p className="text-xs text-goreground/40 max-w-[250px] md:text-sm">
                {tour.description}
              </p>
              <Link
                href={`/tours/${tour.slug}`}
                className="text-sm  text-center text-tdsRed hover:underline mt-2 md:text-lg"
              >
                From €{tour.startingPrice}/day {"->"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Tour() {
  return (
    <section className="flex flex-col w-full bg-black/10  ">
      <div className="flex flex-col gap-8 w-full  md:grid md:grid-cols-2 md:gap-16 max-w-6xl mx-auto xl:px-0 p-4 py-8 md:py-12">
        {tours.map((tour) => (
          <section
            className="flex flex-col items-start gap-4 bg-white rounded-md w-full md:w-fit overflow-hidden relative shadow"
            key={tour.id}
          >
            <div className="flex flex-col gap-6 p-4 py-6 md:p-8 md:gap-8">
              <h1 className="text-3xl font-tds uppercase text-balance">
                Enduro <span className="text-tdsRed">Full Day </span> KTM
                Motorbike <span className="text-tdsRed">Tour</span> Off Road
                Algarve
              </h1>
              <Image
                src={tour.image}
                alt={tour.title}
                width={300}
                height={200}
                quality={60}
                priority={true}
                className=" object-cover w-full  h-auto rounded-md"
              />

              <Link href={`/tours/${tour.slug}`} className="w-full">
                <button className="flex flex-col w-full p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center ">
                  View Pricing
                </button>
              </Link>
              <p className=" text-black/80  text-balance">{tour.description}</p>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
