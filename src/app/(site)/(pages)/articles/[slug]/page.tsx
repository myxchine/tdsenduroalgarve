import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/server/api";
import markdownToHtml from "@/server/mdtohtml";

import Image from "next/image";
import { Post } from "@/app/types";
import { Row, Section, Button } from "@/ui/components";
import { SuggestedArticlesList } from "@/components/suggested-articles";
import EnduroTour from "@/components/endurotour";
import Bike from "@/components/bike";
import SuggestedTestimonialsList from "@/components/suggestedTestimonials";
export default async function ArticlePage({ params }: Params) {
  const slug = (await params).slug;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tdsenduroalgarve.com/articles/${post.slug}`,
    },
    publisher: {
      "@type": "Organization",
      name: "TDS Enduro Algarve",
      logo: {
        "@type": "ImageObject",
        url: "https://tdsenduroalgarve.com/favicon.ico",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Section>
        <Row>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <Image
            src={post.coverImage}
            alt={post.title}
            width={800}
            height={600}
            quality={75}
            priority={true}
            className="w-full h-auto aspect-[4/3] md:aspect-[16/9] object-cover my-4"
          />
          <div
            className="flex flex-col gap-8 article-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Row>
      </Section>

      <Section>
        <SuggestedArticlesList currentarticle={post} />
      </Section>
      <EnduroTour />
      <Bike />
      <SuggestedTestimonialsList />
    </>
  );
}

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const slug = (await params).slug;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const title = post.title;
  const description = post.excerpt;

  return {
    title: title,
    description: description,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}
