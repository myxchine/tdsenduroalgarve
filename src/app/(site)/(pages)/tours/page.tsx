import { Section, Row, Button } from "@/ui/components";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { SuggestedArticlesList } from "@/components/suggested-articles";
import Gallery from "@/components/gallery";
import { testimonials } from "@/_testimonials/all";

import Bike from "@/components/bike";
import EnduroTour from "@/components/endurotour";
import ExploreArticles from "@/components/explorearticles";
import { Pricing } from "@/components/tours";
import { tours } from "@/_tours/all";
import TestimonialsList from "@/components/testimonials";
export const metadata: Metadata = {
  title: "Enduro Tours Portugal",
  description:
    "All enclusive premium enduro tours in Southern Portugal (Algarve) for those who want nothing but the best. We offer the beautiful Algarve experience whilst making sure you have a great time with everything prepared for you.",
};

function Hero(props: any) {
  return (
    <div {...props}>
      <div className="flex flex-col gap-6 max-w-xl  text-center mx-auto ">
        <h1 className="text-balance">
          Enduro <span className="text-accent">Tours</span> Portugal
        </h1>
        <p>
          All enclusive{" "}
          <strong>premium enduro tours in Southern Portugal (Algarve).</strong>{" "}
          A truly curated experience that combines the{" "}
          <strong>best bikes, gear, and routes</strong> for the ultimate enduro
          adventure. With one-on-one service tailored to you, bike, gear, lunch
          and drinks included.
        </p>
      </div>
    </div>
  );
}

export default async function About() {
  return (
    <>
      <Section full>
        <Image
          src="/images/tours/enduro-tour.jpg"
          alt="About TDS Enduro Algarve | Premium Enduro Tours Portugal"
          width={1200}
          height={800}
          priority={true}
          className="object-cover w-full h-[300px] md:h-[600px] lg:h-[800px] z-[-10] relative"
        />
        <Hero className="z-[10000000] w-full  flex flex-col items-center justify-center m pt-4 text-foreground " />
        <div className="absolute h-full w-full top-down-gradient" />
      </Section>
      <Section>
        <Row>
          <p>
            Whether you're bringing 10 of your{" "}
            <strong>friends / family on a holiday </strong>
            ride or if you're a solo <strong>pro</strong> interested in training
            Extreme Enduro. We have it all covered.
          </p>
          <Pricing tour={tours} />
        </Row>
      </Section>
      <Section>
        <Row>
          <h2>TDS Experiences</h2>
          <Gallery />
        </Row>
      </Section>
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
      <ExploreArticles />
    </>
  );
}
