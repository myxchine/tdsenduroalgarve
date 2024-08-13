import { Metadata } from "next";
import { Form } from "./_components/Form";

export const metadata: Metadata = {
  title: "Reserve um Passeio e Aluguel de Moto Off Road em Portugal",
  description:
    "Pronto para uma aventura memorável nesta temporada de férias no Algarve, Portugal? Oferecemos a bela experiência do Algarve, garantindo que você se divirta com tudo preparado para você! A maneira perfeita de explorar a região e vivenciar a cultura local, seja com amigos, família ou sozinho.",
};

export default function Contact({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  return (
    <section
      id="contact"
      className="w-full gap-16 pb-12 p-6 md:py-24 lg:py-32 flex flex-col items-center max-w-6xl mx-auto pt-12 md:flex-row xl:px-0 sm:gap-12"
    >
      <Form searchParams={searchParams} />
    </section>
  );
}
