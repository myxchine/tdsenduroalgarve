import { Block, Row, Section } from "@/ui/components";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ThankYou({
  searchParams,
}: {
  searchParams: Promise<{ name: string }>;
}) {
  const { name } = await searchParams;
  if (!name) {
    return redirect("/reserve");
  }

  const decodedName = decodeURIComponent(name);
  return (
    <Section>
      <Row>
        <Block centered>
          <h1>
            Thank you for contacting us {decodedName}, let's get ready to ride!
          </h1>
          <p>We will get back to you as soon as possible.</p>
          <Link href={"/"} className="hover:underline text-accent">
            Return to home {"->"}
          </Link>
        </Block>
      </Row>
    </Section>
  );
}
