import { Row, Section } from "@/ui/components";
import { Metadata } from "next";
import { bikes } from "@/_bikes/all";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import EnduroTour from "@/components/endurotour";
import Bike from "@/components/bike";
import SuggestedTestimonialsList from "@/components/suggestedTestimonials";
import ExploreArticles from "@/components/explorearticles";
export const dynamic = "force-static";

import Spces from "./specs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const bike = bikes.find((bike) => bike.slug === slug);
  if (!bike) {
    return notFound();
  }
  const title = bike.name + " Enduro Tour in Portugal";
  const description = bike.excerpt;
  return {
    title: title,
    description: description,
    openGraph: {
      title,
      images: [`/images/bikes/${bike.image}`],
    },
  };
}
export function generateStaticParams() {
  return bikes.map((bike: any) => ({
    slug: bike.slug,
  }));
}
export default async function Bikes({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const bike = bikes.find((bike) => bike.slug === slug);

  if (!bike) {
    return notFound();
  }

  return (
    <>
      <Section>
        <Row>
          <div className="flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-6  md:gap-8">
              <h1>
                <span className="text-accent">{bike.name}</span> Enduro Tour in
                Portugal
              </h1>
              <Performance bike={bike} />

              <p>{bike.excerpt}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/tours`}
                  className="hover:underline text-accent mb-4"
                >
                  See the tour {"->"}
                </Link>
                <a
                  href="https://endurowow.com/bikes/ktm-300-exc"
                  className="text-accent hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn more about the KTM EXC 300 {"->"}
                </a>
              </div>
            </div>

            <Image
              src={`/images/bikes/${bike.image}`}
              alt={bike.name}
              width={800}
              height={600}
              quality={75}
              priority={true}
              className="w-full h-auto aspect-[13/9] object-cover my-0 max-w-[700px]"
            />
          </div>
        </Row>
      </Section>
      <EnduroTour />
      <Bike />
      <SuggestedTestimonialsList />
      <ExploreArticles />
    </>
  );
}

function Performance({ bike }: { bike: any }) {
  return (
    <ul className="specs">
      {bike.engine.powerHP && (
        <li>
          <strong> {bike.engine.powerHP} </strong> HP
        </li>
      )}
      <li>
        <strong>{bike.specs.weight.toFixed(1)}</strong> kg
      </li>
      <li>
        Fuel capacity <strong>{bike.specs.fuelCapacity}</strong> liters
      </li>
      <li>
        Seat height <strong>{bike.specs.seatHeight}</strong> millimeters
      </li>
    </ul>
  );
}
