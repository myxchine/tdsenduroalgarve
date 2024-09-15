import { bikes_PT } from "@/server/bikes_PT";

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Motas",
  description:
    "Dê uma olhada nas motos que temos disponíveis aqui no Algarve, Portugal. Oferecemos a bela experiência do Algarve e ao mesmo tempo garantimos que você se diverte com tudo preparado para você.! A maneira perfeita de explorar a região e vivenciar a cultura local seja com amigos, família ou sozinho.",
};

export default function Bikes() {
  return (
    <div className="flex flex-col  gap-8 py-8 max-w-6xl mx-auto">
      <Title />
      <BikesList />
    </div>
  );
}

function Title() {
  return (
    <div className="flex flex-col gap-2 w-full px-6  xl:px-0 pb-4">
      <h1 className="text-4xl font-tds md:text-5xl">
        Explorar <span className="text-tdsRed">Motas</span>
      </h1>
      <p className="text-xs text-black/80 text-balance md:text-lg">
        Explore enduro, motocross, aventura ou motos de rua em Portugal.
      </p>
    </div>
  );
}

function BikesList() {
  return (
    <section className="flex flex-col w-full  p-6 xl:px-0">
      <div className="flex flex-col gap-8 w-full  md:grid md:grid-cols-2 md:gap-16 max-w-6xl mx-auto py-4 xl:px-0 ">
        {bikes_PT.map((bike) => (
          <section
            className="flex flex-col items-start gap-8 bg-white w-full   relative"
            key={bike.id}
          >
            <Image
              src={`/images/bikes/${bike.image}`}
              alt={bike.slug}
              width={500}
              height={500}
              quality={100}
              priority={true}
              className=" object-cover w-full "
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-tds uppercase">{bike.name}</h1>
              <p className="text-xs text-black/80 md:text-sm">{bike.shout}</p>
              <Link
                href={`/pt/bikes/${bike.slug}`}
                className="w-full text-tdsRed hover:underline"
              >
                Vamos fazê-lo {"->"}
              </Link>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
