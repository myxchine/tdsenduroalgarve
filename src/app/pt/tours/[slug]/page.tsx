import Pricing from "./_components/Pricing";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { tours_PT } from "@/server/db/tours_PT";
import Link from "next/link";
export async function generateStaticParams() {
  return tours_PT.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const tour = tours_PT.find((tour) => tour.slug === params.slug);

  if (!tour) {
    notFound();
  }

  return {
    title: tour.title,
    description: tour.description,
    openGraph: {
      images: [
        {
          url: tour.image,
          alt: tour.slug,
        },
      ],
    },
  };
}

export default async function ToursList({
  params,
}: {
  params: { slug: string };
}) {
  const tour = tours_PT.find((c) => c.slug === params.slug);

  if (!tour) {
    notFound();
  }
  return (
    <section className="flex flex-col items-center justify-center w-full ">
      <Hero tour={tour} />
      <Pricing tour={tour} />
    </section>
  );
}

function Hero({ tour }: { tour: any }) {
  return (
    <div className="gap-2 flex flex-col w-full pt-8 p-6 pb-12 xl:px-0 md:pb-12 md:pt-8 max-w-6xl mx-auto md:flex-row items-center gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-tds sm:text-5xl xl:text-5xl tracking-wider uppercase text-balance max-w-3xl">
          {tour.name} - enduro{" "}
          <span className="text-tdsRed">
            passeio <span className="text-black">+</span> aluguel
          </span>
        </h1>
        <p className="max-w-[500px] text-black/60 text-sm  md:text-base text-balance">
          A aventura de enduro de moto off road de um dia inteiro que você nunca
          esquecerá este feriado. Oferecemos a bela experiência do Algarve
          enquanto fazemos certeza de que você se divertirá muito com tudo
          preparado para você.
        </p>
        <Link
          href={`/pt/reserve/`}
          className="w-full text-tdsRed hover:underline"
        >
          Reserve agora {"->"}
        </Link>
      </div>
    </div>
  );
}
