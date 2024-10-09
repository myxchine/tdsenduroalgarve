export default function AnnouncementBanner() {
  return (
    <section className="w-full  font-tds text-sm text-foreground text-center p-2 border-b border-black/5 lg:p-4 tracking-wider">
      <a href="tel:+351 968 185 407">
        +351 968 185 407{" "}
        <span className="font-sans tracking-normal font-bold"> {"->"}</span>
      </a>
    </section>
  );
}
