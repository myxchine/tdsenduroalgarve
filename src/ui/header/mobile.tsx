"use client";

import { useState, useEffect } from "react";
import Nav from "./nav";
import { MenuIcon, CloseIcon, SearchIcon } from "@/ui/icons";
import Logo from "@/ui/logo";
import { usePathname } from "next/navigation";
import AnnouncementBanner from "@/components/announcement";
import Link from "next/link";
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const footer = document.getElementById("tds-footer");
    const main = document.getElementById("tds-main");
    if (!footer || !main) {
      return;
    }
    footer.style.display = isOpen ? "none" : "flex";
    main.style.display = isOpen ? "none" : "block";
  }, [isOpen]);

  return (
    <div className={`w-full block md:hidden `}>
      <div
        className={`flex flex-row items-center justify-between w-full h-fit p-4 py-3`}
      >
        <Logo />

        <Buttons open={isOpen} setIsOpen={setIsOpen} />
      </div>

      {isOpen && (
        <>
          <Nav className="flex flex-col gap-6 py-4 items-center justify-center px-4 mt-4" />
        </>
      )}
    </div>
  );
}

function Buttons({ open, setIsOpen }: { open: boolean; setIsOpen: any }) {
  return (
    <div className="p-2 rounded bg-white/80 h-fit flex items-center justify-center">
      {!open ? (
        <button aria-label="Mobile Menu Open" onClick={() => setIsOpen(true)}>
          <MenuIcon className="size-6 text-foreground" stroke="black" />
        </button>
      ) : (
        <button aria-label="Mobile Menu Close" onClick={() => setIsOpen(false)}>
          <CloseIcon stroke="black" className="  size-6" />
        </button>
      )}
    </div>
  );
}
