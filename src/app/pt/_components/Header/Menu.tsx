import Nav from "./Nav";
import Link from "next/link";
import { Logo } from "../Logo";

export default function Menu() {
  return (
    <section className="flex flex-row items-center justify-between w-full md:max-w-6xl mx-auto  p-4 px-5 xl:px-0 ">
      <Link
        href={"/pt"}
        className="w-fit flex flex-row items-start "
        aria-label="TDS Enduro Algarve Inicio"
      >
        <Logo />
      </Link>
      <LanguageSwitcher />
      <Nav className="hidden md:flex text-foreground flex flex-row items-center justify-end gap-8 w-full" />
    </section>
  );
}

function LanguageSwitcher() {
  return (
    <div className="flex flex-row items-end justify-end w-full  gap-8 font-tds">
      <Link href="/" className="hover:underline text-foreground">
        EN
      </Link>
      <Link href="/pt" className="underline text-tdsRed">
        PT
      </Link>
    </div>
  );
}
