import { testimonials } from "@/_testimonials/all";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import TestimonialsList from "@/components/testimonials";
import { Section, Row, Button } from "@/ui/components";
import Bike from "@/components/bike";

import EnduroTour from "@/components/endurotour";
import ExploreArticles from "@/components/explorearticles";
export const metadata: Metadata = {
  title: "Enduro Portugal TDS Testimonials",
  description:
    "Hear from our customers about their experiences with our premium enduro tours in Southern Portugal (Algarve).",
};

export default function TestimonialsPage() {
  return (
    <>
      <Section>
        <Row centered small>
          <h1>
            Enduro Portugal{" "}
            <span className="text-accent">TDS Testimonials</span>{" "}
          </h1>
          <p>
            Hear from our customers about their experiences with our premium enduro tours in
            Southern Portugal (Algarve).
          </p>
          <Link href={"/tours"} className="hover:underline text-accent mb-4">
            See TDS tours {"->"}
          </Link>
        </Row>
        <Row>
          <TestimonialsList testimonials={testimonials} />
        </Row>
      </Section>
      <EnduroTour />
      <Bike />
      <ExploreArticles />
    </>
  );
}
