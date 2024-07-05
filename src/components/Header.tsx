"use client";

import { useState } from "react";
import { MenuIcon, CloseIcon } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const colour =
    pathname === "/" || pathname === "/about-tour" || pathname === "/strategy"
      ? "white"
      : "black";

  const handleOpen = () => {
    setIsOpen(true);
    document.body.classList.add("no-scroll");
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <header className="flex flex-row items-center justify-between top-0 z-10 left-0 w-full absolute px-6 w-full ">
      {!isOpen && (
        <section className="flex flex-row items-center justify-between w-full max-w-6xl mx-auto">
          <Link href={"/"}>
            <div className="text-center bg-tdsRed text-white font-tds p-4 text-3xl ">
              TDS
            </div>
          </Link>
          <div className="block md:hidden">
            <OpenCloseButton
              isOpen={isOpen}
              handleOpen={handleOpen}
              handleClose={handleClose}
              colour={colour}
            />
          </div>

          <div className="hidden md:block">
            <div
              className={`flex flex-row gap-8 items-center justify-center text-${colour}`}
            >
              <Link href={"/"}>
                <div
                  className={`font-tds text-xl ${
                    pathname === "/" ? "text-tdsRed" : ""
                  }`}
                >
                  Home
                </div>
              </Link>
              <Link href={"tours/"}>
                <div
                  className={`font-tds text-xl ${
                    pathname === "/tours" ? "text-tdsRed" : ""
                  }`}
                >
                  Tours
                </div>
              </Link>
              <Link href={"/about-tour"}>
                <div
                  className={`font-tds text-xl ${
                    pathname === "/about-tour" ? "text-tdsRed" : ""
                  }`}
                >
                  About The Tour
                </div>
              </Link>
              <Link href={"/bikes"}>
                <div
                  className={`font-tds text-xl ${
                    pathname === "/bikes" ? "text-tdsRed" : ""
                  }`}
                >
                  Bikes
                </div>
              </Link>
              <Link href={"/reserve"}>
                <div
                  className={`font-tds text-xl text-white w-fit p-2 px-4 rounded ${
                    pathname === "/reserve" ? "bg-tdsRed" : "bg-black"
                  }`}
                >
                  Reserve Now
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {isOpen && (
        <section className="h-screen bg-white w-screen fixed top-0 z-10 left-0 px-6 w-full flex flex-col items-start justify-start">
          <div className="flex flex-row items-center justify-between w-full max-w-6xl mx-auto">
            <Link href={"/"}>
              <div className="text-center bg-tdsRed text-white font-tds p-4 text-3xl ">
                TDS
              </div>
            </Link>
            <div>
              <OpenCloseButton
                isOpen={isOpen}
                handleOpen={handleOpen}
                handleClose={handleClose}
                colour={colour}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 py-12 " onClick={handleClose}>
            <Link href={"/"}>
              <div
                className={`font-tds text-xl ${
                  pathname === "/" ? "text-tdsRed" : ""
                }`}
              >
                Home
              </div>
            </Link>
            <Link href={"tours/"}>
              <div
                className={`font-tds text-xl ${
                  pathname === "/tours" ? "text-tdsRed" : ""
                }`}
              >
                Tours
              </div>
            </Link>
            <Link href={"/about-tour"}>
              <div
                className={`font-tds text-xl ${
                  pathname === "/about-tour" ? "text-tdsRed" : ""
                }`}
              >
                About The Tour
              </div>
            </Link>
            <Link href={"/bikes"}>
              <div
                className={`font-tds text-xl ${
                  pathname === "/bikes" ? "text-tdsRed" : ""
                }`}
              >
                Bikes
              </div>
            </Link>
            <Link href={"/reserve"}>
              <div
                className={`font-tds text-xl text-white w-fit p-2 px-4 rounded ${
                  pathname === "/reserve" ? "bg-tdsRed" : "bg-black"
                }`}
              >
                Reserve Now
              </div>
            </Link>
          </div>
        </section>
      )}
    </header>
  );
};

export default Header;

function OpenCloseButton({
  isOpen,
  handleOpen,
  handleClose,
  colour,
}: {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  colour: string;
}) {
  return (
    <div className=" flex items-left justify-left md:hidden">
      {!isOpen && (
        <button
          aria-label="Mobile Menu Open"
          onClick={handleOpen}
          className="flex items-center justify-center p-2"
        >
          <MenuIcon
            className="   "
            stroke={colour}
            style={{ transform: "scale(1.5)" }}
          />
        </button>
      )}

      {isOpen && (
        <button
          aria-label="Mobile Menu Close"
          className="flex items-center justify-center p-2"
          onClick={handleClose}
        >
          <CloseIcon
            className=""
            stroke="black"
            style={{ transform: "scale(1.5)" }}
          />
        </button>
      )}
    </div>
  );
}
