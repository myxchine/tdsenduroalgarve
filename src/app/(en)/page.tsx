import Image from "next/image";
import Link from "next/link";
import { tours } from "@/server/db/tours";
import { bikes } from "@/server/bikes";
import EnduroPortugal from "./_components/Hero";
export default function Home() {
  return (
    <>
      <EnduroPortugal />
      <GalleryHero />
      <PortugalEnduroTours />
      <KTMTopoftheLineBikes />
      <Posts />
      <TestimonialsPage />
      <EnduroToursAlgarve />
      <AboutTheTour />
      <IntroductiontoDifficultyLevels />
      <OffRoadAdventures />
      <WhatToExpect />
      <AlgarveMotorcycleTours />
      <MotorbikeHolidayPortugal />
      <MotorcycleToursInAlgarvePortugal />
    </>
  );
}
const images = [
  "6ef4470d-db7d-4127-a10f-63a881c29c41.JPG",
  "326b9268-997a-4799-b89a-d7f14b18359e.JPG",
  "38fe4ccc-30c5-411f-9bb2-e0707836f1a7.JPG",
  "fe0fd833-40bf-405d-aabe-231ac5baaa1b.JPG",
];

function GalleryHero() {
  return (
    <section className="flex flex-col gap-4  w-full  md:max-w-6xl pt-2  mx-auto xl:px-0 py-8 md:py-12 md:pt-24">
      <div className="px-6 flex flex-col gap-2">
        <h2 className="text-3xl font-tds md:text-5xl">Portugal Enduro Tours</h2>
        <p className="text-sm text-black/80 max-w-md">
          Take a look at fun, dirty, silly, unique and exciting moments with our
          riders at TDS Algarve on our Portugal Enduro Tours.
        </p>
        <Link
          href={"/moments"}
          className="text-sm text-tdsRed hover:underline md:text-lg"
        >
          View full gallery {"->"}
        </Link>
      </div>
      <Gallery />
    </section>
  );
}

function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center items-start w-full p-6 ">
      {images.map((image, index) => (
        <Image
          key={index}
          src={`/images/moments/${image}`}
          alt={image}
          width={300}
          height={300}
          loading="lazy"
          className="object-cover w-full aspect-square"
          draggable={true}
        />
      ))}
    </div>
  );
}

function PortugalEnduroTours() {
  return (
    <section className="flex flex-col gap-4  w-full  md:max-w-6xl pt-2  mx-auto xl:px-0 py-8 md:py-12 md:pt-24">
      <div className="px-6 flex flex-col gap-2">
        <h2 className="text-3xl font-tds md:text-5xl">
          See our available TDS Enduro Tours in Algarve, Portugal
        </h2>
        <p className="text-sm text-black/80 max-w-md">
          Enjoy a day long unforgettable hard enduro ride in Portugal, Algarve,
          with all the gear, bike, trails and even lunch included! Bike license
          not required off road. Take a look below.
        </p>
        <Link
          href={"/tours"}
          className="text-sm text-tdsRed hover:underline md:text-lg"
        >
          View All {"->"}
        </Link>
      </div>
      <ToursList />
    </section>
  );
}

function IntroductiontoDifficultyLevels() {
  return (
    <section className="px-6 py-12  mx-auto w-fit">
      <div className="max-w-xl mx-auto  flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl   mb-2  uppercase font-tds tracking-wider  md:text-5xl max-w-xl">
            Introduction to Difficulty Levels
          </h2>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            We offer a variety of difficulty levels to cater to riders of all
            skill levels.
          </p>
          <ul className="flex flex-col gap-4">
            <li>
              <h3>Beginner</h3>
              <p>
                This is the most beginner-friendly tour, suitable for riders who
                are new to enduro riding. It offers a gentle ride through the
                rolling hills and picturesque villages of southern Portugal.
              </p>
            </li>
            <li>
              <h3>Intermediate</h3>
              <p>
                This tour is suitable for riders who have some experience in
                enduro riding and are looking for a more challenging ride. It
                offers a mix of scenic roads and challenging terrain, providing
                a unique and exciting experience.
              </p>
            </li>
            <li>
              <h3>Advanced</h3>
              <p>
                This tour is suitable for riders who have some experience in
                enduro riding and are looking for a more challenging ride. It
                offers a mix of scenic roads and challenging terrain, providing
                a unique and exciting experience.
              </p>
            </li>
          </ul>
        </div>
        <Link href={"/tours"} className="w-full">
          <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center  md:px-8 md:text-lg">
            Book Your Difficulty Level Tour Today!
          </button>
        </Link>
      </div>
    </section>
  );
}

