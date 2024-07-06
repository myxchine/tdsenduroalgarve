import { Metadata } from "next";
import { Form } from "./_components/Form";

export const metadata: Metadata = {
  title: "Reserve an Off Road Enduro Bike Tour & Rental in Portugal",
  description:
    "Ready for a memorable adventure this holiday season in Algarve, Portugal? We offer the beautiful Algarve experience whilst making sure you have a great time with everything prepared for you.! The perfect way to explore the region and experience the local culture whether with friends, family or by yourself.",
};

export default function Contact({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  return (
    <section
      id="contact"
      className="w-full gap-16 pb-12 p-6 md: md:py-24 lg:py-32 flex flex-col items-center max-w-6xl mx-auto pt-28 md:flex-row xl:px-0 sm:gap-12"
    >
      <Form searchParams={searchParams} />
    </section>
  );
}
