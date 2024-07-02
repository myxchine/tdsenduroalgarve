import { categories } from "@/app/_assets/bikes";
import Image from "next/image";
import Link from "next/link";
export default function BikeList() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-left gap-8 w-full ">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center justify-left  w-full"
          >
            <h3 className="text-3xl font-bold text-left uppercase p-6 font-tds tracking-wider w-full">
              {category.name} Line-Up
            </h3>
            {category.bikes.map((bike) => (
              <div
                key={bike.id}
                className="flex flex-col items-center justify-center  w-full"
              >
                <div className="flex flex-col items-center justify-center w-full p-6 pt-0">
                  <div className="flex flex-col items-center justify-left  w-full gap-8 ">
                    <Image
                      src={bike.image}
                      alt={bike.name}
                      width={200}
                      height={200}
                      className="w-full object-cover h-auto"
                    />
                    <div className="flex flex-col items-center justify-center space-y-4 w-full pt-0 w-full">
                      <h4 className="text-2xl font-bold   uppercase font-tds tracking-wider w-full">
                        {bike.name}
                      </h4>
                      <p className="w-full text-sm text-black/80">
                        {bike.description}
                      </p>
                      <div className="flex flex-col items-center justify-center space-y-4 w-full pt-0">
                        <Link href="/off-road-bike-rental" className="w-full">
                          <button className="bg-tdsRed text-white font-bold w-full p-2 uppercase hover:bg-tdsRed/80">
                            Learn More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
