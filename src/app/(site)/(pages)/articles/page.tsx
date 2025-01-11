import { Metadata } from "next";
import { getAllPosts } from "@/server/api";
import { Section, Button, Row } from "@/ui/components";
import Articles from "@/components/articles";
import Link from "next/link";
import Bike from "@/components/bike";
import EnduroTour from "@/components/endurotour";
import SuggestedTestimonialsList from "@/components/suggestedTestimonials";

export const metadata: Metadata = {
  title: "Enduro Portugal Articles",
  description:
    "TDS Enduro Algarve, Portugal emphasises quality for riders who want nothing but the best. Explore our curated articles revolving around Enduro from Hard Enduro information to experiences and tips.",
};

export default function LatestArticles() {
  const articles = getAllPosts();
  return (
    <>
      <Section>
        <Row centered small>
          <h1>
            Enduro Portugal <span className="text-accent">Articles</span>{" "}
          </h1>
          <p>
            TDS Enduro Algarve, Portugal emphasises quality for riders who want{" "}
            <strong>nothing but the best.</strong> Explore our curated articles
            revolving around Enduro from Hard Enduro information to experiences
            and tips.
          </p>
        </Row>
        <Row>
          <Articles articles={articles} />
        </Row>
      </Section>
      <EnduroTour />
      <Bike />
      <SuggestedTestimonialsList />
    </>
  );
}
