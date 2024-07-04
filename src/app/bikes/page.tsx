import { bikes } from "@/server/data";
import Image from "next/image";
import Link from "next/link";
export default function Bikes() {
  return (
    <div className="flex flex-col items-start gap-8 pt-32 p-6 max-w-6xl mx-auto md:px-0">
      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-4xl font-tds">
          Our <span className="text-tdsRed">Bikes</span> at TDS
        </h1>
        <p className="text-xs text-black/80 text-balance">
          Take a look at our range of bikes and find the perfect one for your
          needs.
        </p>
      </div>

      <div className="flex flex-col gap-8 w-full  md:grid md:grid-cols-2 md:gap-16">
        {bikes.map((bike) => (
          <section
            className="flex flex-col items-start gap-8 bg-black/5 rounded-md w-full md:w-fit p-6 relative"
            key={bike.id}
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-tds uppercase">{bike.name}</h1>
              <p className="text-xs text-black/80 ">{bike.description}</p>
            </div>

            <Image
              src={bike.image}
              alt={bike.name}
              width={400}
              height={400}
              priority={true}
              className=" object-cover w-full "
            />
            <Link href={`/bikes/${bike.slug}`} className="w-full">
              <button className="flex flex-col w-full p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center ">
                View Bike
              </button>
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
}
