"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row items-center justify-center gap-8 w-full p-8 max-w-md mx-auto">
      <Link href={`/pt${pathname}`} className="hover:underline ">
        Português
      </Link>

      <p className="text-tdsRed underline">English</p>
    </div>
  );
}
