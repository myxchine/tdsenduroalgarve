import { tours } from "@/server/db/data";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Guided Tours",
  description:
    "An experienced guide through the beautiful Algarve region with bike, gear, transport and even lunch included! The perfect way to explore the region and experience the local culture whether with friends, family or by yourself.",
};

export default function Tours() {
  return (
    <div className="flex flex-col items-start gap-8 pt-32 ">
      <div className="flex flex-col gap-2 w-full px-6 max-w-6xl mx-auto xl:px-0 pb-4">
        <h1 className="text-4xl font-tds">
          Our <span className="text-tdsRed">TOURS</span> at TDS
        </h1>
        <p className="text-sm text-black/80 text-balance">
          Take a look at the tours we offer and find the perfect one for your
          needs.
        </p>
      </div>
      <section className="flex flex-col w-full bg-black/10  ">
        <div className="flex flex-col gap-8 w-full  md:grid md:grid-cols-2 md:gap-16 max-w-6xl mx-auto xl:px-0 p-4 py-8 md:py-12">
          {tours.map((tour) => (
            <section
              className="flex flex-col items-start gap-4 bg-white rounded-md w-full md:w-fit overflow-hidden relative shadow"
              key={tour.id}
            >
              <div className="flex flex-col gap-6 p-4 py-6 md:p-8 md:gap-8">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  width={600}
                  height={400}
                  quality={100}
                  priority={true}
                  className=" object-cover w-full  h-auto rounded-md"
                />
                <h1 className="text-3xl font-tds uppercase">{tour.title}</h1>
                <Link href={`/tours/${tour.slug}`} className="w-full">
                  <button className="flex flex-col w-full p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center ">
                    View Packages
                  </button>
                </Link>
                <p className=" text-black/80  text-balance">
                  {tour.description}
                </p>
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
