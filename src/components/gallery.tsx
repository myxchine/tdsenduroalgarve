import Image from "next/image";
import Link from "next/link";

const richImages = [
  {
    src: "6ef4470d-db7d-4127-a10f-63a881c29c41.JPG",
    description:
      "Just a few TDS riders who brought their friends on holiday in the beautiful Algarve, helping each other up a hill.",
  },
  {
    src: "326b9268-997a-4799-b89a-d7f14b18359e.JPG",
    description:
      "After a great ride in the Algarve with TDS we go for a traditional Portuguese lunch in a local restaurant, all included.",
  },
  {
    src: "fe0fd833-40bf-405d-aabe-231ac5baaa1b.JPG",
    description:
      "A group of TDS riders enjoying a beautiful day in the Algarve as we take a break next to a shady lake.",
  },
];
export default function Gallery() {
  return (
    <Link href="/gallery">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-center items-start w-full ">
        {richImages.map((image, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <Image
              src={`/images/gallery/${image.src}`}
              alt={image.description}
              width={300}
              height={300}
              loading="lazy"
              className="object-cover w-full aspect-[3/4] md:aspect-square rounded mb-2"
            />
            <p>{image.description}</p>

            <span className="hover:underline text-accent">
              View more from Gallery {"->"}
            </span>
          </div>
        ))}
      </div>
    </Link>
  );
}
