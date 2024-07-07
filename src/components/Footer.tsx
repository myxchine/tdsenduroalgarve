import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-8 bg-white text-black">
      <div className="flex flex-col items-center justify-between gap-4 text-xs ">
        <p>&copy; 2024 TDS Enduro Algarve. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/" className="hover:underline ">
            Home
          </Link>
          <Link href="/tours" className="hover:underline ">
            Tours
          </Link>
          <Link href="/bikes" className="hover:underline ">
            Bikes
          </Link>
          <Link href="/reserve" className="hover:underline ">
            Reserve
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
