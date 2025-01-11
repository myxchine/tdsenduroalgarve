import { Post } from "@/app/types";
import { Button, Row } from "@/ui/components";
import Image from "next/image";
import Link from "next/link";
export default function Articles({
  articles,
  cols,
  h3,
  lineclamp,
}: {
  articles: Post[];
  cols?: string;
  h3?: boolean;
  lineclamp?: boolean;
}) {
  return (
    <div
      className={`grid text-left gap-8 grid-cols-1 md:grid-cols-${
        cols ? cols : "2"
      } ${cols ? "md:gap-8" : ""}`}
    >
      {articles.map((article) => (
        <Link
          href={`/articles/${article.slug}`}
          className="flex flex-col gap-4"
          key={article.slug}
        >
          <Image
            src={article.coverImage}
            alt={article.title}
            width={500}
            height={300}
            className=" w-full object-cover aspect-[16/9] my-4"
          />
          {h3 ? (
            <h3 className="line-clamp-2">{article.title}</h3>
          ) : (
            <h2 className="line-clamp-2">{article.title}</h2>
          )}
          <p className={lineclamp ? "line-clamp-3 normal-case" : "normal-case"}>
            {article.excerpt}
          </p>
          <span className="hover:underline text-accent">Read More {"->"}</span>
        </Link>
      ))}
    </div>
  );
}
