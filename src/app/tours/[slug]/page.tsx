import { data } from "@/server/data";
import Title from "./_components/Title";
import BikeInfo from "./_components/BikeInfo";
import GuideInfo from "./_components/GuideInfo";
import Packages from "./_components/Packages";
import { redirect } from "next/navigation";
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
    redirect("/tours/off-road-enduro-bike-rental");
  }
  return (
    <section className="flex flex-col items-center justify-center w-full pb-8 max-w-6xl mx-auto xl:px-0">
      <Title />
      <section className=" p-6 md:p-0 w-full flex flex-col ">
        <section className=" w-full flex flex-col md:flex-row hidden">
          <BikeInfo category={category} />
          <div className="flex flex-col items-center justify-center space-y-4 w-full py-8 w-full md:w-fit md:px-8">
            <span className="text-4xl ">+</span>
          </div>
          <GuideInfo />
        </section>
        <Packages category={category} />
      </section>
    </section>
  );
}
