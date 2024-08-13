import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full relative ">
      <div className="w-full relative flex flex-col items-center justify-center">
        <Image
          src="/images/hero.jpg"
          alt="hero-motorbike-tds-enduro-algarve"
          width={900}
          height={800}
          quality={60}
          priority={true}
          className="w-full  object-cover h-[400px] md:h-[600px] lg:h-[800px] xl:h-[900px] mt-[-88px]  md:mt-[-96px] z-[-1]"
        />

        <div className="w-full md:max-w-2xl lg:max-w-md right-0 lg:absolute xl:right-32 py-4 ]">
          <section className="w-full md:max-w-md right-0">
            <div>
              <h1
                className={` text-3xl text-center  uppercase p-4 pb-2 font-tds md:text-left md:text-5xl text-balance md:text-black`}
              >
                Learn about our full day Off Road Tour
              </h1>
              <p className="text-center pb-4 px-6 md:text-left md:text-black">
                Motorbike hire in Faro District, Portugal
              </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4 w-full p-6 pt-0">
              <Link
                href="/tours"
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
