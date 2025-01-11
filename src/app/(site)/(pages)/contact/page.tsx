import { Metadata } from "next";
import { Section, Row } from "@/ui/components";
import Form from "./form";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact TDS for inquiries and more or directly email us at francisco@tdsenduroalgarve.com",
};

export default function Calculate() {
  return (
    <Section>
      <Row>
        <h1>Contact Us</h1>
        <p className="max-w-md text-balance">
          Or contact us directly at{" "}
          <a
            href="mailto:francisco@tdsenduroalgarve.com"
            className="underline lowercase hover:text-accent"
          >
            francisco@tdsenduroalgarve.com
          </a>{" "}
          /{" "}
          <a href="tel:+351 968 185 407" className="underline lowercase hover:text-accent">
            +351 968 185 407
          </a>
        </p>
        <Form />
      </Row>
    </Section>
  );
}
