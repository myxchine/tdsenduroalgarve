import Hero from "./_components/Hero";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Off Road Enduro Bike Tour",
  description:
    "Join one of our experienced guides for this exciting full-day ride through the beautiful Algarve region while riding a KTM EXC-300! We will provide all the necessary safety gear and share our best riding techniques. Lunch is included in the ride​.. We offer the beautiful Algarve experience whilst making sure you have a great time with everything prepared for you.! The perfect way to explore the region and experience the local culture whether with friends, family or by yourself.",
};
export default function AboutTour() {
  return (
    <section>
      <Hero />
      <div className="flex flex-col gap-8 py-12 w-full max-w-6xl mx-auto md:gap-8">
        <section className="flex flex-col px-6 gap-6 ">
          <div>
            <h2 className="text-3xl   mb-2  uppercase font-tds tracking-wider w-full md:text-5xl">
              About the Tour
            </h2>
            <p className="w-full text-sm text-black/80">
              Join our experienced guides for an exhilarating full-day ride
              through the stunning Algarve region on a KTM EXC-300! We provide
              all the necessary safety gear and share our top riding techniques.
              A traditional lunch in the mountains is included!
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

          <Link href={`/tours/`} className="w-full">
            <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center  md:px-8 md:text-lg">
              Let's do it
            </button>
          </Link>
        </section>

        <section className="flex flex-col p-6 gap-4 pb-0">
          <h3 className="text-3xl    uppercase font-tds tracking-wider w-full md:text-5xl">
            Included
          </h3>
          <div className="w-full text-sm text-black/80 md:text-lg">
            <ul>
              <li>KTM EXC 300 Motorbike</li>
              <li>Full Day Tour Guide</li>
              <li>All protective and riding equipment</li>
              <li>Lunch</li>
              <li>Water and snacks</li>
              <li>Fuel</li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col p-6 pt-0 gap-4">
          <Image
            src="/images/bikes/enduro.png"
            alt="enduro tour"
            width={400}
            height={400}
            priority={true}
            className="w-full object-cover rounded "
          />
        </section>
      </div>
    </section>
  );
}
