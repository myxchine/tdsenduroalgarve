import Image from "next/image";
import Link from "next/link";
import { tours } from "@/server/db/tours";
import { bikes } from "@/server/bikes";
import Hero from "./_components/Hero";
export default function Home() {
  return (
    <>
      <Hero />
      <Tours />
      <Bikes />
      <About />
    </>
  );
}

function About() {
  return (
    <section className="px-6 py-12  mx-auto w-fit">
      <div className="max-w-6xl mx-auto  flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl   mb-2  uppercase font-tds tracking-wider  md:text-5xl">
            About the Tour
          </h2>
          <p className="w-full text-sm text-black/80 max-w-xl md:text-lg">
            Join our experienced guides for an exhilarating full-day ride
            through the stunning Algarve region on a KTM EXC-300! We provide all
            the necessary safety gear and share our top riding techniques. A
            traditional lunch in the mountains is included!
            <br />
            <br />
            Our unique tracks cater to riders of all skill levels. Your gear
            will be ready for you, so you can hop on one of our fully-equipped
            Enduro bikes and enjoy an unforgettable ride. The day is yours to
            explore, with our guides tailoring the experience based on your
            feedback. Best of all, everything is included in your package with
            no hidden costs!
          </p>
        </div>

        <Link href={`/tours`} className="w-full">
          <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center  md:px-8 md:text-lg">
            Let's do it
          </button>
        </Link>
      </div>
    </section>
  );
}

function Bikes() {
  return (
    <section className="flex flex-col gap-4  w-full  md:max-w-6xl  mx-auto xl:px-0 py-8 md:py-12 ">
      <div className="px-6 flex flex-col gap-2">
        <h2 className="text-3xl font-tds md:text-5xl ">Motorcycles</h2>
        <p className="text-sm text-black/80 max-w-md">
          Premium bikes that you can rely on and enjoy your ride. Rental is
          available for all bikes.
        </p>
        <Link
          href={"/bikes"}
          className="text-sm text-tdsRed hover:underline md:text-lg "
        >
          View All {"->"}
        </Link>
      </div>
      <BikesList />
    </section>
  );
}

function BikesList() {
  return (
    <section className="flex flex-col gap-4  w-full ">
      <div className="flex overflow-x-auto scrollbar-hide gap-4 p-6 md:gap-12 items-center ">
        {bikes.map((bike) => (
          <div
            key={bike.id}
            className="flex-shrink-0  flex flex-col items-center justify-center  scrollbar-hide gap-6 "
          >
            <Image
              src={`/images/bikes/${bike.image}`}
              alt={bike.name}
              width={200}
              height={200}
              quality={65}
              priority={true}
              className="w-[300px] h-full object-cover md:w-full"
            />

            <div className="flex flex-col gap-2 w-full justify-start items-start">
              <h3 className="text-xl font-bold text-center hover:text-tdsRed/80 ">
                {bike.name}
              </h3>

              <p className="text-xs text-goreground/40 max-w-[250px] md:text-sm">
                {bike.shout}
              </p>
              <Link
                href={`/bikes/${bike.slug}`}
                className="text-sm  text-center text-tdsRed hover:underline mt-2 md:text-lg"
              >
                Let's do it {"->"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Tours() {
  return (
    <section className="flex flex-col gap-4  w-full  md:max-w-6xl pt-2  mx-auto xl:px-0 py-8 md:py-12 md:pt-24">
      <div className="px-6 flex flex-col gap-2">
        <h2 className="text-3xl font-tds md:text-5xl">Guided Tours</h2>
        <p className="text-sm text-black/80 max-w-md">
          Enjoy a day long unforgettable ride with all the gear, bike, trails
          and even lunch included! Bike license not required off road.
        </p>
        <Link
          href={"/tours"}
          className="text-sm text-tdsRed hover:underline md:text-lg"
        >
          View All {"->"}
        </Link>
      </div>
      <ToursList />
    </section>
  );
}

function ToursList() {
  return (
    <section className="flex flex-col gap-4  w-full ">
      <div className="flex flex-row overflow-x-auto scrollbar-hide gap-4 md:gap-16 p-6 md:grid md:grid-cols-3 w-full">
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
              className="w-[300px] h-[300px] object-cover  md:h-[400px] md:w-full"
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

/*
             <section className="flex flex-row gap-4 items-end justify-end w-full">
              <p className="text-4xl font-tds tracking-wider  md:text-6xl">
                <span className="text-sm font-normal pr-2 md:text-lg">
                  from
                </span>
                <span className="relative pl-3">
                  <span className="text-sm absolute top-1 left-0 font-bold md:text-lg">
                    €
                  </span>
                  {tour.startingPrice}
                </span>

                <span className="text-sm font-normal md:text-lg">/day</span>
              </p>
            </section>
*/
