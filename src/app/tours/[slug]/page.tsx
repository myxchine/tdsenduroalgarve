import { data } from "@/server/data";
import Title from "./_components/Title";
import BikeInfo from "./_components/BikeInfo";
import GuideInfo from "./_components/GuideInfo";
import Packages from "./_components/Packages";
import { redirect } from "next/navigation";
export default function ToursList({ params }: { params: { slug: string } }) {
  const category = data.tours.categories.find((c) => c.slug === params.slug);

  if (!category) {
    redirect("/tours/off-road-enduro-bike-rental");
  }
  return (
    <section className="flex flex-col items-center justify-center w-full pb-8 max-w-6xl mx-auto md:px-0">
      <Title />
      <section className=" p-6 md:p-0 w-full flex flex-col ">
        <section className=" w-full flex flex-col md:flex-row">
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
