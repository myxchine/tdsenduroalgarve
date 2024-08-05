import { posts } from "@/data/blog";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Learn about the best enduro tours in Algarve, Portugal. Discover the thrill of enduro riding in Algarve, a paradise for dirt biking enthusiasts. With stunning landscapes and challenging terrains, Algarve offers an unforgettable experience for both beginners and seasoned riders. Join us for an exhilarating enduro adventure in one of Portugal's most scenic regions.",
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
        Explore <span className="text-tdsRed">TDS</span>
      </h1>
      <p className="text-xs text-black/80 text-balance md:text-lg">
        Take a look at our posts and learn about enduro as well as us.
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
    <section className="flex flex-col w-full  p-6 xl:px-0">
      <div className="flex flex-col gap-8 w-full  md:grid md:grid-cols-2 md:gap-16 max-w-6xl mx-auto py-4 xl:px-0 ">
        {posts.map((post) => (
          <Post key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
