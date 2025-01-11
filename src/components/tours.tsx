import Image from "next/image";
import Link from "next/link";

export function TourList({
  tour,
  h3,
  centered,
}: {
  tour: any;
  h3?: boolean;
  centered?: boolean;
}) {
  return <Pricing tour={tour} />;
}

function Pills({ tour }: { tour: any }) {
  return (
    <ul className="specs">
      {tour.included.map((included: any, index: number) => (
        <li key={index}>{included}</li>
      ))}
    </ul>
  );
}

export function Pricing({ tour }: { tour: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center items-start w-full ">
      {tour.packages.map((packageItem: any, packageIndex: number) => (
        <div
          key={packageItem.id}
          className="flex flex-col items-center gap-8 justify-center shadow-lg w-full bg-white border rounded-md p-4 py-6"
        >
          <div className="flex flex-col w-full gap-4">
            <h3 className="text-3xl font-accent">
              {packageItem.riders}
              {packageIndex === 2 && "+"}{" "}
              {packageItem.riders > 1 ? (
                <span className="">riders</span>
              ) : (
                <span>rider</span>
              )}{" "}
              <span className="text-xl"> / Includes</span>
            </h3>
            <div className="flex flex-col gap-1 justify-center items-start w-full">
              <Link href="/bikes/ktm-300-exc" className=" ">
                <p className="text-accent text-sm font-bold uppercase hover:underline">
                  KTM EXC 300 {`->`}
                </p>
              </Link>
              <Link href="/about-tour" className="mb-1">
                <p className="text-accent text-sm font-bold uppercase hover:underline">
                  Full Day Tour {`->`}
                </p>
              </Link>
              <div>
                <p>All protective and riding equipment</p>
                <p>Fuel</p>
                <p>Water and snacks</p>
                <p>Traditional Lunch</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4 justify-between w-full">
            <p className="text-4xl font-accent tracking-wider relative pl-3">
              <span className="text-sm absolute top-1 left-0">€</span>
              {packageItem.price}
              <span className="text-sm font-normal">/rider</span>
            </p>
            <Link
              href={`/reserve?riders=${packageItem.riders}`}
              className="bg-accent text-center text-white py-2 uppercase font-accent tracking-wider text-lg rounded w-full px-8 hover:bg-accent/80"
            >
              Reserve {packageItem.riders}
              {packageIndex === 2 && "+"}{" "}
              {packageItem.riders > 1 ? (
                <span className="">riders</span>
              ) : (
                <span>rider</span>
              )}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
