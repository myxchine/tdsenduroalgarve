import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-foreground flex flex-col items-center justify-center gap-0  md:gap-4 relative  ">
      <HeroImage />
      <Title />
    </section>
  );
}

function HeroImage() {
  return (
    <section className="w-full flex ">
      <Image
        src="/images/enduro.jpg"
        alt="hero"
        quality={75}
        priority={true}
        width={1000}
        height={1000}
        className=" object-cover object-left  w-full h-[400px] md:h-[600px] lg:h-[800px] xl:h-[1100px] mt-[-88px]  md:mt-[-96px] z-[-1]"
      />
    </section>
  );
}

function Title() {
  return (
    <section className="w-full md:max-w-2xl lg:max-w-md right-0 lg:absolute xl:right-32 py-4 ">
      <h1
        className={` text-foreground text-3xl text-balance text-center md:text-5xl  uppercase p-4 font-tds tracking-wider lg:text-left lg:text-6xl text-balance lg:text-background`}
      >
        Enduro Portugal
      </h1>
      <p className="p-6 pt-0 text-center md:text-left md:text-lg md:text-white ">
        Off Road Bike tours & Rentals in Portugal
      </p>
      <p className="p-6 pt-0 text-center md:text-left md:text-lg md:text-white hidden">
        TDS Enduro offers a unique opportunity for adventure riders to explore
        Portugal on top-quality KTM motorbikes. Our tours take you through the
        diverse landscapes of the Algarve region, known for its challenging
        trails and beautiful scenery. Riders can experience a variety of
        terrains, from rugged mountain paths to coastal tracks. Our guided tours
        are designed for both beginners and experienced riders, providing a safe
        and exciting adventure. Join TDS Enduro for a professionally organized
        tour and discover the thrill of enduro riding in one of Europe's most
        captivating destinations.
      </p>

      <div className="flex flex-row items-center justify-center gap-3 w-full p-6 pt-0 md:flex-col">
        <Link
          href="/tours"
          className="w-full flex flex-col items-center justify-center"
        >
          <button
            className={`bg-tdsRed text-background  px-8 p-2 uppercase hover:bg-tdsRed/80 mx-auto font-tds rounded w-full`}
          >
            Tours
          </button>
        </Link>

        <Link
          href="/bikes"
          className="w-full flex flex-col items-center justify-center"
        >
          <button className="bg-foreground text-background w-full p-2 uppercase hover:bg-foreground/80 font-tds rounded">
            Bikes
          </button>
        </Link>
      </div>
    </section>
  );
}
