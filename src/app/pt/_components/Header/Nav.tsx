"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/pt", label: "Início" },
  { href: "/pt/tours", label: "Passeios" },
  { href: "/pt/bikes", label: "Motos" },

  //{ href: "/buy", label: "Buy" },
];

export default function Nav(props: any) {
  const pathname = usePathname();

  return (
    <nav {...props}>
      {navItems.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={`font-tds ${
            pathname === item.href ? "text-tdsRed" : ""
          } hover:text-tdsRed`}
        >
          {item.label}
        </Link>
      ))}

      <Link href={"/pt/reserve"}>
        <div
          className={`font-tds  w-fit p-2 px-4 rounded border border-black hover:text-white  ${
            pathname === "/pt/reserve"
              ? "bg-tdsRed text-white border-tdsRed "
              : "bg-black text-white border-black hover:bg-tdsRed hover:border-tdsRed"
          }`}
        >
          Reserva agora
        </div>
      </Link>
    </nav>
  );
}
