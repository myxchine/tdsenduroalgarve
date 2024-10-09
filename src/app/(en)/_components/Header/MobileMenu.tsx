"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import { MenuIcon, CloseIcon } from "../icons";
import { Logo } from "../Logo";
import AnnouncementBanner from "./AnnouncementBanner";
import LanguageSwitcher from "../LanguageSwitcher";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen && (
        <section className="flex flew-row items-center justify-between w-full md:max-w-6xl mx-auto p-4 px-5">
          <Link
            href={"/"}
            className="w-fit flex flex-col  items-center justify-center "
            aria-label="TDS Enduro Algarve Home"
          >
            <Logo />
          </Link>
          <button
            aria-label="Mobile Menu Open"
            onClick={() => setIsOpen(true)}
            className="flex w-fit items-start justify-start "
          >
            <MenuIcon className="  h-8 w-8 " stroke="black" />
          </button>
        </section>
      )}

      {isOpen && (
        <section className="h-screen bg-background w-screen fixed top-0 z-10 left-0 w-full flex flex-col text-foreground ">
          <AnnouncementBanner />
          <div className="flex flex-rowitems-center justify-between w-full max-w-6xl mx-auto  p-4 px-5 ">
            <Link
              href={"/"}
              className="w-fit flex flex-col  items-center justify-center "
              aria-label="TDS Enduro Algarve Home"
            >
              <Logo />
            </Link>
            <button
              aria-label="Mobile Menu Close"
              className="flex items-center justify-start "
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon stroke="black" className="  h-8 w-8" />
            </button>
          </div>
          <div onClick={() => setIsOpen(false)}>
            <Nav className="flex flex-col gap-8 py-12 items-center justify-center" />
          </div>
          <LanguageSwitcher />
        </section>
      )}
    </>
  );
}
