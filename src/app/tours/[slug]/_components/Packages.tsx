import Link from "next/link";
export default function Packages({ category }: { category: any }) {
  return (
    <div className="flex flex-col items-center justify-center w-full  bg-white  text-black rounded-md py-8 gap-4 pt-0 ">
      <h4 className="text-3xl md:text-5xl   uppercase font-tds tracking-wider w-full">
        Packages
      </h4>
      {category.bikes.map((bike: any, index: number) => (
        <li key={bike.id} className="flex flex-col gap-4 w-full">
          <ul className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
            {bike.packages.map((packages: any, index: number) => (
              <li
                key={packages.id}
                className="flex flex-col items-center gap-8 justify-center  w-full bg-black/5 rounded-md p-6 w-full"
              >
                <section className="flex flex-col w-full gap-4 ">
                  <h2 className="text-3xl font-tds">
                    {packages.riders}{" "}
                    {packages.riders > 1 ? (
                      <span className="">riders</span>
                    ) : (
                      <span>rider</span>
                    )}{" "}
                    <span className="text-xl"> / Includes</span>
                  </h2>
                  <ul className="flex flex-col gap-1 justify-center items-start w-full">
                    <Link href={"/bikes/ktm-exc-300"} className="">
                      <button className="underline text-tdsRed text-sm">
                        KTM EXC 300
                      </button>
                    </Link>
                    <Link href={"/about-tour"} className="">
                      <button className="underline text-tdsRed text-sm">
                        Full Day Tour
                      </button>
                    </Link>
                    {packages.included.map((included: any, index: number) => (
                      <li
                        key={included.id}
                        className="flex flex-col items-center gap-8 justify-center  w-full text-left"
                      >
                        <p className="w-full text-sm ">{included}</p>
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="flex flex-row items-end gap-4 justify-between w-full">
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
                      Reserve
                    </button>
                  </Link>
                  <p className="text-4xl font-tds tracking-wider relative pl-3">
                    <span className="text-sm absolute top-1 left-0">€</span>
                    {packages.price}
                    <span className="text-sm font-normal ">/rider</span>
                  </p>
                </section>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </div>
  );
}
