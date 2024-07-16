import Link from "next/link";
import Form from "./Form";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full  py-16 pb-6 md:py-28 md:pb-6 md:px-6 border-t border-foreground/10 mt-12">
      <div className="flex flex-col items-start justify-between gap-12 w-full max-w-6xl px-6 md:gap-16">
        <div className="flex flex-col gap-2 items-start text-sm text-foreground/60 md:text-left  mb-8">
          <div className="text-3xl text-left text-foreground w-full font-tds md:text-4xl md:text-left">
            TDS <span className="text-tdsRed">Enduro</span> Algarve
          </div>
          <p className="text-xs mt-2 text-black/60  md:text-sm max-w-xl w-full text-balance">
            Discover the thrill of off-road and street motorcycle adventures in
            the beautiful Algarve region. From guided tours, renting a bike or
            even purchasing, we provide everything you need for an unforgettable
            experience.
          </p>

          <Link href="/tours" className="hover:underline text-tdsRed mt-2 ">
            View tours {"->"}
          </Link>
        </div>

        <section className="flex grid grid-cols-2 md:grid-cols-4 w-full gap-8 md:gap-12 md:flex-row ">
          <nav className="flex flex-col items-start gap-4 text-sm w-full md:items-start">
            <div className="text-base font-semibold">Main</div>

            <Link href="/" className="hover:underline text-black/60">
              Home
            </Link>
            <Link href="/tours" className="hover:underline text-black/60">
              Tours
            </Link>
            <Link href="/bikes" className="hover:underline text-black/60">
              Bikes
            </Link>
          </nav>

          <nav className="flex flex-col items-start gap-4 text-sm w-full md:items-start">
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
            <Link href="/about-tour" className="hover:underline text-black/60">
              About the Tour
            </Link>
          </nav>

          <div className="flex flex-col items-start gap-4 text-sm w-full md:items-start">
            <div className="text-base font-semibold">Contact</div>
            <p className="hover:underline text-black/60">
              Francisco Dos Santos
            </p>
            <p className="hover:underline text-black/60">+351 968 185 407</p>
            <p className="hover:underline text-black/60">
              francisco908.dossantos@gmail.com
            </p>
          </div>
          <div className="hidden md:block">
            <Form />
          </div>
        </section>
        <div className="py-12 md:hidden">
          <Form />
        </div>
        <div className="flex flex-col items-center gap-4 text-xs md:text-sm mt-4 w-full ">
          <p>&copy; 2024 TDS Enduro Algarve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
