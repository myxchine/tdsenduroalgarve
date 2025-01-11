import Image from "next/image";
import Link from "next/link";
import { Bike } from "@/app/types";

export function BikesList({
  bikes,
  h3,
  centered,
}: {
  bikes: Bike[];
  h3?: boolean;
  centered?: boolean;
}) {
  if (bikes.length === 1) {
    return <SingleBike bike={bikes[0]} h3={h3} />;
  }
  return (
    <div
      className={
        "grid  gap-12 md:gap-16 text-left " +
        (centered
          ? "grid-cols-1 md:grid-cols-1 max-w-[500px] mx-auto"
          : "grid-cols-1 md:grid-cols-2")
      }
    >
      {bikes.map((bike) => (
        <Link
          href={"/bikes/" + bike.slug}
          key={bike.name}
          className="flex flex-col gap-4  justify-start items-start"
        >
          <Image
            src={`/images/bikes/${bike.image}`}
            alt={bike.name}
            width={800}
            height={600}
            quality={75}
            priority={true}
            className="w-full h-auto aspect-[13/9] object-cover my-4"
          />
          {h3 ? (
            <h3 className="line-clamp-1">{bike.name}</h3>
          ) : (
            <h2 className="line-clamp-1">{bike.name}</h2>
          )}
          <Pills bike={bike} />

          <p className="w-full normal-case line-clamp-3">{bike.excerpt}</p>

          <span className="hover:underline text-accent">Learn More {"->"}</span>
        </Link>
      ))}
    </div>
  );
}

function Pills({ bike }: { bike: Bike }) {
  return (
    <ul className="specs">
      {bike.engine.powerHP && (
        <li>
          <strong> {bike.engine.powerHP} </strong> HP
        </li>
      )}

      <li>
        <strong>{bike.specs.weight.toFixed(1)}</strong> kg
      </li>
    </ul>
  );
}

function SingleBike({ bike, h3 }: { bike: Bike; h3?: boolean }) {
  return (
    <Link
      href={"/bikes/" + bike.slug}
      key={bike.name}
      className="flex flex-col md:flex-row gap-4 md:items-center md:gap-12  justify-start items-start"
    >
      <Image
        src={`/images/bikes/${bike.image}`}
        alt={bike.name}
        width={800}
        height={600}
        quality={75}
        priority={true}
        className="w-full md:w-3/5 h-auto aspect-[13/9] object-cover my-4"
      />
      <div className="flex flex-col gap-4 md:w-2/5">
        {h3 ? (
          <h3 className="line-clamp-1">{bike.name}</h3>
        ) : (
          <h2 className="line-clamp-1">{bike.name}</h2>
        )}
        <Pills bike={bike} />

        <p className="w-full normal-case line-clamp-3">{bike.excerpt}</p>

        <span className="hover:underline text-accent">Learn More {"->"}</span>
      </div>
    </Link>
  );
}
