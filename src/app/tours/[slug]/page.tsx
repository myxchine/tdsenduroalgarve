import { data } from "@/server/data";
import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
export default function ToursList({ params }: { params: { slug: string } }) {
  const category = data.tours.categories.find((c) => c.slug === params.slug);

  if (!category) {
    return <div>Category not found</div>;
  }
  return (
    <section className="flex flex-col items-center justify-center w-full pb-8">
      <div className="gap-2 flex flex-col w-full pt-28 p-6">
        <h1 className="text-4xl font-tds sm:text-5xl xl:text-6xl tracking-wider uppercase">
          Hard enduro guided bike{" "}
          <span className="text-tdsRed">
            tours <span className="text-black">+</span> Rental
          </span>{" "}
          ALgarve
        </h1>
        <p className="max-w-[500px] text-black/60 md:text-xl lg:text-base xl:text-xl">
          From €270 per day
        </p>
      </div>
      <section className=" p-6">
        <section className="flex flex-col items-end gap-4 justify-end bg-black/5 rounded-md p-4 w-full">
          <div className="flex flex-col items-center justify-center space-y-4 w-full pt-0 w-full">
            <h4 className="text-2xl    uppercase font-tds tracking-wider w-full">
              {category.bikes[0].name}
            </h4>
            <p className="w-full text-sm text-black/80">
              {category.bikes[0].description}
            </p>
          </div>
          <div className="w-full p-4 pt-0">
            <Image
              src={category.bikes[0].image}
              alt={category.bikes[0].name}
              width={400}
              height={400}
              priority={true}
              className="w-full object-cover"
            />
          </div>
        </section>
        <div className="flex flex-col items-center justify-center space-y-4 w-full py-8 w-full">
          <span className="text-4xl ">+</span>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 w-full w-full bg-black/5 rounded-md p-4">
          <h4 className="text-2xl    uppercase font-tds tracking-wider w-full">
            GUIDED TOUR
          </h4>
          <p className="w-full text-sm text-black/80">
            Join one of our experienced guides for this exciting full-day ride
            through the beautiful Algarve region while riding a KTM EXC-300! We
            will provide all the necessary safety gear and share our best riding
            techniques. Lunch is included in the ride​.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full  bg-white  text-black rounded-md py-8">
          <ul className="flex flex-col ">
            {category.bikes.map((bike, index) => (
              <li key={bike.id} className="flex flex-col gap-4">
                <ul className="flex flex-col gap-8 justify-center items-center ">
                  {bike.packages.map((packages, index) => (
                    <li
                      key={packages.id}
                      className="flex flex-col items-center gap-8 justify-center  w-full "
                    >
                      <div className="flex flex-col items-center justify-center space-y-4 w-full py-2 w-full">
                        <span className="text-4xl ">
                          {index > 0 ? (
                            <span className="text-xl font-bold uppercase">
                              or
                            </span>
                          ) : (
                            "+"
                          )}
                        </span>
                      </div>
                      <section className="flex flex-col items-center gap-4 justify-center bg-black/5 rounded-md p-4 w-full">
                        <p className="text-4xl font-tds tracking-wider relative pl-3">
                          <span className="text-sm absolute top-1 left-0">
                            €
                          </span>
                          {packages.price}
                          <span className="text-sm font-normal ">/day</span>
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
                            Book {packages.riders}
                            {index === 2 ? "+" : ""}{" "}
                            {packages.riders > 1 ? "riders" : "rider"}
                          </button>
                        </Link>
                      </section>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}
