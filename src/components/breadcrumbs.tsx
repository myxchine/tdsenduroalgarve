"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter((part) => part !== "");

  const getBreadcrumbPath = (index: number) => {
    return "/" + parts.slice(0, index + 1).join("/");
  };

  return (
    <div className="w-full flex flex-row gap-2  font-custom text-xs md:text-sm max-w-6xl mx-auto p-4 md:p-6 md:py-4 overflow-x-auto whitespace-nowrap no-scrollbar">
      <Link
        href="/"
        className=" text-black hover:text-black/60 border border-transparent "
      >
        Home
      </Link>
      {parts.length > 0 && <span>/</span>}

      {parts.map((part, index) => (
        <Link
          key={index}
          href={getBreadcrumbPath(index)}
          className={
            pathname === getBreadcrumbPath(index)
              ? "text-black hover:text-black/60 border border-transparent "
              : "text-black hover:text-black/60 border border-transparent "
          }
        >
          {part}
          {index < parts.length - 1 && <span className="ml-2">/</span>}
        </Link>
      ))}
    </div>
  );
}
