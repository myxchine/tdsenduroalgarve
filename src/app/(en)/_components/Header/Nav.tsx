"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/bikes", label: "Bikes" },
  { href: "/market", label: "Market" },
  { href: "/moments", label: "Moments" },

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

      <Link href={"/reserve"}>
        <div
          className={`font-tds  w-fit p-2 px-4 rounded border border-black hover:bg-tdsRed hover:text-white hover:border-tdsRed ${
            pathname === "/reserve"
              ? "bg-tdsRed text-white border-tdsRed"
              : "bg-black text-white border-black"
          }`}
        >
          Reserve Now
        </div>
      </Link>
    </nav>
  );
}
