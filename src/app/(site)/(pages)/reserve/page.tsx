import { Metadata } from "next";
import { Form } from "./_components/Form";
import { Section, Row } from "@/ui/components";
import Link from "next/link";
import EnduroTour from "@/components/endurotour";
import Bike from "@/components/bike";
import TestimonialsList from "@/components/testimonials";
import { testimonials } from "@/_testimonials/all";
import ExploreArticles from "@/components/explorearticles";
export const metadata: Metadata = {
  title: "Reserve an Enduro Portugal Off Road Motorbike Experience",
  description:
    "TDS offers an all inclusive service for those who want nothing but the best. A truly curated experience that combines the best bikes, gear, and routes for the ultimate enduro adventure. With one-on-one service tailored to you, bike, gear, lunch and drinks included. Whether you're bringing 10 of your friends / family on a holiday ride or if you're a solo pro interested in training Extreme Enduro. We have it all covered..",
};

export const dynamic = "force-static";

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const params = (await searchParams);
  return (
    <>
      <Section>
        <Row>
          <h1>
            <strong className="text-accent font-normal">Reserve</strong> an
            Enduro Portugal Off Road Motorbike Experience
          </h1>

          <p className="max-w-2xl">
            TDS offers an all inclusive service (best bikes, gear, and routes
            included) for those who want <strong>nothing but the best.</strong>{" "}
            A curated experience for friends, family or pro riders creatin a
            unique tailored experience for your needs.
          </p>

          <Link href={`/tours`} className=" hover:underline mb-4 text-accent">
            View tour first{`->`}
          </Link>

          <Form searchParams={params} />
          <p className="max-w-xl text-balance my-6 mx-auto text-center">
            Or contact us directly at{" "}
            <a
              href="mailto:francisco@tdsenduroalgarve.com"
              className="underline lowercase hover:text-accent"
            >
              francisco@tdsenduroalgarve.com
            </a>{" "}
            /{" "}
            <a
              href="tel:+351 968 185 407"
              className="underline lowercase hover:text-accent"
            >
              +351 968 185 407
            </a>
          </p>
        </Row>
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
    </>
  );
}
