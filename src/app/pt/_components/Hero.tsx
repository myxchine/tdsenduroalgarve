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
        alt="tds-enduro-hero"
        quality={75}
        priority={true}
        width={1000}
        height={1000}
        className=" object-cover object-left  w-full h-[400px] md:h-[600px] lg:h-[800px] xl:h-[900px] mt-[-88px]  md:mt-[-96px] z-[-1]"
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
        Passeios e Aluguel de Motos Off-Road em Vilamoura, Algarve, Portugal
      </p>
      <p className="p-6 pt-0 text-center md:text-left md:text-lg md:text-white hidden">
        O TDS Enduro oferece uma oportunidade única para os pilotos de aventura
        explorarem Portugal em motos KTM de elevada qualidade. Os nossos
        passeios levam-no através do diversas paisagens da região do Algarve,
        conhecida pelas suas desafiantes trilhos e belas paisagens. Os
        condutores podem experimentar uma variedade de terrenos, desde caminhos
        de montanha acidentados a trilhos costeiros. As nossas visitas guiadas
        são concebidos para principiantes e condutores experientes,
        proporcionando um ambiente seguro e emocionante aventura. Junte-se ao
        TDS Enduro para um evento organizado por profissionais faça um tour e
        descubra a emoção do enduro num dos locais mais destinos cativantes.
      </p>

      <div className="flex flex-row items-center justify-center gap-3 w-full p-6 pt-0 md:flex-col">
        <Link
          href="/pt/tours"
          className="w-full flex flex-col items-center justify-center"
        >
          <button
            className={`bg-tdsRed text-background  px-8 p-2 uppercase hover:bg-tdsRed/80 mx-auto font-tds rounded w-full`}
          >
            Passeios
          </button>
        </Link>

        <Link
          href="/pt/bikes"
          className="w-full flex flex-col items-center justify-center"
        >
          <button className="bg-foreground text-background w-full p-2 uppercase hover:bg-foreground/80 font-tds rounded">
            Motos
          </button>
        </Link>
      </div>
    </section>
  );
}
