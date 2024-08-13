import Image from "next/image";
import Link from "next/link";
import { tours_PT } from "@/server/db/tours_PT";
import { bikes_PT as bikes } from "@/server/bikes_PT";
import EnduroPortugal from "./_components/Hero";
export default function Home() {
  return (
    <>
      <EnduroPortugal />
      <PortugalEnduroTours />
      <KTMTopoftheLineBikes />
      <Posts />
      <EnduroToursAlgarve />
      <AboutTheTour />
      <IntroductiontoDifficultyLevels />
      <OffRoadAdventures />
      <WhatToExpect />
      <AlgarveMotorcycleTours />
      <MotorbikeHolidayPortugal />
      <MotorcycleToursInAlgarvePortugal />
    </>
  );
}

function IntroductiontoDifficultyLevels() {
  return (
    <section className="px-6 py-12  mx-auto w-fit">
      <div className="max-w-xl mx-auto  flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl   mb-2  uppercase font-tds tracking-wider  md:text-5xl max-w-xl">
            Introdução aos Níveis de Dificuldade
          </h2>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            Oferecemos uma variedade de níveis de dificuldade para atender
            motociclistas de todos os níveis de habilidade.
          </p>
          <ul className="flex flex-col gap-4">
            <li>
              <h3>Iniciante</h3>
              <p>
                Este é o passeio mais amigável para iniciantes, adequado para
                motociclistas que são novos no enduro. Oferece um passeio suave
                pelas colinas e aldeias pitorescas do sul de Portugal.
              </p>
            </li>
            <li>
              <h3>Intermediário</h3>
              <p>
                Este passeio é adequado para motociclistas com alguma
                experiência em enduro e que procuram um passeio mais desafiador.
                Oferece uma mistura de estradas cênicas e terrenos desafiadores,
                proporcionando uma experiência única e emocionante.
              </p>
            </li>
            <li>
              <h3>Avançado</h3>
              <p>
                Este passeio é adequado para motociclistas com experiência em
                enduro que estão em busca de um desafio maior. Oferece uma
                combinação de estradas cênicas e terrenos desafiadores,
                proporcionando uma experiência única e emocionante.
              </p>
            </li>
          </ul>
        </div>
        <Link href={"/pt/tours"} className="w-full">
          <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center  md:px-8 md:text-lg">
            Reserve o Seu Passeio no Nível de Dificuldade Hoje!
          </button>
        </Link>
      </div>
    </section>
  );
}

function AlgarveMotorcycleTours() {
  return (
    <section className="px-6 py-12  mx-auto w-fit">
      <div className="max-w-6xl mx-auto  flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl   mb-2  uppercase font-tds tracking-wider  md:text-5xl max-w-xl">
            Tours de Motocicleta no Algarve: Explore o Melhor do Sul de Portugal
          </h2>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            Você está à procura de um tour de motocicleta único e emocionante na
            região do Algarve em Portugal? Nossos tours guiados irão levá-lo em
            uma aventura inesquecível através das colinas onduladas, costa
            acidentada e aldeias pitorescas do sul de Portugal.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            Nossos tours de motocicleta no Algarve são projetados para
            proporcionar uma experiência sem preocupações, com tudo cuidado
            desde o momento em que você chega. Desde as estradas cênicas até as
            paisagens deslumbrantes, nossos guias especializados irão mostrar a
            você o melhor do Algarve sobre duas rodas.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            O que está incluído nos nossos pacotes de tours de motocicleta no
            Algarve? Temos tudo preparado para você:
          </p>

          <ul className="list-disc pl-4">
            <li>Tour guiado com um guia experiente</li>
            <li>Aluguel de motocicleta de alta qualidade</li>
            <li>Veículo de apoio e transferência de bagagem</li>
            <li>Café da manhã e almoço todos os dias</li>
            <li>
              Hospedagem em um hotel ou pousada cuidadosamente selecionado
            </li>
          </ul>
        </div>

        <Link href={"/pt/tours"} className="w-full">
          <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center  md:px-8 md:text-lg">
            Reserve o Seu Tour de Motocicleta no Algarve Hoje!
          </button>
        </Link>
      </div>
    </section>
  );
}

