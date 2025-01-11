import Link from "next/link";
import { TDSIcon } from "./icons";

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-center flex flex-row text-foreground font-tds  text-3xl font-bold items-center justify-center w-16 py-2"
    >
      <TDSIcon className="h-14 w-14 md:h-16 md:w-16" />
    </Link>
  );
}
