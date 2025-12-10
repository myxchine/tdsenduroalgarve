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
  // FAQ JSON-LD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What’s included in the tour?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "KTM 300 EXC, premium protective gear, expert guide, fuel, water/snacks, and a traditional Portuguese lunch.",
        },
      },
      {
        "@type": "Question",
        name: "Is it suitable for beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We tailor routes and coaching to your level—from first-time riders to advanced hard enduro.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Section full>
        <div className="relative md:bg-black md:pt-12 ">
          {/* Background Image */}
          <Image
            src="/images/herotds.jpg"
            alt="TDS Enduro Tours Algarve, Southern Portugal"
            width={1000}
            height={800}
            priority
            className="object-cover md:absolute inset-0 h-full w-full md:opacity-90"
          />

          {/* Gradient Overlay */}
          <div className="absolute hidden md:block inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/10 z-[1] w-[100%]" />

          {/* Hero Content */}
          <Hero className="relative w-full flex flex-col items-center md:items-start justify-center max-w-6xl mx-auto pt-12 md:py-32 z-[2] text-background px-4 md:px-6" />
        </div>
      </Section>

      {/* Value props */}
      <Section>
        <Row>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2 border border-black/10 rounded-xl shadow p-4 md:p-6">
              <h3>All‑Inclusive & Premium</h3>
              <p>
                KTM 300 EXC fleet, top‑tier gear, expert guide, fuel, water, and
                traditional lunch included.
              </p>
            </div>
            <div className="flex flex-col gap-2 border border-black/10 rounded-xl shadow p-4 md:p-6">
              <h3>Tailored to Your Level</h3>
              <p>
                From first‑time off‑roaders to advanced hard enduro—routes and
                coaching matched to you.
              </p>
            </div>
            <div className="flex flex-col gap-2 border border-black/10 rounded-xl shadow p-4 md:p-6">
              <h3>Private & Small Groups</h3>
              <p>
                Curated, one‑on‑one service or bring friends/family. Memorable
                rides without compromises.
              </p>
            </div>
          </div>
        </Row>
      </Section>

      {/* How it works */}
      <Section>
        <Row>
          <h2>How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3>1. Reserve</h3>
              <p>Select riders and tell us your dates and goals.</p>
            </div>
            <div>
              <h3>2. Prepare</h3>
              <p>
                We confirm details, arrange gear sizes, and plan your route.
              </p>
            </div>
            <div>
              <h3>3. Ride</h3>
              <p>
                Meet in Algarve. Full‑day guided enduro with lunch included.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <Link
              href="/reserve"
              className="bg-accent text-background px-6 py-3 rounded font-accent uppercase hover:bg-accent/80"
            >
              Reserve now
            </Link>
          </div>
        </Row>
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

          <Link href={"/tours"} className="hover:underline text-accent mb-4">
            Learn more about the tour {"->"}
          </Link>

          <TourList tour={tours} />
        </Row>
      </Section>
      <Section>
        <Row>
          <h2>FAQs</h2>
          <div className="flex flex-col gap-4 max-w-3xl">
            <details>
              <summary>Do I need a motorcycle license?</summary>
              <p>
                Not for off‑road enduro with us. We ride legal trails and tailor
                to your level.
              </p>
            </details>
            <details>
              <summary>What’s included?</summary>
              <p>
                Bike, gear, guide, fuel, water/snacks, and a traditional
                Portuguese lunch.
              </p>
            </details>
          </div>
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
            Premium Enduro Tour in Portugal
          </h1>
          <p className="max-w-[500px] mx-auto md:mx-0  md:text-left md:text-xl">
            Ride with the best bikes, gear, and scenery in the world. We offer an all-inclusive
            hard enduro <strong>motorbike adventure</strong> in Algarve,
            Portugal. Tailored to your level and objectives.
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
            className="bg-black text-white w-full p-3 uppercase hover:bg-black/80 font-accent rounded md:bg-white md:text-black md:hover:bg-white/80"
          >
            Reserve Now
          </Link>
          <Link
            href="/articles/whats-enduro"
            className="bg-black text-white w-full p-3 uppercase hover:bg-black/80 font-accent rounded md:bg-white md:text-black md:hover:bg-white/80"
          >
            What is Enduro?
          </Link>
        </div>
      </div>
    </div>
  );
}
