import type { MetadataRoute } from "next";
import { getAllPosts } from "@/server/api";

const BASE_URL = "https://tdsenduroalgarve.com";

const staticPages = [
  "/",
  "/about",
  "/tours",
  "/articles",
  "/bikes",
  "/bikes/ktm-300-exc",
  "/reserve",
  "/testimonials",
  "/gallery",
  "/pricing",
  "/contact",
  "/market",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = staticPages.map((url) => ({
    url: BASE_URL + url,
    lastModified: new Date(),
  }));

  const posts = getAllPosts().map((post) => ({
    url: BASE_URL + "/articles/" + post.slug,
    lastModified: new Date(post.date),
  }));

  return [...pages, ...posts];
}
