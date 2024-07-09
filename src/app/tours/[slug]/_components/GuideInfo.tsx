import Link from "next/link";

export default function GuideInfo() {
  return (
    <div className="flex flex-col  items-start justify-start space-y-4 w-full w-full bg-black/5 rounded-md  mx-auto p-6 relative ">
      <h4 className="text-2xl    uppercase font-tds tracking-wider w-full">
        GUIDED TOUR
      </h4>
      <p className="w-full text-sm text-black/80 pb-16">
        Join our experienced guides for an exhilarating full-day ride through
        the stunning Algarve region on a KTM EXC-300! We provide all the
        necessary safety gear and share our top riding techniques. A traditional
        lunch in the mountains is included!
        <br />
        Our unique tracks cater to riders of all skill levels. Your gear will be
        ready for you, so you can hop on one of our fully-equipped Enduro bikes
        and enjoy an unforgettable ride. The day is yours to explore, with our
        guides tailoring the experience based on your feedback. Best of all,
        everything is included in your package with no hidden costs!
      </p>
      <div className="absolute bottom-0 left-0 right-0 w-full p-6">
        <Link href={"/guided-tours/off-road-enduro-tour"} className="w-full">
          <button className="flex flex-col w-full p-2 px-4 rounded bg-black text-white font-tds hover:bg-black/80 text-center justify-center items-center ">
            LEARN MORE
          </button>
        </Link>
      </div>
    </div>
  );
}
