import Link from "next/link";

export default function Phone() {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <Link
        href="/reserve"
        className="w-full hover:text-accent font-accent text-sm text-foreground text-center p-2 border-b border-black/5 lg:p-4 "
      >
        Ride Hard Enduro
        <span className="font-sans tracking-normal font-bold"> {"->"}</span>
      </Link>
    </div>
  );
}
