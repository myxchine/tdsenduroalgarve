import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { market } from "@/_market/bikes";
import { Section, Row } from "@/ui/components";

export const metadata: Metadata = {
  title: "Buy Enduro Motorbikes in Portugal",
  description:
    "Take a look at premium enduro motorbikes for sale in Portugal, both brand new and second hand. Choose the one that suits your needs and get started on your motorbike adventure.",
};

export default function Bikes() {
  return (
    <div className="flex flex-col  gap-8 py-8 max-w-6xl mx-auto">
      <Section>
        <Row>
          <Title />
          <MarketList />
        </Row>
      </Section>
    </div>
  );
}
function Title() {
  return (
    <div className="flex flex-col gap-2 w-full px-6  xl:px-0 pb-4">
      <h1 className="text-4xl font-tds md:text-5xl">
        <span className="text-accent">Buy </span> Enduro Motorbikes in Portugal
      </h1>
      <p className="text-sm text-black/80 text-balance md:text-lg">
        Take a look at the motorbikes we have for sale in Algarve. Both brand
        new and second-hand KTM motorbikes are available.
      </p>
    </div>
  );
}

function MarketList() {
  return (
    <div className="flex flex-col w-full  p-6 xl:px-0">
      <div className="flex flex-col gap-8 w-full  md:grid md:grid-cols-2 md:gap-16 max-w-6xl mx-auto py-4 xl:px-0 ">
        {market.map((bike) => (
          <div
            className="flex flex-col items-start gap-8 bg-white w-full   relative"
            key={bike.id}
          >
            <Image
              src={`/images/market/${bike.slug}/1.jpg`}
              alt={`${bike.slug}-1}`}
              width={500}
              height={500}
              className="object-cover w-full"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-tds uppercase">{bike.name}</h1>
              <p className="text-xs text-black/80 md:text-sm">
                {bike.location}
              </p>
              <p className="text-xs text-black/80 md:text-sm">{bike.shout}</p>

              <Link
                href={`/market/${bike.slug}`}
                className="w-full text-tdsRed hover:underline"
              >
                Learn more {"->"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
