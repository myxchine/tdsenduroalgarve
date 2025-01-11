import { Section, Row } from "@/ui/components";
import { BikesList } from "@/components/bikes";
import { bikes } from "@/_bikes/all";

export default function Bike() {
  return (
    <Section>
      <Row>
        <h2>
          The Best{" "}
          <strong className="font-normal text-accent">Enduro Bike</strong>
        </h2>
        <p>
          At TDS we only offer the best of the best which is why the KTM EXC 300
          was an easy choice to make. Used by the top enduro riders in the world
          including Manuel Lettenbichler and winning many of the top Enduro
          Races in the world for decades, you can't go wrong.
        </p>

        <p>
          We have an arsenal with 7 of these bad boys full kitted out with
          protections and a cool TDS sticker kit, we know we can rely on these
          amazing enduro machines through thick and thin.
        </p>

        <BikesList bikes={bikes} h3 />
      </Row>
    </Section>
  );
}