function AlgarveMotorcycleTours() {
  return (
    <section className="px-6 py-12  mx-auto w-fit">
      <div className="max-w-6xl mx-auto  flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl   mb-2  uppercase font-tds tracking-wider  md:text-5xl max-w-xl">
            Algarve Motorcycle Tours: Explore the Best of Southern Portugal
          </h2>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            Are you looking for a unique and exciting motorcycle tour in the
            Algarve region of Portugal? Our guided tours will take you on an
            unforgettable adventure through the rolling hills, rugged coastline,
            and picturesque villages of southern Portugal.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            Our Algarve motorcycle tours are designed to provide a hassle-free
            experience, with everything taken care of from the moment you
            arrive. From the scenic roads to the stunning scenery, our expert
            guides will show you the best of the Algarve on two wheels.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            What's included in our Algarve motorcycle tour packages? We've got
            you covered with:
          </p>

          <ul className="list-disc pl-4">
            <li>Guided motorcycle tour with an experienced guide</li>
            <li>Top-quality motorcycle rental</li>
            <li>Support vehicle and luggage transfer</li>
            <li>Breakfast and lunch each day</li>
            <li>Accommodation in a carefully selected hotel or guesthouse</li>
          </ul>
        </div>

        <Link href={"/tours"} className="w-full">
          <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center  md:px-8 md:text-lg">
            Book Your Algarve Motorcycle Tour Today!
          </button>
        </Link>
      </div>
    </section>
  );
}
function MotorcycleToursInAlgarvePortugal() {
  return (
    <section className="px-6 py-12  mx-auto w-fit">
      <div className="max-w-6xl mx-auto  flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl   mb-2  uppercase font-tds tracking-wider  md:text-5xl max-w-xl">
            Motorcycle Tours in Algarve Portugal: Experience the Ultimate Ride
          </h2>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            Are you ready for the ultimate motorcycle tour in the Algarve region
            of Portugal? Our guided tours will take you on an unforgettable
            adventure through the rolling hills, rugged coastline, and
            picturesque villages of southern Portugal.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            Our motorcycle tours in Algarve Portugal are designed to provide a
            unique and exciting experience, with a focus on safety and
            enjoyment. Our expert guides will take you on a journey through the
            best of the Algarve, with a mix of scenic roads, challenging
            terrain, and stunning scenery.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            What can you expect from our motorcycle tours in Algarve Portugal?
            We've got you covered with:
          </p>

          <ul className="list-disc pl-4">
            <li>Guided motorcycle tour with an experienced guide</li>
            <li>Top-quality motorcycle rental</li>
            <li>Support vehicle and luggage transfer</li>
            <li>Breakfast and lunch each day</li>
            <li>Accommodation in a carefully selected hotel or guesthouse</li>
          </ul>
        </div>

        <Link href={"/tours"} className="w-full">
          <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center  md:px-8 md:text-lg">
            Book Your Motorcycle Tour in Algarve Portugal Today!
          </button>
        </Link>
      </div>
    </section>
  );
}

