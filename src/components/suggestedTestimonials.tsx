import { Section, Row } from "@/ui/components";
import TestimonialsList from "@/components/testimonials";
import { testimonials } from "@/_testimonials/all";
import Link from "next/link";

export default function SuggestedTestimonialsList() {
  return (
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
  );
}
