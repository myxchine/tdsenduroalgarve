import Hero from "./_components/Hero";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre o Tour de Motocicleta Off-Road Enduro",
  description:
    "Junte-se a um dos nossos guias experientes para um emocionante passeio de um dia inteiro pela bela região do Algarve, enquanto pilota uma KTM EXC-300! Fornecemos todo o equipamento de segurança necessário e compartilhamos nossas melhores técnicas de pilotagem. O almoço está incluído no passeio. Oferecemos uma experiência incrível no Algarve, garantindo que você tenha um ótimo tempo com tudo preparado para você! A maneira perfeita de explorar a região e vivenciar a cultura local, seja com amigos, família ou sozinho.",
};

export default function AboutTour() {
  return (
    <section>
      <Hero />
      <div className="flex flex-col gap-8 py-12 w-full max-w-6xl mx-auto md:gap-8">
        <section className="flex flex-col px-6 gap-6 ">
          <div>
            <h2 className="text-3xl mb-2 uppercase font-tds tracking-wider w-full md:text-5xl">
              Sobre o Tour
            </h2>
            <p className="w-full text-sm text-black/80">
              Junte-se aos nossos guias experientes para um emocionante passeio
              de um dia inteiro pela deslumbrante região do Algarve em uma KTM
              EXC-300! Fornecemos todo o equipamento de segurança necessário e
              compartilhamos nossas principais técnicas de pilotagem. Um almoço
              tradicional nas montanhas está incluído!
              <br />
              <br />
              Nossos trilhos únicos atendem a pilotos de todos os níveis de
              habilidade. Seu equipamento estará pronto para você, para que você
              possa subir em uma das nossas motas de Enduro totalmente equipadas
              e desfrutar de um passeio inesquecível. O dia é seu para explorar,
              com nossos guias adaptando a experiência com base no seu feedback.
              O melhor de tudo é que tudo está incluído no seu pacote sem custos
              ocultos!
            </p>
          </div>

          <Link href={`/pt/tours`} className="w-full">
            <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center md:px-8 md:text-lg">
              Vamos lá
            </button>
          </Link>
        </section>

        <section className="flex flex-col p-6 gap-4 pb-0">
          <h3 className="text-3xl uppercase font-tds tracking-wider w-full md:text-5xl">
            Incluído
          </h3>
          <div className="w-full text-sm text-black/80 md:text-lg">
            <ul>
              <li>Mota KTM EXC 300</li>
              <li>Guia de Tour de Dia Inteiro</li>
              <li>Todo o equipamento de proteção e pilotagem</li>
              <li>Almoço</li>
              <li>Água e lanches</li>
              <li>Combustível</li>
            </ul>
          </div>
        </section>
        <section className="flex flex-col p-6 pt-0 gap-4">
          <Image
            src="/images/bikes/enduro.png"
            alt="tour de enduro"
            width={400}
            height={400}
            priority={true}
            className="w-full object-cover rounded "
          />
        </section>
      </div>
    </section>
  );
}