function MotorbikeHolidayPortugal() {
  return (
    <section className="px-6 py-12  mx-auto w-fit">
      <div className="max-w-6xl mx-auto  flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl   mb-2  uppercase font-tds tracking-wider  md:text-5xl max-w-xl">
            Motorbike Holiday Portugal: Explore the Best of the Algarve
          </h2>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            Are you looking for a motorbike holiday in Portugal that combines
            stunning scenery, exciting roads, and a unique cultural experience?
            Look no further than the Algarve region, where our guided motorbike
            tours will take you on an unforgettable adventure.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            Our motorbike holidays in Portugal are designed to provide a
            hassle-free experience, with everything taken care of from the
            moment you arrive. From the rugged coastline to the rolling hills
            and picturesque villages, our expert guides will show you the best
            of the Algarve on two wheels.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            What's included in our motorbike holiday packages? We've got you
            covered with:
          </p>

          <ul className="list-disc pl-4">
            <li>Guided motorbike tour with an experienced guide</li>
            <li>Top-quality motorbike rental</li>
            <li>Accommodation in a carefully selected hotel or guesthouse</li>
            <li>Breakfast and lunch each day</li>
            <li>Support vehicle and luggage transfer</li>
          </ul>
        </div>

        <Link href={"/tours"} className="w-full">
          <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center  md:px-8 md:text-lg">
            Book Your Motorbike Holiday in Portugal Today!
          </button>
        </Link>
      </div>
    </section>
  );
}

function OffRoadAdventures() {
  return (
    <section className="px-6 py-12  mx-auto w-fit">
      <div className="max-w-6xl mx-auto  flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl   mb-2  uppercase font-tds tracking-wider  md:text-5xl">
            Off Road Adventures
          </h2>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            Are you ready for an unforgettable off-road adventure in the Algarve
            region of Portugal? Our guided tours offer a unique opportunity to
            explore the diverse landscapes of southern Portugal on top-quality
            KTM motorbikes. From rugged mountain paths to coastal tracks, our
            expert guides will take you on an exhilarating ride through the most
            breathtaking scenery.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            But what if I'm a beginner? Don't worry! Our tours are designed for
            riders of all skill levels, and our experienced guides will provide
            you with all the necessary safety gear and share their top riding
            techniques to ensure a safe and enjoyable experience.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            What's included in the tour? We've got you covered! Our packages
            include:
          </p>
          <ul className="list-disc pl-4">
            <li>Full-day guided tour with an experienced guide</li>
            <li>Top-quality KTM EXC-300 motorbike</li>
            <li>All necessary safety gear</li>
            <li>Traditional lunch in the mountains</li>
            <li>No hidden costs!</li>
          </ul>
        </div>
        <Link href={"/tours"} className="w-full">
          <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center  md:px-8 md:text-lg">
            Book Your Off Road Adventure Today!
          </button>
        </Link>
      </div>
    </section>
  );
}

function WhatToExpect() {
  return (
    <section className="px-6 py-12  mx-auto w-fit">
      <div className="max-w-6xl mx-auto  flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl   mb-2  uppercase font-tds tracking-wider  md:text-5xl">
            What to Expect
          </h2>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            Our off-road adventures are designed to provide an unforgettable
            experience for riders of all skill levels. From the moment you
            arrive, our expert guides will take care of everything, providing
            you with a comprehensive briefing, safety gear, and a top-quality
            KTM EXC-300 motorbike.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            But what about the terrain? Our unique tracks cater to riders of all
            skill levels, from beginner-friendly trails to more challenging
            routes for experienced riders. Our guides will tailor the experience
            to your feedback, ensuring that you get the most out of your day.
          </p>
          <p className="w-full text-lg text-black/80 max-w-xl md:text-xl">
            What about lunch? We've got that covered too! A traditional lunch in
            the mountains is included in your package, giving you the
            opportunity to refuel and recharge for the rest of the day.
          </p>
        </div>

        <Link href={"/tours"} className="w-full">
          <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center  md:px-8 md:text-lg">
            Join Us for an Unforgettable Off Road Adventure!
          </button>
        </Link>
      </div>
    </section>
  );
}

function EnduroToursAlgarve() {
  return (
    <section className="px-6 py-12  mx-auto w-fit">
      <div className="max-w-6xl mx-auto  flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl   mb-2  uppercase font-tds tracking-wider  md:text-5xl">
            Enduro Tours Algarve
          </h2>
          <p className="w-full text-sm text-black/80 max-w-xl md:text-lg">
            TDS Enduro offers a unique opportunity for adventure riders to
            explore Portugal on top-quality KTM motorbikes. Our tours take you
            through the diverse landscapes of the Algarve region, known for its
            challenging trails and beautiful scenery. Riders can experience a
            variety of terrains, from rugged mountain paths to coastal tracks.
            Our guided tours are designed for both beginners and experienced
            riders, providing a safe and exciting adventure. Join TDS Enduro for
            a professionally organized tour and discover the thrill of enduro
            riding in one of Europe's most captivating destinations.
          </p>
        </div>

        <Link href={`/tours`} className="w-full">
          <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center  md:px-8 md:text-lg">
            Let's do it
          </button>
        </Link>
      </div>
    </section>
  );
}

