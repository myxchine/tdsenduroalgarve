import { MetadataRoute } from "next";
import { tours } from "@/server/db/tours";
import { tours_PT } from "@/server/db/tours_PT";
import { bikes } from "@/server/bikes";
import { bikes_PT } from "@/server/bikes_PT";
import { posts } from "@/data/blog";
import { posts_PT } from "@/data/blog_PT";

export default function sitemap(): MetadataRoute.Sitemap {
  const bikesSitemap: MetadataRoute.Sitemap = bikes.map(({ slug }) => ({
    url: `https://tdsenduroalgarve.com/bikes/${slug}`,
    alternates: {
      languages: {
        en: `https://tdsenduroalgarve.com/bikes/${slug}`,
        pt: `https://tdsenduroalgarve.com/pt/bikes/${slug}`,
      },
    },
  }));

  const toursSitemap: MetadataRoute.Sitemap = tours.map(({ slug }) => ({
    url: `https://tdsenduroalgarve.com/tours/${slug}`,
    alternates: {
      languages: {
        en: `https://tdsenduroalgarve.com/tours/${slug}`,
        pt: `https://tdsenduroalgarve.com/pt/tours/${slug}`,
      },
    },
  }));

  const postsSitemap: MetadataRoute.Sitemap = posts.map(({ slug }) => ({
    url: `https://tdsenduroalgarve.com/posts/${slug}`,
    alternates: {
      languages: {
        en: `https://tdsenduroalgarve.com/posts/${slug}`,
        pt: `https://tdsenduroalgarve.com/pt/posts/${slug}`,
      },
    },
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      alternates: {
        languages: {
          en: "https://tdsenduroalgarve.com",
          pt: "https://tdsenduroalgarve.com/pt",
        },
      },
    },

    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/reserve`,
      alternates: {
        languages: {
          en: "https://tdsenduroalgarve.com/reserve",
          pt: "https://tdsenduroalgarve.com/pt/reserve",
        },
      },
    },

    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/tours`,
      alternates: {
        languages: {
          en: "https://tdsenduroalgarve.com/tours",
          pt: "https://tdsenduroalgarve.com/pt/tours",
        },
      },
    },

    ...toursSitemap,

    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-tour`,
      alternates: {
        languages: {
          en: "https://tdsenduroalgarve.com/about-tour",
          pt: "https://tdsenduroalgarve.com/pt/about-tour",
        },
      },
    },

    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/bikes`,
      alternates: {
        languages: {
          en: "https://tdsenduroalgarve.com/bikes",
          pt: "https://tdsenduroalgarve.com/pt/bikes",
        },
      },
    },

    ...bikesSitemap,
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/posts`,
      alternates: {
        languages: {
          en: "https://tdsenduroalgarve.com/posts",
          pt: "https://tdsenduroalgarve.com/pt/posts",
        },
      },
    },

    ...postsSitemap,
  ];
}
