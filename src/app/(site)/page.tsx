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
            src="/images/new.jpg"
            alt="TDS Enduro Algarve, Southern Portugal"
            width={1000}
            height={800}
            priority
            className="object-cover w-full h-[300px] md:h-[700px] lg:h-[900px] object-center md:opacity-60 rounded-none"
          />
          <Hero className=" w-full  flex flex-col items- md:items-start justify-center md:absolute  md:bottom-0  h-[100%] max-w-6xl mx-auto left-0 right-0 pt-12      text-background" />
        </div>
      </Section>
      <EnduroTour />
      <Bike />
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
      <ExploreArticles />
    </>
  );
}

function Hero(props: any) {
  return (
    <div {...props}>
      <div className="flex flex-col gap-6 max-w-2xl md:px-6  text-center  mx-auto md:mx-0 text-black md:text-white">
        <div className="flex flex-col gap-4">
          <h1 className="text-balance md:text-left">
            All Inclusive Enduro Experience
          </h1>
          <p className="max-w-[500px] mx-auto md:mx-0  md:text-left md:text-xl">
            Ride with the best bikes, gear, and scenery in the world. Premium hard
            enduro <strong>motorbike tour and rental</strong> in Algarve,
            Portugal
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
            href="/articles/whats-enduro"
            className="bg-foreground text-background w-full p-3 uppercase hover:bg-black/80 font-accent rounded"
          >
           What is Enduro?
          </Link>
        </div>
      </div>
    </div>
  );
}
