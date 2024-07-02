import { data } from "@/server/data";
import Image from "next/image";
import Link from "next/link";
export default function ToursList() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col  items-center justify-center gap-12 w-full ">
        <div className="   p-6 pb-0  text-center  w-full flex flex-col gap-1">
          <h3 className="text-3xl   uppercase font-tds tracking-wider w-full">
            Tours
          </h3>
          <p className="max-w-[500px] text-black/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We prepare your bike, gear, transport and route to ride on.
          </p>
        </div>

        {data.tours.categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center justify-left  w-full"
          >
            <div className=" text-center uppercase p-6 pt-0 tracking-wider w-full">
              <h3 className="text-3xl  text-left font-tds tracking-wider w-full">
                off road bikes
              </h3>
              <h4 className="  text-left uppercase   tracking-wider w-full text-black/60 pl-[1px]">
                ENDURO TOURS
              </h4>
            </div>

            <div className="w-full p-6 pt-0">
              {category.bikes.map((bike) => (
                <div
                  key={bike.id}
                  className="flex flex-col items-center justify-center  w-full p-2 bg-black/5 rounded-md"
                >
                  <div className="flex flex-col items-center justify-center w-full p-4 ">
                    <div className="flex flex-col items-center justify-left  w-full gap-8 ">
                      <div className="flex flex-col items-center justify-center space-y-4 w-full pt-0 w-full">
                        <h4 className="text-2xl    uppercase font-tds tracking-wider w-full">
                          {bike.name}
                        </h4>
                        <p className="w-full text-sm text-black/80">
                          {bike.description}
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
                      <div className="flex flex-col items-end justify-end space-y-4 w-full pt-0 ">
                        <p className="text-4xl font-tds tracking-wider  ">
                          <span className="text-sm font-normal pr-2 ">
                            from
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
                              View Tour
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
