import Link from "next/link";

export default function Button({
  children,
  href,
  type,
}: Readonly<{ children: React.ReactNode; href: string; type: number }>) {
  const buttonType = [
    "border bg-foreground border-foreground text-background hover:bg-background hover:text-foreground hover:border-foreground",
    "border bg-background  border-foreground text-foreground hover:bg-transparent hover:text-background",
    "border bg-accent bg-accent border border-accent text-background hover:bg-transparent hover:text-accent",
    "border-b border-b-2 bg-transparent border-foreground text-foreground hover:bg-foreground hover:text-background",
    "border-b border-b-2 bg-transparent border-background text-background hover:bg-background hover:text-foreground",
  ];

  return (
    <Link
      href={href}
      className={`${
        buttonType[type - 1]
      } w-fit px-6 py-3  mt-2 rounded  font-custom2 tracking-wdier flex flex-col items-center justify-center `}
    >
      {children}
    </Link>
  );
}
