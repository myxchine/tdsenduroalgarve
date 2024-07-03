import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-full gap-12 py-12 pt-6">
        <div className="flex flex-col items-center justify-center w-full gap-6 py-12 pt-6">
          <div className="flex flex-col items-center justify-center w-full gap-6 py-12 pt-6">
            <Image
              src="/images/hero.jpg"
              alt="hero"
              width={1000}
              height={1000}
              priority={true}
              className="w-full object-cover h-auto"
            />
            <div className="flex flex-col items-center justify-center w-full gap-6 py-12 pt-6">
              <h1 className="text-4xl font-tds tracking-wider uppercase w-full">
                GUIDED BIKE TOURS AND RENTALS IN ALGARVE MADE EASY.
              </h1>
              <p className="max-w-[500px] text-black/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                With over 7 of these bad boys in our arsenal and thousands of
                combined hours in the Algarvian mountains, they have never let
                us down.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 w-full pt-0">
                <Link href="/tours/off-road-enduro-bike-rental">
                  <button
                    className={`w-full bg-tdsRed text-white font-bold w-full p-2 uppercase hover:bg-tdsRed/80 rounded`}
                  >
                    OFF ROAD BIKES
                  </button>
                </Link>
                <Link href="/reserve">
                  <button
                    className={`w-full bg-tdsRed text-white font-bold w-full p-2 uppercase hover:bg-tdsRed/80 rounded`}
                  >
                    RESERVE A DAY
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
