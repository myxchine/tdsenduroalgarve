import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full relative">
      <div className="w-full relative flex flex-col items-center justify-center">
        <Image
          src={`/images/enduro.jpg`}
          alt="hero"
          width={800}
          height={800}
          quality={65}
          priority={true}
          className="w-full full-screen object-cover max-h-[700px] md:max-h-[1000px] lg:max-h-[1200px]"
        />

        <div className="absolute flex flex-col bottom-0 left-0 w-full  md:max-w-6xl  mx-auto md:right-0 md:h-screen md:items-end md:justify-center  md:w-screen md:text-left max-h-[700px] md:max-h-[1000px] lg:max-h-[1200px]">
          <section className="w-full md:max-w-md right-0">
            <h1
              className={` text-white  md:text-white text-[21px] text-center  uppercase p-4 font-tds tracking-wider md:text-left md:text-5xl text-balance`}
            >
              Off Road Bike tours and Rentals in Algarve made easy.
            </h1>
            <div className="flex flex-col items-center justify-center space-y-4 w-full p-6 pt-0">
              <Link
                href="/tours"
                className="w-full flex flex-col items-center justify-center"
              >
                <button
                  className={`bg-tdsRed text-white  px-8 p-2 uppercase hover:bg-tdsRed/80 mx-auto font-tds rounded w-full`}
                >
                  Guided Tours & Rentals
                </button>
              </Link>
              <Link href="/reserve" className="w-full">
                <button className="bg-white text-black w-full p-2 uppercase hover:bg-white/80 font-tds rounded">
                  Reserve Now
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Hero;
