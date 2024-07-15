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
        quality={85}
        priority={true}
        width={800}
        height={800}
        className=" object-cover object-left  w-full h-[400px] md:h-[600px] lg:h-[800px] mt-[-88px]  md:mt-[-96px] z-[-1]"
      />
    </section>
  );
}

function Title() {
  return (
    <section className="w-full md:max-w-2xl lg:max-w-md right-0 lg:absolute xl:right-32 py-4 ">
      <h1
        className={` text-foreground text-2xl text-balance text-center md:text-4xl  uppercase p-4 font-tds tracking-wider lg:text-left lg:text-5xl text-balance lg:text-background`}
      >
        Off Road Bike tours & Rentals in Portugal
      </h1>
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
