import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-8 border-t border-black/10 py-10 pb-6">
      <div className="flex flex-col items-center justify-between gap-8 w-full max-w-6xl px-6 md:gap-16">
        <h2 className="text-4xl font-semibold w-full font-tds md:text-6xl md:text-center">
          TDS <span className="text-tdsRed ">Enduro</span> Algarve
        </h2>

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
              Our Bikes
            </Link>
          </nav>
        </section>
        <p className="text-xs mt-2 text-black/60 text-left md:text-lg md:text-center">
          Discover the thrill of off-road and street motorcycle adventures in
          the beautiful Algarve region. Whether you're looking for a guided tour
          through the stunning mountains or renting a bike for your own
          exploration, we provide everything you need for an unforgettable
          experience. Join us for an adventure and create lasting memories on
          two wheels.
        </p>
        <div className="flex flex-col items-center gap-4 text-xs md:text-sm">
          <p>&copy; 2024 TDS Enduro Algarve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
