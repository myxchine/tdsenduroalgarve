import { Row, Section } from "@/ui/components";
import { Metadata } from "next";
import { bikes } from "@/_bikes/all";
import { BikesList } from "@/components/bikes";
import Link from "next/link";
import ExploreArticles from "@/components/explorearticles";
import EnduroTour from "@/components/endurotour";
import SuggestedTestimonialsList from "@/components/suggestedTestimonials";

export const metadata: Metadata = {
  title: "The Best Bike for Enduro Portugal",
  description:
    "TDS emphasises quality for riders who want nothing but the best. The KTM EXC 300 has proven for many years to fulfill this role which is why we have 7 of them fully kitted out and ready to roll.",
};

export default function Bikes() {
  return (
    <>
      <Section>
        <Row centered small>
          <h1>
            The Best <span className="text-accent"> Bike</span> for Enduro
            Portugal
          </h1>
          <p>
            TDS emphasises quality for riders who want{" "}
            <strong>nothing but the best.</strong> The KTM EXC 300 has proven
            for many years to fulfill this role which is why{" "}
            <strong>we have 7 of them fully kitted out</strong> and ready to
            roll.
          </p>
        </Row>
        <Row>
          <BikesList bikes={bikes} />
        </Row>
      </Section>
      <EnduroTour />
      <ExploreArticles />
      <SuggestedTestimonialsList />
    </>
  );
}
