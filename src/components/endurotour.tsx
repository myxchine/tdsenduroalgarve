import Link from "next/link";
import { Section, Row } from "@/ui/components";
import Gallery from "@/components/gallery";

export default function EnduroTour() {
  return (
    <Section>
      <Row>
        <h2 className="max-w-2xl">
          The Best{" "}
          <strong className="font-normal text-accent">Enduro Tour</strong> in
          Portugal
        </h2>
        <p className="max-w-2xl">
          TDS offers an all inclusive service for those who want{" "}
          <strong>nothing but the best.</strong>
        </p>
        <p>
          A truly curated experience that combines the{" "}
          <strong>best bikes, gear, and routes</strong> for the ultimate enduro
          adventure. With one-on-one service tailored to you, bike, gear, lunch
          and drinks included.
        </p>
        <p>
          Whether you're bringing 10 of your{" "}
          <strong>friends / family on a holiday</strong>
          ride or if you're a solo <strong>pro</strong> interested in training
          Extreme Enduro. We have it all covered.
        </p>
        <Link href={"/tours"} className="hover:underline text-accent mb-4">
          Learn more about the tour {"->"}
        </Link>

        <Gallery />
      </Row>
    </Section>
  );
}
