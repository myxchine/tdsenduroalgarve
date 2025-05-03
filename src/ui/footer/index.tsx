import Link from "next/link";

import { getAllPosts } from "@/server/api";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Bikes", href: "/bikes" },
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
const tourItems = [
  { label: "Reserve a tour", href: "/reserve" },
  { label: "Learn about the tour", href: "/tours" },
  { label: "The Bike", href: "/bikes" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
];
export default function Footer() {
  const posts_nav = getAllPosts();

  return (
    <footer
      id="tds-footer"
      className=" w-full flex flex-col items-start justify-start gap-12   md:gap-16  max-w-6xl mx-auto p-4 md:p-6   my-8 md:my-12    "
    >
      <div className="flex flex-col gap-4  md:gap-6 ">
        <Link href="/">
          <h2>
            TDS <span className="text-accent">Enduro </span> Algarve
          </h2>
        </Link>
        <p className=" max-w-xl w-full text-balance">
          Premium Enduro Motorbike Tours in Southern Portugal (Algarve) for
          those who want <strong>nothing but the best.</strong>
        </p>

        <p>
          TDS offers a truly curated experience that combines the best bikes,
          gear, and routes for the ultimate enduro adventure. With one-on-one
          service tailored to you, bike, gear, lunch and drinks included.
        </p>

        <Link href="/tours" className="hover:underline text-accent ">
          View tours {"->"}
        </Link>
      </div>
      <div className="flex flex-wrap  md:my-16 w-full gap-16 md:gap-24 ">
        <nav className="flex flex-col items-start gap-4  w-fit md:gap-6">
          <p className="font-semibold font-custom text-lg">Main</p>
          {navItems &&
            navItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={` hover:underline text-black/60 font-regular text-sm`}
              >
                {item.label}
              </Link>
            ))}
        </nav>
        <nav className="flex flex-col items-start gap-4  w-fit md:gap-6">
          <p className="font-semibold font-custom text-lg">The Tour</p>

          {tourItems &&
            tourItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={` hover:underline text-black/60 font-regular text-sm`}
              >
                {item.label}
              </Link>
            ))}
        </nav>
        <nav className="flex flex-col items-start gap-4  w-fit md:gap-6 max-w-[320px] ">
          <p className="font-semibold font-custom text-lg">
            Explore TDS Enduro Algarve
          </p>
          {posts_nav &&
            posts_nav.map((item, index) => (
              <Link
                href={"/articles/" + item.slug}
                key={index}
                className={` hover:underline text-black/60 font-regular line-clamp-1 text-sm`}
              >
                {item.title}
              </Link>
            ))}
        </nav>

        <nav className="flex flex-col items-start gap-4  w-fit md:gap-6">
          <p className="font-semibold font-custom text-lg">Contact</p>

          <p className="hover:underline text-black/60 font-regular text-sm">
            Francisco Dos Santos
          </p>
          <a
            href="tel:+351 968 185 407"
            className="hover:underline text-black/60 font-regular text-sm"
          >
            +351 968 185 407
          </a>
          <a
            href="mailto:francisco@tdsenduroalgarve.com"
            className="hover:underline text-black/60 font-regular text-sm"
          >
            francisco@tdsenduroalgarve.com
          </a>
        </nav>
      </div>

      <p className="flex flex-row items-center justify-center text-center gap-1 text-sm md:text-base  w-full mt-4 md:mt-8">
        &copy; 2025 TDS Enduro Tours.
      </p>
    </footer>
  );
}
