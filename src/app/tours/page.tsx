import { tours } from "@/server/data";
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
    <div className="flex flex-col items-start gap-8 pt-32 p-6 max-w-6xl mx-auto xl:px-0">
      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-4xl font-tds">
          Our <span className="text-tdsRed">TOURS</span> at TDS
        </h1>
        <p className="text-xs text-black/80 text-balance">
          Take a look at the tours we offer and find the perfect one for your
          needs.
        </p>
      </div>

      <div className="flex flex-col gap-8 w-full  md:grid md:grid-cols-2 md:gap-16">
        {tours.map((tour) => (
          <section
            className="flex flex-col items-start gap-8 bg-black/5 rounded-md w-full md:w-fit p-6 relative"
            key={tour.id}
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-tds uppercase">{tour.title}</h1>
              <Link href={`/tours/${tour.slug}`} className="w-full">
                <Image
                  src={tour.image2}
                  alt={tour.title}
                  width={400}
                  height={400}
                  priority={true}
                  className=" object-cover w-full mb-4 h-auto"
                />
                <button className="flex flex-col w-full p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center ">
                  View Packages
                </button>
              </Link>
              <p className=" text-black/80 mt-2">{tour.description}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
