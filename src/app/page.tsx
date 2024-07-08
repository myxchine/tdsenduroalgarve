import Hero from "@/components/Hero";
import ToursList from "@/components/ToursList";
export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex flex-col items-start justify-start w-full gap-6 py-12 pt-6 pb-0  mx-auto ">
        <ToursList />
      </div>
    </main>
  );
}
