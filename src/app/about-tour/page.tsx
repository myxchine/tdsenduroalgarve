import Hero from "@/components/Hero";
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
      <Hero
        image="/images/enduro.jpg"
        title=" Learn about our full day GUIDED TOUR "
        titleColour="white"
        subtitle=""
        titleSize={null}
        buttonText="View Packages"
        buttonLink="tours/off-road-enduro-bike-rental"
        buttonWidth="w-full"
        buttonText2={null}
        buttonLink2={null}
      />
      <div className="flex flex-col gap-4 py-12 w-full max-w-6xl mx-auto md:gap-8">
        <section className="flex flex-col p-6 gap-4">
          <h4 className="text-3xl    uppercase font-tds tracking-wider w-full md:text-5xl">
            Tour adventure in the Algarve region.
          </h4>
          <p className="w-full text-sm text-black/80 md:text-lg">
            Join one of our experienced guides for this exciting full-day ride
            through the beautiful Algarve region while riding a KTM EXC-300! We
            will provide all the necessary safety gear and share our best riding
            techniques. Lunch is included in the ride​.
          </p>
          <Link href={`/bikes/ktm-exc-300`} className="w-full">
            <button className="flex flex-col w-full max-w-[200px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center md:p-4 md:px-8 md:text-lg">
              Available Packages
            </button>
          </Link>
        </section>
        <section className="flex flex-col p-6 gap-4">
          <h4 className="text-3xl    uppercase font-tds tracking-wider w-full md:text-5xl">
            Included
          </h4>
          <div className="w-full text-sm text-black/80 md:text-lg">
            <ul>
              <li>KTM EXC 300 TPI</li>
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
          <Link href={`/bikes/ktm-exc-300`} className="w-full">
            <button className="flex flex-col w-full p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center ">
              View Bike
            </button>
          </Link>
        </section>
      </div>
    </section>
  );
}
