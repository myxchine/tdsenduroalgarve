import Link from "next/link";
import { Section, Row, Button } from "@/ui/components";
import Image from "next/image";
import Articles from "@/components/articles";
import { getAllPosts } from "@/server/api";
import { BikesList } from "@/components/bikes";
import { bikes } from "@/_bikes/all";
import { tours } from "@/_tours/all";
import TestimonialsList from "@/components/testimonials";
import { testimonials } from "@/_testimonials/all";
import Bike from "@/components/bike";
import ExploreArticles from "@/components/explorearticles";

import { TourList } from "@/components/tours";
import EnduroTour from "@/components/endurotour";
export default function Home() {
  return (
    <>
      <Section full>
        <div className="relative  md:bg-black">
          <Image
            src="/images/enduro.jpg"
            alt="TDS Enduro Algarve, Faro"
            width={1200}
            height={800}
            priority={true}
            className="object-cover w-full h-[400px] md:h-[700px] lg:h-[900px] object-left"
            style={{ transform: "scaleX(-1)" }}
          />
          <Hero className=" w-full  flex flex-col items- md:items-start justify-center md:absolute  md:bottom-0  h-[100%] max-w-6xl mx-auto left-0 right-0 pt-12      text-background" />
        </div>
      </Section>

      <EnduroTour />

      <Bike />
      <ExploreArticles />

      <Section>
        <Row>
          <h2>Testimonials</h2>
          <p>
            Hear from our customers about their experiences with our tours and
          </p>
          <Link
            href={"/testimonials"}
            className="hover:underline text-accent mb-4"
          >
            View all testimonials {"->"}
          </Link>
          <TestimonialsList testimonials={testimonials} h3 lineclamp />
        </Row>
      </Section>
      <Section>
        <Row>
          <h2>Pricing</h2>
          <p>
            TDS offers curated tours whether you're bringing 10 of your friends
            / family on a holiday ride or if you're a solo pro interested in
            training Extreme Enduro. We have it all covered.
          </p>

          <Link href={"/tour"} className="hover:underline text-accent mb-4">
            Learn more about the tour {"->"}
          </Link>

          <TourList tour={tours} />
        </Row>
      </Section>
    </>
  );
}

function Hero(props: any) {
  return (
    <div {...props}>
      <div className="flex flex-col gap-6 max-w-xl md:px-6  text-center  mx-auto md:mx-0 text-black md:text-white">
        <div className="flex flex-col gap-4">
          <h1 className="text-balance md:text-left">
            All Inclusive Enduro Tour
          </h1>
          <p className="max-w-[300px] mx-auto md:mx-0  md:text-left">
            Premium KTM Hard Enduro motorbike tours in Algarve, Portugal
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-4 md:px-0">
          <Link
            href="/tours"
            className={`bg-accent text-background w-full  px-8 p-3 uppercase hover:bg-accent/80 mx-auto font-accent rounded `}
          >
            See the Tour
          </Link>
          <Link
            href="/reserve"
            className="bg-foreground text-background w-full p-3 uppercase hover:bg-black/80 font-accent rounded"
          >
            Reserve for free <span className="font-sans">  {"->"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
