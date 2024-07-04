import Hero from "@/components/Hero";
import ToursList from "@/components/ToursList";
export default function Home() {
  return (
    <main>
      <Hero
        image="/images/hero.jpg"
        title="Off Road Bike tours and Rentals in Algarve made easy."
        subtitle=""
        titleSize={null}
        buttonText="Off Road Bikes"
        buttonLink="tours/off-road-enduro-bike-rental"
        buttonWidth="w-full"
        buttonText2="Reserve a day"
        buttonLink2="/reserve"
      />
      <div className="flex flex-col items-center justify-center w-full gap-6 py-12 pt-6  mx-auto  md:max-w-6xl ">
        <ToursList />
      </div>
    </main>
  );
}
