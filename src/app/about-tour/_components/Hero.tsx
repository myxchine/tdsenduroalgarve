import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full relative">
      <div className="w-full relative flex flex-col items-center justify-center">
        <Image
          src="/images/hero.jpg"
          alt="hero-motorbike-tds-enduro-algarve"
          width={900}
          height={800}
          quality={60}
          priority={true}
          className="w-full full-screen object-cover max-h-[700px] md:max-h-[1000px] lg:max-h-[1200px]"
        />

        <div className="absolute flex flex-col bottom-0 left-0 w-full  md:max-w-6xl  mx-auto md:right-0 md:h-screen md:items-end md:justify-center  md:w-screen md:text-left max-h-[700px] md:max-h-[1000px] lg:max-h-[1200px]">
          <section className="w-full md:max-w-md right-0">
            <div>
              <h1
                className={` text-white text-3xl text-center  uppercase p-4 pb-2 font-tds md:text-left md:text-5xl text-balance md:text-black`}
              >
                Learn about our full day Off Road TOUR
              </h1>
              <p className="text-center text-white pb-4 px-6 md:text-left md:text-black">
                Motorbike hire in Faro District, Portugal
              </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4 w-full p-6 pt-0">
              <Link
                href="/tours/off-road-enduro-bike-rental"
                className="w-full flex flex-col items-center justify-center"
              >
                <button
                  className={`bg-tdsRed text-white  px-8 p-2 uppercase hover:bg-tdsRed/80 mx-auto font-tds rounded w-full  `}
                >
                  View Packages
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
