export default function Phone() {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <a
        href="tel:+351 968 185 407"
        className="w-full hover:text-accent font-accent text-sm text-foreground text-center p-2 border-b border-black/5 lg:p-4 "
      >
        +351 968 185 407{" "}
        <span className="font-sans tracking-normal font-bold"> {"->"}</span>
      </a>
    </div>
  );
}