function MotorcycleToursInAlgarvePortugal() {
  return (
    <section className="px-6 py-12  mx-auto w-fit">
      <div className="max-w-6xl mx-auto  flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl   mb-2  uppercase font-tds tracking-wider  md:text-5xl max-w-xl">
            Tours de Motocicleta no Algarve, Portugal: Experimente a Viagem
            Definitiva
          </h2>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            Você está pronto para o tour de motocicleta definitivo na região do
            Algarve, em Portugal? Nossos tours guiados irão levá-lo em uma
            aventura inesquecível através das colinas onduladas, costa
            acidentada e aldeias pitorescas do sul de Portugal.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            Nossos tours de motocicleta no Algarve, Portugal, são projetados
            para proporcionar uma experiência única e emocionante, com foco na
            segurança e no prazer. Nossos guias especializados irão levá-lo por
            um passeio pelas melhores paisagens do Algarve, com uma mistura de
            estradas cênicas, terrenos desafiadores e cenários deslumbrantes.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            O que você pode esperar dos nossos tours de motocicleta no Algarve,
            Portugal? Temos tudo preparado para você:
          </p>

          <ul className="list-disc pl-4">
            <li>Tour guiado com um guia experiente</li>
            <li>Aluguel de motocicleta de alta qualidade</li>
            <li>Veículo de apoio e transferência de bagagem</li>
            <li>Café da manhã e almoço todos os dias</li>
            <li>
              Hospedagem em um hotel ou pousada cuidadosamente selecionado
            </li>
          </ul>
        </div>

        <Link href={"/pt/tours"} className="w-full">
          <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center  md:px-8 md:text-lg">
            Reserve o Seu Tour de Motocicleta no Algarve, Portugal, Hoje!
          </button>
        </Link>
      </div>
    </section>
  );
}

function MotorbikeHolidayPortugal() {
  return (
    <section className="px-6 py-12  mx-auto w-fit">
      <div className="max-w-6xl mx-auto  flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl   mb-2  uppercase font-tds tracking-wider  md:text-5xl max-w-xl">
            Férias de Motocicleta em Portugal: Explore o Melhor do Algarve
          </h2>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            Você está procurando umas férias de motocicleta em Portugal que
            combinam cenários deslumbrantes, estradas emocionantes e uma
            experiência cultural única? Não procure mais! A região do Algarve,
            onde nossos tours guiados de motocicleta o levarão em uma aventura
            inesquecível.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            Nossas férias de motocicleta em Portugal são projetadas para
            proporcionar uma experiência sem preocupações, com tudo preparado
            desde o momento da sua chegada. Desde a costa acidentada até as
            colinas onduladas e aldeias pitorescas, nossos guias especializados
            mostrarão a você o melhor do Algarve sobre duas rodas.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            O que está incluído em nossos pacotes de férias de motocicleta?
            Temos tudo pronto para você:
          </p>

          <ul className="list-disc pl-4">
            <li>Tour guiado de motocicleta com um guia experiente</li>
            <li>Aluguel de motocicleta de alta qualidade</li>
            <li>Veículo de apoio e transferência de bagagem</li>
            <li>Café da manhã e almoço todos os dias</li>
            <li>
              Hospedagem em um hotel ou pousada cuidadosamente selecionado
            </li>
          </ul>
        </div>

        <Link href={"/pt/tours"} className="w-full">
          <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center  md:px-8 md:text-lg">
            Reserve Suas Férias de Motocicleta em Portugal Hoje!
          </button>
        </Link>
      </div>
    </section>
  );
}

function OffRoadAdventures() {
  return (
    <section className="px-6 py-12 mx-auto w-fit">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl mb-2 uppercase font-tds tracking-wider md:text-5xl">
            Aventuras Off Road
          </h2>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            Está pronto para uma aventura off-road inesquecível na região do
            Algarve, em Portugal? Nossos passeios guiados oferecem uma
            oportunidade única de explorar as diversas paisagens do sul de
            Portugal em motos KTM de alta qualidade. Desde trilhas montanhosas
            íngremes até percursos costeiros, nossos guias especializados
            levarão você em um passeio emocionante pelas paisagens mais
            deslumbrantes.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            E se eu for um iniciante? Não se preocupe! Nossos passeios são
            projetados para pilotos de todos os níveis de habilidade, e nossos
            guias experientes fornecerão todo o equipamento de segurança
            necessário e compartilharão suas melhores técnicas de pilotagem para
            garantir uma experiência segura e agradável.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            O que está incluído no passeio? Temos tudo coberto! Nossos pacotes
            incluem:
          </p>
          <ul className="list-disc pl-4">
            <li>Passeio guiado de dia inteiro com um guia experiente</li>
            <li>Moto KTM EXC-300 de alta qualidade</li>
            <li>Todo o equipamento de segurança necessário</li>
            <li>Almoço tradicional nas montanhas</li>
            <li>Sem custos ocultos!</li>
          </ul>
        </div>
        <Link href={"/tours"} className="w-full">
          <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center md:px-8 md:text-lg">
            Reserve Sua Aventura Off Road Hoje!
          </button>
        </Link>
      </div>
    </section>
  );
}

