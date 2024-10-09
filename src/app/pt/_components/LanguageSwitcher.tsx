"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isPortuguese = pathname.startsWith("/pt");

  const toggledPath = isPortuguese
    ? pathname.replace("/pt", "") || "/"
    : `/pt${pathname}`;

  return (
    <div className="flex flex-row items-center justify-center gap-8 w-full p-8 max-w-md mx-auto">
      <Link
        href={isPortuguese ? pathname : toggledPath}
        className={`${
          isPortuguese ? "underline  text-tdsRed" : "hover:underline"
        }`}
      >
        Português
      </Link>
      <Link
        href={isPortuguese ? toggledPath : pathname}
        className={`${
          isPortuguese ? "hover:underline " : "underline text-tdsRed"
        }`}
      >
        English
      </Link>
    </div>
  );
}
