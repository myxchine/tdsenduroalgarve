import { tours_PT } from "@/server/db/tours_PT";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossos Passeios",
  description:
    "Um guia experiente pela bela região do Algarve com mota, equipamento, transporte e até almoço incluídos! A maneira perfeita de explorar a região e vivenciar a cultura local seja com amigos, família ou sozinho.",
};

export default function ToursPage() {
  return (
    <div className="flex flex-col  gap-8 py-8 max-w-6xl mx-auto">
      <Title />
      <ToursList />
    </div>
  );
}

function Title() {
  return (
    <div className="flex flex-col gap-2 w-full px-6  xl:px-0 pb-4">
      <h1 className="text-4xl font-tds md:text-5xl">
        Passeios <span className="text-tdsRed">Guiados</span>
      </h1>
      <p className="text-sm text-black/80 text-balance md:text-lg">
        Dê uma olhada nos passeios que oferecemos e encontre a motocicleta
        perfeita aventura para você.
      </p>
    </div>
  );
}

function ToursList() {
  return (
    <section className="flex flex-col gap-4  w-full ">
      <div className="flex flex-row overflow-x-auto scrollbar-hide gap-16 p-6  grid grid-cols-1 md:grid-cols-3 w-full xl:px-0">
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
              className="w-full h-[300px] object-cover  md:h-[400px] md:w-full"
            />
            <div className="flex flex-col gap-2 w-full justify-start items-start md:w-full md:gap-4">
              <h3 className="text-xl font-bold text-center  md:text-3xl">
                {tour.name}
              </h3>

              <p className="text-xs text-goreground/40 max-w-[250px] md:text-sm">
                {tour.description}
              </p>
              <Link
                href={`/tours/${tour.slug}`}
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
