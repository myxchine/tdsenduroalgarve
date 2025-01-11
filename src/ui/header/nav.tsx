"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Tours", href: "/tours" },
  { name: "Bikes", href: "/bikes" },
  { name: "Articles", href: "/articles" },
  { name: "About", href: "/about" },
];

export default function Nav(props: any) {
  const pathname = usePathname();

  return (
    <nav {...props}>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          scroll={false}
          className={`  rounded   hover:text-accent font-accent  w-fit items-center text-center ${
            pathname === item.href ? "text-accent" : ""
          }`}
        >
          {item.name}
        </Link>
      ))}

      <Link
        href={"/reserve"}
        scroll={false}
        className={` border-2 border-accent  rounded px-3 py-1 bg-accent   hover:text-accent hover:bg-background font-accent  w-fit items-center text-center ${
          pathname === "/reserve"
            ? "bg-transparent text-accent"
            : "text-background "
        }`}
      >
        Reserve
      </Link>
    </nav>
  );
}
