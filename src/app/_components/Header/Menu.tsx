import Nav from "./Nav";
import Link from "next/link";
import { Logo } from "../Logo";

export default function Menu() {
  return (
    <section className="flex flex-row items-center justify-between w-full md:max-w-[1600px] mx-auto  p-4 px-5 lg:px-8">
      <Link href={"/"} className="w-fit flex flex-row items-start ">
        <Logo />
      </Link>
      <Nav className="hidden md:flex text-foreground flex flex-row items-center justify-center gap-8" />
    </section>
  );
}
