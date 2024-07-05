import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-8 bg-white text-black">
      <div className="flex flex-col items-center justify-between gap-4 text-sm pb-8 w-full text-left px-6 hidden">
        <Link href="/" className="hover:underline w-full" prefetch={false}>
          Home
        </Link>
        <Link
          href="/tours/off-road-enduro-bike-rental"
          className="hover:underline w-full"
          prefetch={false}
        >
          Tours
        </Link>
        <Link
          href="/about"
          className=" hover:underline w-full"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="/contact"
          className=" hover:underline w-full"
          prefetch={false}
        >
          Contact
        </Link>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 text-xs ">
        <p>&copy; 2024 TDS Enduro Algarve. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/" className="hover:underline " prefetch={false}>
            Home
          </Link>
          <Link href="/tours" className="hover:underline " prefetch={false}>
            Tours
          </Link>
          <Link href="/bikes" className="hover:underline " prefetch={false}>
            Bikes
          </Link>
          <Link href="/reserve" className="hover:underline " prefetch={false}>
            Reserve
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
