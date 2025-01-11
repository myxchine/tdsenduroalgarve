"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const featured = [
  { name: "Explore", href: "/" },
  {
    name: "Hand Picked Bikes",
    href: "/bikes",
  },
  {
    name: "Our Mission",
    href: "/articles/curated-biker-community",
  },
  {
    name: "KTM Brabus 1300 R",
    href: "/bikes/ktm-brabus-1300-r",
  },
];

export default function AnnouncementBanner() {
  const pathname = usePathname();
  return (
    <div className="border-b border-foreground">
      <div className="w-full flex flex-row gap-2 font-custom text-xs md:text-sm max-w-6xl mx-auto p-3 md:py-3  md:px-6 overflow-x-auto whitespace-nowrap no-scrollbar ">
        {featured.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            scroll={false}
            className={` border text-xs md:text-sm  hover:border-foreground py-1 px-2 rounded ${
              pathname === item.href ? "border-foreground" : "border-transparent"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
