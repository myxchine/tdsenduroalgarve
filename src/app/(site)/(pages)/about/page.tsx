import { Section, Row, Button } from "@/ui/components";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import SuggestedTestimonialsList from "@/components/suggestedTestimonials";
import Bike from "@/components/bike";
import EnduroTour from "@/components/endurotour";
import ExploreArticles from "@/components/explorearticles";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "TDS Enduro Algarve offers premium enduro tours in Southern Portugal for riders who want nothing but the best. We emphasise on quality and experience making sure no corners are cut.",
};

function Hero(props: any) {
  return (
    <div {...props}>
      <div className="flex flex-col gap-6 max-w-xl  text-center mx-auto ">
        <h1 className="text-balance">
          <span className="text-accent">About</span> Us
        </h1>
        <p>
          <strong>TDS Enduro Algarve</strong> offers premium enduro tours in
          Southern Portugal for riders who want{" "}
          <strong>nothing but the best.</strong> We emphasise on quality and
          experience making sure no corners are cut.
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
          src="/images/tds.jpg"
          alt="About TDS Enduro Algarve | Premium Enduro Tours Portugal"
          width={1200}
          height={800}
          priority={true}
          className="object-cover w-full h-[300px] md:h-[600px] lg:h-[800px] z-[-10] relative"
        />
        <Hero className="z-[10000000] w-full  flex flex-col items-center justify-center m pt-4 text-foreground " />
      </Section>
      <EnduroTour />
      <Bike />
      <Section>
        <Row>
          <h2>Why TDS?</h2>

          <ul>
            <li>
              <strong>Expert Guidance</strong>: Our tours are led by Francisco,
              a seasoned hard enduro competitor with experience in top events
              like the Roof of Africa. His expertise ensures you ride with
              confidence and precision.
            </li>
            <li>
              <strong>Top-Tier Equipment</strong>: Ride the unbeatable KTM 300
              EXC, paired with the industry’s best gear, providing you with
              unparalleled performance and safety.
            </li>
            <li>
              <strong>Custom Routes</strong>: Our trails are carefully designed
              and tailored to your skill level, delivering the perfect balance
              of challenge and excitement.
            </li>
            <li>
              <strong>All-Inclusive Packages</strong>: Enjoy a seamless
              experience with everything included—transport, bikes, gear,
              guiding, lunch at top Portuguese restaurants, and optional
              accommodation.
            </li>
            <li>
              <strong>Personalized Experience</strong>: Our one-on-one setup
              ensures a curated adventure with personalized guidance and full
              attention to your needs.
            </li>
            <li>
              <strong>Global Recognition</strong>: Riders from across the
              world—England, USA, Australia, and beyond—trust us for an
              unforgettable enduro adventure, with 90% returning for another
              tour.
            </li>
          </ul>
        </Row>
        <Row>
          <h2>Our Commitment</h2>

          <p>At TDS Enduro, we are dedicated to:</p>
          <ul>
            <li>
              <strong>Authenticity</strong>: Crafting genuine, unforgettable
              enduro experiences tailored to each rider’s skill level and
              passion for the sport.
            </li>
            <li>
              <strong>Excellence</strong>: Delivering the best in every
              aspect—from premium bikes and gear to expertly designed routes and
              top-tier service.
            </li>
            <li>
              <strong>Inspiration</strong>: Empowering riders to push their
              limits, discover breathtaking trails, and fully immerse themselves
              in the thrill of enduro riding.
            </li>
          </ul>
        </Row>
        <Row>
          <h2>Join Us</h2>

          <p>
            Whether you're an experienced rider craving the ultimate challenge,
            an enthusiast eager to refine your skills, or someone drawn to the
            adventure and beauty of enduro, TDS Enduro is your destination. Join
            us for an unparalleled journey where every trail, every obstacle,
            and every ride becomes a story to remember.
          </p>

          <p>
            Discover, ride, and experience the thrill of premium enduro with
            TDS.
          </p>

          <p>
            <strong>
              Ride the best. Explore the best. Live the adventure. TDS Enduro —
              The Ultimate Enduro Experience.
            </strong>
          </p>

          <Link href="/reserve" className="text-accent hover:underline">
            Reserve Now {"->"}
          </Link>
        </Row>
      </Section>
      <ExploreArticles />
      <SuggestedTestimonialsList />
    </>
  );
}
