import { Metadata } from "next";
import { Form } from "./_components/Form";

export const metadata: Metadata = {
  title:
    "Reserve a Rental KTM in Portugal, On or Off Road Bikes this Holiday Season",
  description:
    "Rent a KTM today. Looking for a unique and exciting way to explore the beautiful Algarve region? We offer the perfect way to experience the local culture and history with a motorcycle rental. Whether you're a seasoned rider or a first-time adventurer, we've got you covered.",
};

export default function Contact({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  return (
    <section
      id="contact"
      className="w-full gap-16 pb-12 p-6 md: md:py-24 lg:py-32 flex flex-col items-center max-w-6xl mx-auto pt-12 md:flex-row xl:px-0 sm:gap-12"
    >
      <Form searchParams={searchParams} />
    </section>
  );
}