function AboutTheTour() {
  return (
    <section className="px-6 py-12  mx-auto w-fit">
      <div className="max-w-6xl mx-auto  flex flex-col gap-8">
        <div className="flex flex-col gap-6 w-full">
          <h2 className="text-3xl   mb-2  uppercase font-tds tracking-wider  md:text-5xl">
            About the Tour
          </h2>
          <p className="w-full text-sm text-black/80 max-w-xl md:text-lg">
            Join our experienced guides for an exhilarating full-day ride
            through the stunning Algarve region on a KTM EXC-300! We provide all
            the necessary safety gear and share our top riding techniques. A
            traditional lunch in the mountains is included!
            <br />
            <br />
            Our unique tracks cater to riders of all skill levels. Your gear
            will be ready for you, so you can hop on one of our fully-equipped
            Enduro bikes and enjoy an unforgettable ride. The day is yours to
            explore, with our guides tailoring the experience based on your
            feedback. Best of all, everything is included in your package with
            no hidden costs!
          </p>
        </div>

        <Link href={`/tours`} className="w-full">
          <button className="flex flex-col w-full md:max-w-[300px] p-2 px-4 rounded bg-tdsRed text-white font-tds hover:bg-tdsRed/80 text-center justify-center items-center  md:px-8 md:text-lg">
            Let's do it
          </button>
        </Link>
      </div>
    </section>
  );
}

function KTMTopoftheLineBikes() {
  return (
    <section className="flex flex-col gap-4  w-full  md:max-w-6xl  mx-auto xl:px-0 py-8 md:py-12 ">
      <div className="px-6 flex flex-col gap-2">
        <h2 className="text-3xl font-tds md:text-5xl ">
          KTM Enduro Bikes Algarve, Portugal
        </h2>
        <p className="text-sm text-black/80 max-w-md">
          State of the art enduro motorcycles that you can rely on and enjoy
          your ride. Rental is available for all bikes, tours available for the
          KTM 300 EXC.
        </p>
        <Link
          href={"/bikes"}
          className="text-sm text-tdsRed hover:underline md:text-lg "
        >
          View All {"->"}
        </Link>
      </div>
      <BikesList />
    </section>
  );
}

