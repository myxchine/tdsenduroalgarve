import Link from "next/link";

export default function Pricing({ tour }: { tour: any }) {
  return (
    <div className="flex flex-col items-center justify-center w-full text-black py-2 md:py-8 gap-4 bg-black/10 xl:px-0">
      <div className="md:max-w-6xl mx-auto flex flex-col w-full p-4 py-6 md:py-8 gap-8 xl:px-0 md:flex-row">
        {tour.packages.map((packageItem: any, packageIndex: number) => (
          <div
            key={packageItem.id}
            className="flex flex-col items-center gap-8 justify-center shadow w-full bg-white rounded-md p-4 py-6"
          >
            <section className="flex flex-col w-full gap-4">
              <h2 className="text-3xl font-tds">
                {packageItem.riders}
                {packageIndex === 2 && "+"}{" "}
                {packageItem.riders > 1 ? (
                  <span className="">pilotos</span>
                ) : (
                  <span>piloto</span>
                )}{" "}
                <span className="text-xl"> / Inclui</span>
              </h2>
              <div className="flex flex-col gap-1 justify-center items-start w-full">
                <Link href="/pt/bikes/ktm-300-exc" className=" ">
                  <p className="text-tdsRed text-sm font-bold uppercase hover:underline">
                    KTM EXC 300 {`->`}
                  </p>
                </Link>
                <Link href="/pt/about-tour" className="mb-1">
                  <p className="text-tdsRed text-sm font-bold uppercase hover:underline">
                    Tour de Dia Inteiro {`->`}
                  </p>
                </Link>
                <div>
                  <p>Todo o equipamento de proteção e pilotagem</p>
                  <p>Almoço</p>
                  <p>Água e lanches</p>
                  <p>Combustível</p>
                </div>
              </div>
            </section>
            <section className="flex flex-col items-end gap-4 justify-between w-full">
              <p className="text-4xl font-tds tracking-wider relative pl-3">
                <span className="text-sm absolute top-1 left-0">€</span>
                {packageItem.price}
                <span className="text-sm font-normal">/piloto</span>
              </p>
              <Link
                href={`/pt/reserve?category=${tour.name.toLowerCase()}&riders=${
                  packageItem.riders
                }`}
                className="w-full"
              >
                <button className="bg-tdsRed text-white py-2 uppercase font-tds tracking-wider text-lg rounded w-full px-8 hover:bg-tdsRed/80">
                  Reservar {packageItem.riders}
                  {packageIndex === 2 && "+"}{" "}
                  {packageItem.riders > 1 ? (
                    <span className="">pilotos</span>
                  ) : (
                    <span>piloto</span>
                  )}
                </button>
              </Link>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
