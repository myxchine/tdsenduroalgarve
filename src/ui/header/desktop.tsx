import Link from "next/link";
import Nav from "./nav";
import Logo from "@/ui/logo";
import { SearchIcon } from "../icons";

export default function Menu() {
  return (
    <div className=" gap-12  border-foreground  w-full md:block hidden ">
      <div className="flex flex-row items-center justify-between  w-full  max-w-6xl mx-auto  gap-8">
        <Logo />
        <div className="flex flex-row items-center gap-4 ">
          <Nav className="flex flex-row gap-8 w-fit items-center" />
        </div>
      </div>
    </div>
  );
}
