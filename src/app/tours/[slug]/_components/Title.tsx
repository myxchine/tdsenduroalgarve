export default function Title() {
  return (
    <div className="gap-2 flex flex-col w-full pt-28 p-6 md:px-0 md:pb-12 md:pt-32">
      <h1 className="text-4xl font-tds sm:text-5xl xl:text-6xl tracking-wider uppercase">
        Hard enduro guided bike{" "}
        <span className="text-tdsRed">
          tours <span className="text-black">+</span> Rental
        </span>{" "}
        ALgarve
      </h1>
      <p className="max-w-[500px] text-black/60 md:text-xl lg:text-base xl:text-xl">
        From €270 per day
      </p>
    </div>
  );
}