function WhatToExpect() {
  return (
    <section className="px-6 py-12 mx-auto w-fit">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl mb-2 uppercase font-tds tracking-wider md:text-5xl">
            O Que Esperar
          </h2>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            Nossas aventuras off-road são projetadas para proporcionar uma
            experiência inesquecível para pilotos de todos os níveis de
            habilidade. Desde o momento em que você chegar, nossos guias
            especializados cuidarão de tudo, oferecendo um briefing completo,
            equipamento de segurança e uma moto KTM EXC-300 de alta qualidade.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            E quanto ao terreno? Nossos trilhos exclusivos atendem a pilotos de
            todos os níveis de habilidade, desde trilhas amigáveis para
            iniciantes até rotas mais desafiadoras para pilotos experientes.
            Nossos guias adaptarão a experiência com base no seu feedback,
            garantindo que você aproveite ao máximo o seu dia.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            E quanto ao almoço? Também temos isso coberto! Um almoço tradicional
            nas montanhas está incluído no seu pacote, oferecendo a oportunidade
            de reabastecer e recarregar as energias para o resto do dia.
          </p>
        </div>

        <Link href={"/pt/tours"} className="w-full">
          <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center md:px-8 md:text-lg">
            Junte-se a Nós para uma Aventura Off Road Inesquecível!
          </button>
        </Link>
      </div>
    </section>
  );
}

function EnduroToursAlgarve() {
  return (
    <section className="px-6 py-12 mx-auto w-fit">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl mb-2 uppercase font-tds tracking-wider md:text-5xl">
            Enduro Passeios Algarve
          </h2>
          <p className="w-full text-sm text-black/80 max-w-xl md:text-lg">
            A TDS Enduro oferece uma oportunidade única para aventureiros
            explorarem Portugal em motos KTM de alta qualidade. Nossos passeios
            levam você pelas paisagens diversificadas da região do Algarve,
            conhecida por suas trilhas desafiadoras e belas paisagens. Os
            pilotos podem experimentar uma variedade de terrenos, desde caminhos
            montanhosos até trilhas costeiras. Nossos passeios guiados são
            projetados tanto para iniciantes quanto para pilotos experientes,
            proporcionando uma aventura segura e emocionante. Junte-se à TDS
            Enduro para um passeio organizado profissionalmente e descubra a
            emoção de pilotar enduro em um dos destinos mais cativantes da
            Europa.
          </p>
        </div>

        <Link href={`/pt/tours`} className="w-full">
          <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center md:px-8 md:text-lg">
            Vamos nessa
          </button>
        </Link>
      </div>
    </section>
  );
}

function AboutTheTour() {
  return (
    <section className="px-6 py-12 mx-auto w-fit">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl mb-2 uppercase font-tds tracking-wider md:text-5xl">
            Sobre o Passeio
          </h2>
          <p className="w-full text-sm text-black/80 max-w-xl md:text-lg">
            Junte-se aos nossos guias experientes para um emocionante passeio de
            um dia inteiro pela deslumbrante região do Algarve em uma KTM
            EXC-300! Fornecemos todo o equipamento de segurança necessário e
            compartilhamos nossas melhores técnicas de pilotagem. Um almoço
            tradicional nas montanhas está incluído!
            <br />
            <br />
            Nossas trilhas exclusivas atendem a pilotos de todos os níveis de
            habilidade. Seu equipamento estará pronto para você, para que possa
            subir em uma das nossas motos Enduro totalmente equipadas e
            aproveitar um passeio inesquecível. O dia é seu para explorar, com
            nossos guias personalizando a experiência com base no seu feedback.
            O melhor de tudo é que tudo está incluído no seu pacote, sem custos
            ocultos!
          </p>
        </div>

        <Link href={`/pt/tours`} className="w-full">
          <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center md:px-8 md:text-lg">
            Vamos nessa
          </button>
        </Link>
      </div>
    </section>
  );
}

function KTMTopoftheLineBikes() {
  return (
    <section className="flex flex-col gap-4  w-full  md:max-w-6xl  mx-auto xl:px-0 py-8 md:py-12 ">
      <div className="px-6 flex flex-col gap-2">
        <h2 className="text-3xl font-tds md:text-5xl ">
          Motas KTM topo de linha
        </h2>
        <p className="text-sm text-black/80 max-w-md">
          Motocicletas de enduro de última geração nas quais você pode confiar e
          desfrutar seu passeio. O aluguel está disponível para todas as motas,
          passeios disponíveis para o KTM 300 EXC.
        </p>
        <Link
          href={"/pt/bikes"}
          className="text-sm text-tdsRed hover:underline md:text-lg "
        >
          Ver tudo {"->"}
        </Link>
      </div>
      <BikesList />
    </section>
  );
}

