import { categories } from "@/app/_assets/bikes";
import Hero from "@/components/Hero";

export default function BikeRental({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    return <div>Category not found</div>;
  }
  return (
    <section>
      <Hero
        image={category.image}
        title={category.title}
        titleSize="3xl"
        subtitle="Starting at 270 euros per day"
        buttonText="Book Now"
        buttonWidth="w-normal"
        buttonLink={"/reserve?bike=" + category.name}
        buttonText2={null}
        buttonLink2={null}
      />

      <div className="flex flex-col items-center justify-center w-full py-8 bg-white pt-28">
        <ul>
          {category?.bikes.map((bike) => (
            <li key={bike.id}>
              <a href={bike.image}>{bike.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
