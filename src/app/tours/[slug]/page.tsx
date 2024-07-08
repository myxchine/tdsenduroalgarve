import { data } from "@/server/db/data";
import Title from "./_components/Title";
import Packages from "./_components/Packages";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return data.tours.categories.map(({ slug }) => ({
    slug,
  }));
}
export const metadata: Metadata = {
  title: "Off Road Bike Tour & Rental, Portugal",
  description:
    "The full day off road motorbike enduro adventure you'll never forget this holiday. We offer the beautiful Algarve experience whilst making sure you have a great time with everything prepared for you.! The perfect way to explore the region and experience the local culture whether with friends, family or by yourself.",
};

export default async function ToursList({
  params,
}: {
  params: { slug: string };
}) {
  const category = data.tours.categories.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }
  return (
    <section className="flex flex-col items-center justify-center w-full ">
      <Title />
      <Packages category={category} />
    </section>
  );
}
