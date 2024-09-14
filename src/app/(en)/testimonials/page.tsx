import { testimonials } from "@/data/testimonials";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from our customers about their experiences with our tours and learn from their feedback.",
};

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col  gap-8 py-8 max-w-6xl mx-auto">
      <Title />
      <TestimonialsList />
    </div>
  );
}

function Title() {
  return (
    <div className="flex flex-col gap-2 w-full px-6  xl:px-0 pb-4">
      <h1 className="text-4xl font-tds md:text-5xl">Testimonials</h1>
      <p className="text-sm text-black/80 text-balance md:text-lg">
        Hear from our customers about their experiences with our tours and learn
        from their feedback.
      </p>
    </div>
  );
}

function TestimonialsList() {
  return (
    <section className="flex flex-col gap-4  w-full ">
      <div className="flex flex-row overflow-x-auto scrollbar-hide gap-16 p-6  grid grid-cols-1 md:grid-cols-3 w-full xl:px-0">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.reviewer}
            className="flex-shrink-0  flex flex-col items-start justify-start  gap-6 "
          >
            <div className="flex flex-col gap-2 w-full justify-start items-start md:w-full md:gap-4">
              <h2 className="text-xl font-bold text-center  md:text-3xl">
                {testimonial.reviewer}
              </h2>
              <p className="text-sm text-foreground/40 max-w-[250px] md:text-sm">
                {testimonial.review_date}
              </p>

              <p className="text-sm  max-w-[250px] md:text-sm">
                {testimonial.review_text}
              </p>
              <Link
                href={`/tours`}
                className="text-sm  text-center text-tdsRed hover:underline mt-2 md:text-lg"
              >
                View tours {"->"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
