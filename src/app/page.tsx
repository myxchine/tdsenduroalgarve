import Hero from "@/components/Hero";
import Vanilla from "@/components/Vanilla";
import BikeList from "@/components/BikeList";
export default function Home() {
  return (
    <main>
      <Hero
        image="/images/hero.jpg"
        title="Enduro tours in Algarve have never been this easy."
        subtitle=""
        titleSize={null}
        buttonText="Off Road Bike Rental"
        buttonLink="/off-road-bike-rental"
        buttonWidth="w-full"
        buttonText2="Book a tour"
        buttonLink2="/reserve"
      />
      <Vanilla
        title="Relax and enjoy the ride"
        text="No more preparing your own bike, gear, transport and tracks to ride on."
        buttonText="Reserve Now"
        buttonLink="/reserve"
      />
      <BikeList />
    </main>
  );
}
