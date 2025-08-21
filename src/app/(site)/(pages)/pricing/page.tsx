import Link from "next/link";
import { Section, Row } from "@/ui/components";
import { tours } from "@/_tours/all";
import ExploreArticles from "@/components/explorearticles";
import { TourList } from "@/components/tours";
import EnduroTour from "@/components/endurotour";
import { Metadata } from "next";
import Bike from "@/components/bike";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "TDS offers curated tours whether you're bringing 10 of your friends/ family on a holiday ride or if you're a solo pro interested in training Extreme Enduro. We have it all covered..",
};

export default function Home() {
  return (
    <>
      <Section>
        <Row>
          <h1>Pricing</h1>
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
      <EnduroTour />
      <Bike />
      <ExploreArticles />
    </>
  );
}
