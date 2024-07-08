import { data } from "@/server/db/data";
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
          <div className=" flex flex-col gap-4 p-6 pt-0  w-full  md:max-w-6xl  mx-auto xl:px-0">
            <h2 className="text-4xl md:text-6xl text-left font-tds w-full text-balance">
              Enduro Bike <span className="text-tdsRed">tour</span> +{" "}
              <span className="text-tdsRed">rental</span>
            </h2>
            <Link href="/reserve" className="">
              <button className="font-bold  hover:underline">
                Reserve Now {"->"}
              </button>
            </Link>
            <p className="  text-left text-sm  w-full pl-[1px] text-black/60 md:text-xl  md:max-w-3xl ">
              Join the fun of riding off road bikes while you're on holiday in
              Algarve whether it's with friends, family or by yourself. We
              prepare your bike, gear, transport and route to ride on. All you
              need to do is show up!
            </p>
          </div>

          <section className="flex flex-col w-full bg-black/10 p-4  py-8 md:py-12">
            <div className="md:max-w-6xl mx-auto flex flex-col w-full">
              {category.bikes.map((bike) => (
                <div key={bike.id} className="flex flex-col   w-full ">
                  <div className="flex flex-col items-start justify-center w-full w-full p-4 py-6 bg-white rounded-md max-w-2xl  md:p-8 md:py-12 shadow">
                    <div className="flex flex-col items-start justify-start  w-full gap-8  ">
                      <section className="  ">
                        <div className="flex flex-col items-start justify-start space-y-4 w-full pt-0 w-full">
                          <h3 className="text-3xl   md:text-4xl  uppercase font-tds w-full">
                            Full Day Tour
                          </h3>
                          <p className="w-full text-sm text-black/80 md:text-lg">
                            An experienced guide through the beautiful Algarve
                            region with bike, gear, transport and even lunch
                            included!
                          </p>
                          <p className="w-full text-sm text-black/80 md:text-lg">
                            The{" "}
                            <span className="font-tds text-tdsRed px-1">
                              KTM EXC 300{" "}
                            </span>
                            is a top of the range enduro bike with a range of
                            features and packages for you or your group.
                          </p>
                        </div>
                        <Image
                          src={bike.image}
                          alt={bike.name}
                          width={200}
                          height={200}
                          loading="lazy"
                          className="w-full object-cover h-auto"
                        />
                      </section>

                      <section className="w-full flex flex-col items-center justify-center gap-6 ">
                        <div className="flex flex-col items-end justify-end space-y-4 w-full   ">
                          <p className="text-4xl font-tds tracking-wider  md:text-6xl">
                            <span className="text-sm font-normal pr-2 md:text-lg">
                              from
                            </span>
                            <span className="relative pl-3">
                              <span className="text-sm absolute top-1 left-0 font-bold md:text-lg">
                                €
                              </span>
                              {bike.packages[2].price}
                            </span>

                            <span className="text-sm font-normal md:text-lg">
                              /day
                            </span>
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
          </section>
        </div>
      ))}
    </div>
  );
}
