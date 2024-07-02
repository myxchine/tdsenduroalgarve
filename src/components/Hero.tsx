import Image from "next/image";
import Link from "next/link";

export type HeroProps = {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  buttonText2: string;
  buttonLink2: string;
};

const Hero = ({
  image,
  title,
  subtitle,
  buttonText,
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
          width={1000}
          height={1000}
          quality={100}
          priority={true}
          className="w-full full-screen object-cover max-h-[700px]"
        />

        <div className="absolute bottom-0 left-0 w-full max-w-xl mx-auto">
          <h1 className="text-[21px] font-bold text-center text-white uppercase p-4 font-tds tracking-wider">
            {title}
          </h1>
          <p className="text-center">{subtitle}</p>
          <div className="flex flex-col items-center justify-center space-y-4 w-full p-6 pt-0">
            <button className="bg-tdsRed text-white font-bold w-full p-2 uppercase hover:bg-tdsRed/80">
              <Link href={buttonLink}>{buttonText}</Link>
            </button>
            <button className="bg-white text-black font-bold w-full p-2 uppercas hover:bg-white/80">
              <Link href={buttonLink2}>{buttonText2}</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
