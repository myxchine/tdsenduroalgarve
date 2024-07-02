import Link from "next/link";

export default function Vanilla({
  title,
  text,
  buttonText,
  buttonLink,
}: {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}) {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-6 max-w-xl mx-auto my-10 p-4 text-center">
      <div className="gap-4 flex flex-col w-full">
        <h1 className="text-4xl font-tds sm:text-5xl xl:text-6xl  font-bold tracking-wider">
          {title}
        </h1>
        <p className="max-w-[500px] text-black/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {text}
        </p>
      </div>
      <Link href={buttonLink}>
        <button className="bg-tdsRed text-white font-bold w-full uppercase p-2 px-8 hover:bg-tdsRed/80">
          {buttonText}
        </button>
      </Link>
    </section>
  );
}
