import Hero from "@/components/Hero2";
import ToursList from "@/components/ToursList";
export default function Home() {
  return (
    <main>
      <Hero
        image="/images/enduro.jpg"
        title="Off Road Bike tours and Rentals in Algarve made easy."
        titleColour="black"
        subtitle=""
        titleSize={null}
        buttonText="Guided Tours & Rentals"
        buttonLink="/tours"
        buttonWidth="w-full"
        buttonText2="Reserve Now"
        buttonLink2="/reserve"
      />
      <div className="flex flex-col items-start justify-start w-full gap-6 py-12 pt-6  mx-auto  md:max-w-6xl ">
        <ToursList />
      </div>
    </main>
  );
}
