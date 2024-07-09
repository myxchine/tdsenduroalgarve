import Link from "next/link";

export default function Pricing({ category }: { category: any }) {
  return (
    <div className="flex flex-col items-center justify-center w-full  text-black py-2 md:py-8 gap-4 bg-black/10 xl:px-0">
      <div className="md:max-w-6xl mx-auto flex flex-col w-full p-4 py-6 md:py-8 gap-8 xl:px-0 ">
        <section className="flex flex-col w-full">
          {category.bikes.map((bike: any) => (
            <div key={bike.id} className="flex flex-col gap-4 w-full">
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
                {bike.packages.map((packageItem: any, packageIndex: number) => (
                  <div
                    key={packageItem.id}
                    className="flex flex-col items-center gap-8 justify-center shadow w-full bg-white rounded-md p-4 py-6"
                  >
                    <section className="flex flex-col w-full gap-4">
                      <h2 className="text-3xl font-tds">
                        {packageItem.riders}
                        {packageIndex === 2 && "+"}{" "}
                        {packageItem.riders > 1 ? (
                          <span className="">riders</span>
                        ) : (
                          <span>rider</span>
                        )}{" "}
                        <span className="text-xl"> / Includes</span>
                      </h2>
                      <div className="flex flex-col gap-1 justify-center items-start w-full">
                        <Link href="/bikes/ktm-300-exc" className=" ">
                          <p className="text-tdsRed text-sm font-bold uppercase hover:underline">
                            KTM EXC 300 {`->`}
                          </p>
                        </Link>
                        <Link href="/about-tour" className="mb-1">
                          <p className="text-tdsRed text-sm font-bold uppercase hover:underline">
                            Full Day Tour {`->`}
                          </p>
                        </Link>
                        {packageItem.included.map(
                          (includedItem: any, includedIndex: number) => (
                            <div
                              key={includedItem.id}
                              className="flex flex-col items-center gap-8 justify-center w-full text-left"
                            >
                              <p className="w-full text-sm">{includedItem}</p>
                            </div>
                          )
                        )}
                      </div>
                    </section>
                    <section className="flex flex-col items-end gap-4 justify-between w-full">
                      <p className="text-4xl font-tds tracking-wider relative pl-3">
                        <span className="text-sm absolute top-1 left-0">€</span>
                        {packageItem.price}
                        <span className="text-sm font-normal">/rider</span>
                      </p>
                      <Link
                        href={`/reserve?category=${category.name.toLowerCase()}&riders=${
                          packageItem.riders
                        }`}
                        className="w-full"
                      >
                        <button className="bg-tdsRed text-white py-2 uppercase font-tds tracking-wider text-lg rounded w-full px-8 hover:bg-tdsRed/80">
                          Reserve {packageItem.riders}
                          {packageIndex === 2 && "+"}{" "}
                          {packageItem.riders > 1 ? (
                            <span className="">riders</span>
                          ) : (
                            <span>rider</span>
                          )}
                        </button>
                      </Link>
                    </section>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
