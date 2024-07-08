import Link from "next/link";
export default function Packages({ category }: { category: any }) {
  return (
    <div className="flex flex-col items-center justify-center w-full  bg-white  text-black rounded-md py-2 md:py-8 gap-4  bg-black/10 xl:px-0">
      <div className="md:max-w-6xl mx-auto flex flex-col w-full p-4 py-6 md:py-8 gap-8 xl:px-0">
        <section className="flex flex-col w-full ">
          {category.bikes.map((bike: any, index: number) => (
            <li key={bike.id} className="flex flex-col gap-4 w-full">
              <ul className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
                {bike.packages.map((packages: any, index: number) => (
                  <li
                    key={packages.id}
                    className="flex flex-col items-center gap-8 justify-center  w-full bg-white rounded-md p-4 py-6 w-full"
                  >
                    <section className="flex flex-col w-full gap-4 ">
                      <h2 className="text-3xl font-tds">
                        {packages.riders}
                        {index === 2 && "+"}{" "}
                        {packages.riders > 1 ? (
                          <span className="">riders</span>
                        ) : (
                          <span>rider</span>
                        )}{" "}
                        <span className="text-xl"> / Includes</span>
                      </h2>
                      <ul className="flex flex-col gap-1 justify-center items-start w-full">
                        <Link href={"/bikes/ktm-exc-300"} className="">
                          <button className=" text-tdsRed text-sm font-bold uppercase">
                            KTM EXC 300 {`->`}
                          </button>
                        </Link>
                        <Link href={"/about-tour"} className="mb-1">
                          <button className=" text-tdsRed text-sm font-bold uppercase">
                            Full Day Tour {`->`}
                          </button>
                        </Link>
                        {packages.included.map(
                          (included: any, index: number) => (
                            <li
                              key={included.id}
                              className="flex flex-col items-center gap-8 justify-center  w-full text-left"
                            >
                              <p className="w-full text-sm ">{included}</p>
                            </li>
                          )
                        )}
                      </ul>
                    </section>
                    <section className="flex flex-col items-end gap-4 justify-between w-full">
                      <p className="text-4xl font-tds tracking-wider relative pl-3">
                        <span className="text-sm absolute top-1 left-0">€</span>
                        {packages.price}
                        <span className="text-sm font-normal ">/rider</span>
                      </p>
                      <Link
                        href={
                          "/reserve?category=" +
                          category.name.toLowerCase() +
                          "&riders=" +
                          packages.riders
                        }
                        className="w-full"
                      >
                        <button className="bg-tdsRed text-white text py-2   uppercase font-tds tracking-wider text-lg rounded w-full px-8">
                          Reserve {packages.riders}
                          {index === 2 && "+"}{" "}
                          {packages.riders > 1 ? (
                            <span className="">riders</span>
                          ) : (
                            <span>rider</span>
                          )}{" "}
                        </button>
                      </Link>
                    </section>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </section>
      </div>
    </div>
  );
}
