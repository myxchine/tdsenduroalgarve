import { posts_PT } from "@/data/blog_PT";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postagens",
  description:
    "Conheça os melhores passeios de enduro no Algarve, Portugal. Descubra a emoção do enduro no Algarve, um paraíso para os entusiastas do dirt bike. Com paisagens deslumbrantes e terrenos desafiantes, o Algarve oferece uma experiência inesquecível tanto para iniciantes como para pilotos experientes. Junte-se a nós numa emocionante aventura de enduro numa das regiões mais pitorescas de Portugal.",
};

export default function PostsPage() {
  return (
    <div className="flex flex-col  gap-8 py-8 max-w-6xl mx-auto">
      <Title />
      <Posts />
    </div>
  );
}

function Title() {
  return (
    <div className="flex flex-col gap-2 w-full px-6  xl:px-0 pb-4">
      <h1 className="text-4xl font-tds md:text-5xl">
        Explorar <span className="text-tdsRed">Enduro em Portugal</span>
      </h1>
      <p className="text-xs text-black/80 text-balance md:text-lg">
        Dê uma olhada em nossos posts e conheça o enduro assim como nós.
      </p>
    </div>
  );
}
function Post({ post }: { post: any }) {
  return (
    <section className="flex flex-col gap-4 relative flex-1">
      <h2 className="text-2xl font-tds ">{post.h1}</h2>
      <p>{post.description}</p>
      <Link
        href={`/pt/posts/${post.slug}`}
        className="hover:underline text-tdsRed z-[100]"
      >
        Leia mais {"->"}
      </Link>
    </section>
  );
}

function Posts() {
  return (
    <section className="flex flex-col w-full  p-6 xl:px-0">
      <div className="flex flex-col gap-8 w-full  md:grid md:grid-cols-2 md:gap-16 max-w-6xl mx-auto py-4 xl:px-0 ">
        {posts_PT.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