function BikesList() {
  return (
    <section className="flex flex-col gap-4  w-full ">
      <div className="flex overflow-x-auto scrollbar-hide gap-4 p-6 md:gap-12 items-center ">
        {bikes.map((bike) => (
          <div
            key={bike.id}
            className="flex-shrink-0  flex flex-col items-center justify-center  scrollbar-hide gap-6 relative"
          >
            <Image
              src={`/images/bikes/${bike.image}`}
              alt={bike.name}
              width={200}
              height={200}
              quality={65}
              priority={true}
              className="w-[300px] h-full object-cover md:w-full"
            />

            <div className="flex flex-col gap-2 w-full justify-start items-start">
              <h3 className="text-xl font-bold text-center hover:text-tdsRed/80 ">
                {bike.name}
              </h3>

              <p className="text-xs text-goreground/40 max-w-[250px] md:text-sm">
                {bike.shout}
              </p>
              <Link
                href={`/pt/bikes/${bike.slug}`}
                className="text-sm  text-center text-tdsRed hover:underline mt-2 md:text-lg"
              >
                Vamos fazê-lo {"->"}
              </Link>
            </div>
            {bike.tour && (
              <Link
                href={`/pt/tours`}
                className="text-white bg-black absolute top-0 left-0 py-1 px-3 bg-black text-xs shadow text-center hover:bg-black/80"
              >
                Disponível agora
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function PortugalEnduroTours() {
  return (
    <section className="flex flex-col gap-4  w-full  md:max-w-6xl pt-2  mx-auto xl:px-0 py-8 md:py-12 md:pt-24">
      <div className="px-6 flex flex-col gap-2">
        <h2 className="text-3xl font-tds md:text-5xl">
          Passeios de Enduro em Portugal
        </h2>
        <p className="text-sm text-black/80 max-w-md">
          Desfrute de um dia inesquecível de passeio de hard enduro em Portugal,
          Algarve, com todo o equipamento, bicicleta, trilhas e até almoço
          incluso! Licença de bicicleta não é necessário fora da estrada.
        </p>
        <Link
          href={"/pt/tours"}
          className="text-sm text-tdsRed hover:underline md:text-lg"
        >
          Ver tudo {"->"}
        </Link>
      </div>
      <ToursList />
    </section>
  );
}

function ToursList() {
  return (
    <section className="flex flex-col gap-4  w-full ">
      <div className="flex flex-row overflow-x-auto scrollbar-hide gap-4 md:gap-16 p-6 md:grid md:grid-cols-3 w-full">
        {tours_PT.map((tour) => (
          <div
            key={tour.id}
            className="flex-shrink-0  flex flex-col items-start justify-start  gap-6 "
          >
            <Image
              src={`/images/tours/${tour.image}`}
              alt={tour.slug}
              width={200}
              height={200}
              quality={65}
              priority={true}
              className="w-[300px] h-[200px] object-cover  md:h-[400px] md:w-full"
            />
            <div className="flex flex-col gap-2 w-full justify-start items-start md:w-full md:gap-4">
              <h3 className="text-xl font-bold text-center  md:text-3xl">
                {tour.name}
              </h3>

              <p className="text-xs text-goreground/40 max-w-[250px] md:text-sm">
                {tour.description}
              </p>
              <Link
                href={`/pt/tours/${tour.slug}`}
                className="text-sm  text-center text-tdsRed hover:underline mt-2 md:text-lg"
              >
                de €{tour.startingPrice}/dia {"->"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import { posts_PT } from "@/data/blog_PT";

function Post({ post }: { post: any }) {
  return (
    <section className="flex flex-col gap-4 relative  flex-shrink-0 w-[250px] md:w-[400px] ">
      <h2 className="text-xl font-tds line-clamp-2 ">{post.h1}</h2>
      <p className="line-clamp-2 text-sm">{post.description}</p>
      <Link
        href={`/pt/posts/${post.slug}`}
        className="hover:underline text-tdsRed z-[100]"
      >
        Leia mais {"->"}
      </Link>
    </section>
  );
}

function Posts() {
  return (
    <section className="flex flex-col w-full   xl:px-0 max-w-6xl mx-auto">
      <div className="flex flex-row gap-8 w-full  m md:gap-16  py-4 xl:px-0 overflow-x-auto scrollbar-hide p-6">
        {posts_PT.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
