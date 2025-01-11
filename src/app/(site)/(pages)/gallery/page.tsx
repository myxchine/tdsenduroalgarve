import { tours } from "@/server/db/tours";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { images } from "@/_images/all";
import { Section, Row } from "@/ui/components";

export const metadata: Metadata = {
  title: "Enduro Tour Gallery Portugal",
  description:
    "Take a look at fun, dirty, silly, unique and exciting Gallery with our riders at TDS Algarve on our Portugal Enduro Tours.",
};

export default function ToursPage() {
  return (
    <>
      <Section>
        <Row centered small>
          <h1>
            TDS Enduro Portugal <strong className="text-accent">Gallery</strong>
          </h1>
          <p>
            Take a look at fun, dirty, silly, unique and exciting Gallery with
            our riders at TDS Algarve on our Portugal Enduro Tours.
          </p>
          <Link href={"/tours"} className=" text-accent hover:underline ">
            View our all inclusive tours{"->"}
          </Link>
        </Row>
        <Row>
          <Gallery />
        </Row>
      </Section>
    </>
  );
}

function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 justify-center items-start w-full ">
      {images.map((image, index) => (
        <img
          key={index}
          src={`/images/gallery/${image}`}
          alt={image}
          width={200}
          height={200}
          loading="lazy"
          className="object-cover w-full aspect-square"
          draggable={true}
        />
      ))}
    </div>
  );
}
