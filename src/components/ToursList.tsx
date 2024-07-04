import { data } from "@/server/data";
import Image from "next/image";
import Link from "next/link";
export default function ToursList() {
  return (
    <div className="flex flex-col  items-center justify-center gap-12 w-full pt-6 md:pt-12">
      {data.tours.categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center justify-left  w-full gap-4 md:gap-8"
        >
          <div className=" flex flex-col gap-4 p-6 pt-0 tracking-wider w-full">
            <h3 className="text-4xl md:text-6xl text-left font-tds tracking-wider w-full text-balance">
              Enduro GUIDED Tour <span className="text-tdsRed">+</span> Rental
            </h3>
            <h4 className="  text-left text-sm  w-full pl-[1px] text-black/60 md:text-xl">
              We prepare your bike, gear, transport and route to ride on.
            </h4>
          </div>

          <div className="w-full p-6 pt-2">
            {category.bikes.map((bike) => (
              <div
                key={bike.id}
                className="flex flex-col items-center justify-center  w-full "
              >
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex flex-col items-center justify-left  w-full gap-8 md:flex-row">
                    <section className="  w-full p-6 bg-black/5 rounded-md">
                      <div className="flex flex-col items-center justify-center space-y-4 w-full pt-0 w-full">
                        <h4 className="text-2xl   md:text-4xl  uppercase font-tds tracking-wider w-full">
                          {bike.name}
                        </h4>
                        <p className="w-full text-sm text-black/80">
                          Top of the range enduro bikes with a range of features
                          and packages.
                        </p>
                      </div>
                      <Image
                        src={bike.image}
                        alt={bike.name}
                        width={200}
                        height={200}
                        priority={true}
                        className="w-full object-cover h-auto"
                      />
                    </section>
                    <div className="flex flex-col items-center justify-center space-y-4 w-full pt-0 md:w-fit">
                      <span className="text-4xl ">+</span>
                    </div>
                    <section className="w-full flex flex-col items-center justify-center gap-6 ">
                      <div className="flex flex-col items-center justify-center gap-1 w-full w-full p-6 bg-black/5 rounded-md">
                        <h4 className="text-2xl    uppercase font-tds tracking-wider w-full md:text-4xl">
                          GUIDED TOUR
                        </h4>
                        <p className="w-full text-sm text-black/80">
                          An experienced guide through the beautiful Algarve
                          region with lunch included!
                        </p>
                      </div>
                      <div className="flex flex-col items-end justify-end space-y-4 w-full   w-full p-6 bg-black/5 rounded-md">
                        <p className="text-4xl font-tds tracking-wider  ">
                          <span className="text-sm font-normal pr-2 ">
                            packages from
                          </span>
                          <span className="relative pl-3">
                            <span className="text-sm absolute top-1 left-0 font-bold">
                              €
                            </span>
                            {bike.packages[2].price}
                          </span>

                          <span className="text-sm font-normal ">/day</span>
                        </p>
                        <div className="flex flex-col items-center justify-center space-y-4 w-full pt-0">
                          <Link
                            href="/tours/off-road-enduro-bike-rental"
                            className="w-full"
                          >
                            <button className="bg-tdsRed text-white font-bold w-full p-2 uppercase hover:bg-tdsRed/80 rounded">
                              Let's do it
                            </button>
                          </Link>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
