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
  title: "Reserve an Off Road Enduro Motorbike Tour in Portugal",
  description:
    "Reserve your all-inclusive enduro tour in Algarve, Portugal. From €300/rider — KTM 300 EXC, gear, expert guide, and lunch included. Tailored to your level.",
};

export const dynamic = "force-static";

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const params = await searchParams;
  return (
    <>
      <Section>
        <Row>
          <h1>
            <strong className="text-accent font-normal">Reserve</strong> an
            Off Road Enduro Motorbike Tour in Portugal
          </h1>

          <p className="max-w-2xl">
            All-inclusive enduro tours from <strong>€300/rider</strong> — KTM 300
            EXC, gear, expert guide, and lunch included. A curated experience
            for friends, family, or pro riders tailored to your needs.
          </p>
          <p className="text-sm text-black/60 max-w-2xl">
            Trusted by riders from 40+ countries · 90% return rate
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
