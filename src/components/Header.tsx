"use client";

import { useState } from "react";
import { MenuIcon, CloseIcon } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

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
    <header className="flex flex-row items-center justify-between top-0 z-10 left-0 w-full fixed px-4 pl-6">
      <Link href={"/"}>
        <div className="text-center bg-red-500 text-white font-tds p-4 text-3xl bg-tdsRed">
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

  const colour = pathname === "/" ? "white" : "black";

  return (
    <div className="mobile flex items-left justify-left md:hidden">
      {!isOpen && (
        <button
          aria-label="Mobile Menu Open"
          onClick={handleOpen}
          className="flex items-center justify-center p-2"
        >
          <MenuIcon
            className=" text-2xl h-[24px] w-[24px] flex items-left justify-left "
            stroke={colour}
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
            className="p-[3px] text-2xl h-[24px] w-[24px] flex items-left justify-left "
            stroke={colour}
          />
        </button>
      )}
    </div>
  );
}
