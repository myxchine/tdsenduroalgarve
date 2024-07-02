"use client";

import { useState } from "react";
import { MenuIcon, CloseIcon } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <div>
            <OpenCloseButton
              isOpen={isOpen}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
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
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 py-12 " onClick={handleClose}>
            <Link href={"/"}>
              <div className="font-tds text-xl ">Home</div>
            </Link>
            <Link href={"/off-road-bike-rental"}>
              <div className=" font-tds  text-xl ">Off Road Bike Rental</div>
            </Link>
            <Link href={"/reserve"}>
              <div className=" font-tds  text-xl ">Reserve</div>
            </Link>
            <Link href={"/contact"}>
              <div className="  font-tds  text-xl ">Contact</div>
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
}: {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}) {
  const pathname = usePathname();

  const colour =
    pathname === "/contact" || pathname === "/reserve" ? "black" : "white";

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
