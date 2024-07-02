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
    <header className="flex flex-row items-center justify-between top-0 z-10 left-0 w-full fixed px-6">
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

  const colour =
    pathname === "/contact" || pathname === "/reserve" ? "black" : "white";

  return (
    <div className="mobile flex items-left justify-left md:hidden">
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
            stroke={colour}
            style={{ transform: "scale(1.5)" }}
          />
        </button>
      )}
    </div>
  );
}
