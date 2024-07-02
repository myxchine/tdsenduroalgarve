import { data } from "@/server/data";
import Image from "next/image";
import Link from "next/link";
export default function RentalsList() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-left gap-8 w-full ">
        <div className=" text-left  p-6 pb-0   w-full flex flex-col gap-1">
          <h3 className="text-3xl  text-left uppercase font-tds tracking-wider w-full">
            Tours
          </h3>
          <p className="max-w-[500px] text-black/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We prepare your bike, gear, transport and route to ride on.
          </p>
        </div>

        {data.rentals.categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center justify-left  w-full"
          >
            <div className=" text-left uppercase p-6 pt-0 tracking-wider w-full">
              <h3 className="text-3xl  text-left font-tds tracking-wider w-full">
                off road bikes
              </h3>
              <h4 className="  text-left uppercase   tracking-wider w-full text-black/60 pl-[1px]">
                ENDURO
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
                      <Image
                        src={bike.image}
                        alt={bike.name}
                        width={200}
                        height={200}
                        className="w-full object-cover h-auto"
                      />
                      <div className="flex flex-col items-center justify-center space-y-4 w-full pt-0 w-full">
                        <h4 className="text-2xl    uppercase font-tds tracking-wider w-full">
                          {bike.name}
                        </h4>
                        <p className="w-full text-sm text-black/80">
                          {bike.description}
                        </p>
                        <div className="flex flex-col items-center justify-center space-y-4 w-full pt-0">
                          <Link href="/off-road-bike-rental" className="w-full">
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
