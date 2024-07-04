import Image from "next/image";
import Link from "next/link";
export default function BikeInfo({ category }: { category: any }) {
  return (
    <section className="flex flex-col items-start gap-4 justify-start bg-black/5 rounded-md w-full p-6 w-full relative">
      <div className="flex flex-col items-center justify-center space-y-4 w-full pt-0 w-full pb-16">
        <h4 className="text-2xl    uppercase font-tds tracking-wider w-full">
          {category.bikes[0].name}
        </h4>
        <p className="w-full text-sm text-black/80">
          {category.bikes[0].description}
        </p>
      </div>
      <div className="w-full p-4 pt-0 hidden">
        <Image
          src={category.bikes[0].image}
          alt={category.bikes[0].name}
          width={400}
          height={400}
          priority={true}
          className="w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full p-6">
        <Link href={"/bikes/ktm-exc-300"} className="w-full">
          <button className="flex flex-col w-full p-2 px-4 rounded bg-black text-white font-tds hover:bg-black/80 text-center justify-center items-center ">
            LEARN MORE
          </button>
        </Link>
      </div>
    </section>
  );
}
