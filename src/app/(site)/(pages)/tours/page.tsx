import { Section, Row, Button } from "@/ui/components";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/gallery";
import { testimonials } from "@/_testimonials/all";
import Bike from "@/components/bike";
import ExploreArticles from "@/components/explorearticles";
import { Pricing } from "@/components/tours";
import { tours } from "@/_tours/all";
import TestimonialsList from "@/components/testimonials";
export const metadata: Metadata = {
  title: "Enduro Tours Portugal",
  description:
    "All enclusive premium enduro tours in Southern Portugal (Algarve) for those who want nothing but the best. We offer the beautiful Algarve experience whilst making sure you have a great time with everything prepared for you.",
  openGraph: {
    title: "Enduro Tours Portugal",
    description:
      "All enclusive premium enduro tours in Southern Portugal (Algarve) for those who want nothing but the best. We offer the beautiful Algarve experience whilst making sure you have a great time with everything prepared for you.",
  },
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
  // JSON-LD blocks
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What’s included in the TDS Enduro tour?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KTM 300 EXC, premium protective gear, expert guide, fuel, water/snacks, and traditional Portuguese lunch.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a motorcycle license?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For off-road enduro in Portugal, a bike license is not required. We tailor routes to your skill level.",
        },
      },
      {
        "@type": "Question",
        name: "What group sizes do you support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "From solo riders to groups of 3+ riders. For larger private groups, contact us to plan a bespoke day.",
        },
      },
      {
        "@type": "Question",
        name: "What time does the tour start and how long is it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically 8–9am start depending on season; riding most of the day with lunch included. Return by mid/late afternoon.",
        },
      },
      {
        "@type": "Question",
        name: "Is the tour suitable for beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We tailor terrain and coaching to your level—from first-timers to advanced hard enduro riders.",
        },
      },
    ],
  };

  const productsJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "TDS Algarve Enduro Tour (All-Inclusive)",
    brand: { "@type": "Brand", name: "TDS Enduro Algarve" },
    description:
      "All-inclusive premium enduro tour in Algarve: KTM 300 EXC, gear, expert guide, fuel, water/snacks, and lunch included.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: tours.startingPrice,
      highPrice: 380,
      offerCount: tours.packages.length,
      availability: "https://schema.org/InStock",
      url: "https://tdsenduroalgarve.com/tours",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
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
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-6">
            <div className="flex flex-col gap-4">
              <h2>
                An all inclusive{" "}
                <span className="text-accent">Off-Road Experience</span>
              </h2>
              <p>
                Start your enduro adventure with us in the morning (in the
                winter around 9am but in summer around 8am details provided when
                you request booking) as we take you on a unique expert tour
                through beautiful terrain, single tracks, hill climbs and more
                all tailored to your skill level.
              </p>
              <p>
                Everything you need is included such as the bike, tour,
                traditional lunch, gear and more!
              </p>
              <p>
                The ride will take up most of the day (normally back home around
                3pm) and you are sure to be satisfied by the end ready to go
                home and sleep!
              </p>
              <p>
                Whether you're bringing 10 of your{" "}
                <strong>friends / family on a holiday </strong>
                ride or if you're a solo <strong>pro</strong> interested in
                training Extreme Enduro. We have it all covered.
              </p>
              <ul className="list-disc pl-5 text-black/80">
                <li>
                  Exclusive KTM 300 EXC fleet (7 bikes) prepared for Algarve
                </li>
                <li>Premium gear across sizes; traditional lunch and drinks</li>
                <li>Private or small-group guided rides tailored to level</li>
                <li>Routes ranging from scenic singletrack to hard enduro</li>
              </ul>
            </div>

            <Image
              src="/images/articles/0.jpg"
              className="object-cover aspect-[4/3] max-w-md w-full md:order-first"
              height={400}
              width={500}
              alt="All inclusive off-road experience in Algarve, Portugal"
            />
          </div>

          <Pricing tour={tours} />
        </Row>
      </Section>

      <Section>
        <Row>
          <h2>Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4 max-w-3xl">
            <details>
              <summary>Do I need a motorcycle license?</summary>
              <p>
                For off-road enduro in Portugal, a bike license is not required.
              </p>
            </details>
            <details>
              <summary>What’s included?</summary>
              <p>
                KTM 300 EXC, premium protective gear, expert guide, fuel,
                snacks, water, and a traditional lunch.
              </p>
            </details>
            <details>
              <summary>What group sizes do you support?</summary>
              <p>
                Solo riders to groups of 3+ riders. For larger private groups,
                contact us to customize.
              </p>
            </details>
            <details>
              <summary>How long is the day?</summary>
              <p>
                We start around 8–9am depending on season and ride through the
                day with a lunch stop.
              </p>
            </details>
            <details>
              <summary>Is it suitable for beginners?</summary>
              <p>
                Yes. Routes and coaching are tailored to your level, from
                complete beginner to advanced.
              </p>
            </details>
          </div>
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
