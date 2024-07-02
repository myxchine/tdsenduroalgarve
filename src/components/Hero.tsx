import Image from "next/image";
import Link from "next/link";

export type HeroProps = {
  image: string;
  title: string;
  titleSize: "2xl" | "3xl" | "4xl" | null;
  subtitle: string;
  buttonText: string;
  buttonWidth: "w-full" | "w-normal";
  buttonLink: string;
  buttonText2: string | null | undefined;
  buttonLink2: string | null | undefined;
};

const Hero = ({
  image,
  title,
  titleSize,
  subtitle,
  buttonText,
  buttonWidth,
  buttonLink,
  buttonText2,
  buttonLink2,
}: HeroProps) => {
  return (
    <section className="flex flex-col items-center justify-center w-full">
      <div className="w-full relative flex flex-col items-center justify-center">
        <Image
          src={image}
          alt="hero"
          width={800}
          height={800}
          quality={80}
          priority={true}
          className="w-full full-screen object-cover max-h-[700px] md:max-h-[1000px] lg:max-h-[1200px]"
        />

        <div className="absolute bottom-0 left-0 w-full max-w-xl mx-auto sm:right-0">
          <h1
            className={` ${
              titleSize ? "text-" + titleSize : "text-[21px]"
            }  text-center text-white uppercase p-4 font-tds tracking-wider`}
          >
            {title}
          </h1>
          <p className="text-center text-white pb-4">{subtitle}</p>
          <div className="flex flex-col items-center justify-center space-y-4 w-full p-6 pt-0">
            <Link
              href={buttonLink}
              className="w-full flex flex-col items-center justify-center"
            >
              <button
                className={`bg-tdsRed text-white  px-8 p-2 uppercase hover:bg-tdsRed/80 mx-auto font-tds ${
                  buttonWidth ? buttonWidth : "w-full"
                }`}
              >
                {buttonText}
              </button>
            </Link>
            {buttonLink2 ? (
              <Link href={buttonLink2} className="w-full">
                <button className="bg-white text-black w-full p-2 uppercase hover:bg-white/80 font-tds">
                  {buttonText2}
                </button>
              </Link>
            ) : (
              <div className="h-2"></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
