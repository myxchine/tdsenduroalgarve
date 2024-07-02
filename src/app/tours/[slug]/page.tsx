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
    <section>
      <Hero
        image={category.image}
        title={category.title}
        titleSize="3xl"
        subtitle="Starting at €270 per day"
        buttonText="Book Now"
        buttonWidth="w-normal"
        buttonLink={"/reserve?category=" + category.name.toLowerCase()}
        buttonText2={null}
        buttonLink2={null}
      />
      <section className="flex flex-col items-center justify-center w-full p-6 bg-black text-white gap-6 py-12">
        <h1 className="text-3xl uppercase font-tds tracking-wider">Packages</h1>
        <div className="flex flex-col items-center justify-center w-full py-8 bg-white  text-black rounded-md">
          <ul className="flex flex-col gap-4">
            {category.bikes.map((bike, index) => (
              <li key={bike.id} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <div className="text-3xl text-center flex flex-col uppercase font-tds tracking-wider">
                    <p>{bike.name}</p>
                    <p>{bike.packageName}</p>
                  </div>

                  <p className="w-full text-xs text-center">
                    {bike.packageInfo}
                  </p>
                </div>

                <ul className="flex flex-col gap-8 justify-center items-center py-8">
                  {bike.packages.map((packages, index) => (
                    <li
                      key={packages.id}
                      className="flex flex-col items-center gap-4 justify-center"
                    >
                      <p className="text-4xl font-tds tracking-wider relative pl-3">
                        <span className="text-sm absolute top-1 left-0">€</span>
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
                      >
                        <button className="bg-tdsRed text-white text py-2  w-[200px] uppercase font-tds tracking-wider text-lg rounded">
                          {packages.riders}
                          {index === 2 ? "+" : ""}{" "}
                          {packages.riders > 1 ? "riders" : "rider"}
                        </button>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="w-full p-4 pt-0">
                  <Image
                    src={bike.image}
                    alt={bike.name}
                    width={400}
                    height={400}
                    priority={true}
                    className="w-full object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}