function BikesList() {
  return (
    <section className="flex flex-col gap-4  w-full ">
      <div className="flex overflow-x-auto scrollbar-hide gap-4 p-6 md:gap-12 items-center ">
        {bikes.map((bike) => (
          <div
            key={bike.id}
            className="flex-shrink-0  flex flex-col items-center justify-center  scrollbar-hide gap-6 relative"
          >
            <Image
              src={`/images/bikes/${bike.image}`}
              alt={bike.name}
              width={200}
              height={200}
              quality={65}
              priority={true}
              className="w-[300px] h-full object-cover md:w-full"
            />

            <div className="flex flex-col gap-2 w-full justify-start items-start">
              <h3 className="text-xl font-bold text-center hover:text-tdsRed/80 ">
                {bike.name}
              </h3>

              <p className="text-xs text-goreground/40 max-w-[250px] md:text-sm">
                {bike.shout}
              </p>
              <Link
                href={`/bikes/${bike.slug}`}
                className="text-sm  text-center text-tdsRed hover:underline mt-2 md:text-lg"
              >
                Let's do it {"->"}
              </Link>
            </div>
            {bike.tour && (
              <Link
                href={`/tours`}
                className="text-white bg-black absolute top-0 left-0 py-1 px-3 bg-black text-xs shadow text-center hover:bg-black/80"
              >
                Available Now
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ToursList() {
  return (
    <section className="flex flex-col gap-4  w-full ">
      <div className="flex flex-row overflow-x-auto scrollbar-hide gap-4 md:gap-16 p-6 md:grid md:grid-cols-3 w-full">
        {tours.map((tour) => (
          <div
            key={tour.id}
            className="flex-shrink-0  flex flex-col items-start justify-start  gap-6 "
          >
            <Image
              src={`/images/tours/${tour.image}`}
              alt={tour.slug}
              width={200}
              height={200}
              quality={65}
              priority={true}
              className="w-[300px] h-[200px] object-cover  md:h-[400px] md:w-full"
            />
            <div className="flex flex-col gap-2 w-full justify-start items-start md:w-full md:gap-4">
              <h3 className="text-xl font-bold text-center  md:text-3xl">
                {tour.name}
              </h3>

              <p className="text-xs text-goreground/40 max-w-[250px] md:text-sm">
                {tour.description}
              </p>
              <Link
                href={`/tours/${tour.slug}`}
                className="text-sm  text-center text-tdsRed hover:underline mt-2 md:text-lg"
              >
                From €{tour.startingPrice}/day {"->"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import { posts } from "@/data/blog";
function PostTitle() {
  return (
    <div className="flex flex-col gap-2 w-full   xl:px-0 pb-4">
      <h1 className="text-4xl font-tds md:text-5xl">
        Explore <span className="text-tdsRed">TDS</span>
      </h1>
      <p className="text-sm text-black/80 text-balance md:text-lg">
        Take a look at our posts and learn about enduro as well as us.
      </p>
      <Link href={`/posts/`} className="hover:underline text-tdsRed z-[100]">
        View all {"->"}
      </Link>
    </div>
  );
}
function Post({ post }: { post: any }) {
  return (
    <section className="flex flex-col gap-4 relative  flex-shrink-0 w-[250px] md:w-[400px] ">
      <h2 className="text-xl font-tds line-clamp-2 ">{post.h1}</h2>
      <p className="line-clamp-2 text-sm">{post.description}</p>
      <Link
        href={`/posts/${post.slug}`}
        className="hover:underline text-tdsRed z-[100]"
      >
        Read More {"->"}
      </Link>
    </section>
  );
}

function Posts() {
  return (
    <section className="flex flex-col w-full   xl:px-0 max-w-6xl mx-auto">
      <div className="flex flex-row gap-8 w-full  m md:gap-16  py-4 xl:px-0 overflow-x-auto scrollbar-hide p-6">
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

import { testimonials } from "@/data/testimonials";

function TestimonialsPage() {
  return (
    <div className="flex flex-col  gap-8 py-8 max-w-6xl mx-auto">
      <Title />
      <TestimonialsList />
    </div>
  );
}

function Title() {
  return (
    <div className="flex flex-col gap-2 w-full px-6  xl:px-0 pb-4">
      <h2 className="text-4xl font-tds md:text-5xl">Testimonials</h2>
      <p className="text-sm text-black/80 text-balance md:text-lg">
        Hear from our customers about their experiences with our tours and learn
        from their feedback.
      </p>
    </div>
  );
}

function TestimonialsList() {
  return (
    <section className="flex flex-col gap-4  w-full ">
      <div className="flex flex-row overflow-x-auto scrollbar-hide gap-16 p-6  grid grid-cols-1 md:grid-cols-3 w-full xl:px-0">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.reviewer}
            className="flex-shrink-0  flex flex-col items-start justify-start  gap-6 "
          >
            <div className="flex flex-col gap-2 w-full justify-start items-start md:w-full md:gap-4">
              <h3 className="text-xl font-bold text-center  md:text-3xl">
                {testimonial.reviewer}
              </h3>
              <p className="text-sm text-foreground/40 max-w-[250px] md:text-sm">
                {testimonial.review_date}
              </p>

              <p className="text-sm  max-w-[250px] md:text-sm">
                {testimonial.review_text}
              </p>
              <Link
                href={`/tours`}
                className="text-sm  text-center text-tdsRed hover:underline mt-2 md:text-lg"
              >
                View tours {"->"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
