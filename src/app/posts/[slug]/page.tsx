import { posts } from "@/data/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
export async function generateStaticParams() {
  return posts.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = posts.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  return {
    title: post.h1,
    description: post.description,
  };
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  return (
    <section className="flex flex-col gap-4 relative p-6 max-w-6xl mx-auto   mb-12 text-left xl:px-0 md:py-24">
      <h1 className="text-2xl font-tds  md:text-4xl">{post.h1}</h1>
      <Link href="/" className="text-tdsRed">
        Let's get started {"->"}
      </Link>
      <article className="flex flex-col items-start gap-8 bg-white w-full    ">
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <Link href="/" className="text-tdsRed">
        Let's do it {"->"}
      </Link>
    </section>
  );
}
