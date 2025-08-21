import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 p-6 max-w-3xl mx-auto text-center">
      <h1>Page not found</h1>
      <p>
        Sorry, we can’t find that page. Try one of these helpful links instead.
      </p>
      <nav className="flex flex-col gap-2">
        <Link href="/" className="text-accent hover:underline">
          Home {"->"}
        </Link>
        <Link href="/tours" className="text-accent hover:underline">
          Tours {"->"}
        </Link>
        <Link href="/reserve" className="text-accent hover:underline">
          Reserve {"->"}
        </Link>
      </nav>
    </section>
  );
}
