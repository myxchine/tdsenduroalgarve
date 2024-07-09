import Link from "next/link";
import { TDSIcon } from "./icons";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-8 border-t border-black/10 py-16 pb-6 md:py-20 md:pb-6">
      <div className="flex flex-col items-start justify-between gap-12 w-full max-w-6xl px-6 md:gap-16">
        <div className="flex flex-row gap-4 items-center md:gap-8">
          <TDSIcon className="w-auto h-[100px] md:w-32 md:h-32" />
          <h2 className="text-4xl w-full font-tds md:text-6xl md:text-center">
            TDS <span className="text-tdsRed ">Enduro</span> Algarve
          </h2>
        </div>

        <section className="flex grid grid-cols-2 md:grid-cols-3 w-full gap-8 md:gap-12 md:flex-row ">
          <nav className="flex flex-col items-start gap-4 text-sm w-full">
            <div className="text-base font-semibold">Main</div>

            <Link href="/" className="hover:underline text-black/60">
              Home
            </Link>
            <Link href="/tours" className="hover:underline text-black/60">
              Our Tours
            </Link>
            <Link href="/rentals" className="hover:underline text-black/60">
              Our Rentals
            </Link>
          </nav>

          <nav className="flex flex-col items-start gap-4 text-sm w-full">
            <div className="text-base font-semibold">Reserve</div>
            <Link href="/reserve" className="hover:underline text-black/60">
              Reserve Tour
            </Link>
            <Link
              href="/reserve/rent"
              className="hover:underline text-black/60"
            >
              Reserve Rental
            </Link>
          </nav>

          <nav className="flex flex-col items-start gap-4 text-sm w-full">
            <div className="text-base font-semibold">Explore</div>
            <Link href="/about-tour" className="hover:underline text-black/60">
              About the Tour
            </Link>
            <Link href="/bikes" className="hover:underline text-black/60">
              Our Motorbikes
            </Link>
          </nav>
        </section>
        <p className="text-xs mt-2 text-black/60 text-left md:text-lg max-w-5xl w-full">
          Discover the thrill of off-road and street motorcycle adventures in
          the beautiful Algarve region. Whether you're looking for a guided tour
          through the stunning mountains or renting a bike for your own
          exploration, we provide everything you need for an unforgettable
          experience. Join us for an adventure and create lasting memories on
          two wheels.
        </p>
        <div className="flex flex-col items-center gap-4 text-xs md:text-sm mt-4 w-full ">
          <p>&copy; 2024 TDS Enduro Algarve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
