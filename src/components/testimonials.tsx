import Link from "next/link";

export default function TestimonialsList({
  testimonials,
  h3,
  lineclamp,
}: {
  testimonials: any[];
  h3?: boolean;
  lineclamp?: boolean;
}) {
  return (
    <Link
      href={"/testimonials"}
      className="overflow-x-auto scrollbar-hide gap-8  grid grid-cols-1 md:grid-cols-3 w-full xl:px-0"
    >
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.reviewer}
          className="flex-shrink-0  flex flex-col items-start justify-start  gap-6 p-4 md:p-6 rounded-md border shadow-lg"
        >
          <div className="flex flex-col gap-2 w-full justify-start items-start md:w-full md:gap-4">
            {h3 ? (
              <h3 className="line-clamp-2">{testimonial.reviewer}</h3>
            ) : (
              <h2 className="line-clamp-2">{testimonial.reviewer}</h2>
            )}
            <p className="text-sm text-foreground/40 max-w-[250px] md:text-sm">
              {testimonial.review_date}
            </p>

            {lineclamp ? (
              <>
                <p className="line-clamp-3 normal-case">
                  {testimonial.review_text}
                </p>

                <span className="hover:underline text-accent">
                  Read more {"->"}
                </span>
              </>
            ) : (
              <p className="normal-case">{testimonial.review_text}</p>
            )}
          </div>
        </div>
      ))}
    </Link>
  );
}
