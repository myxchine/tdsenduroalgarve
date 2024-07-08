import { MetadataRoute } from "next";
import { data } from "@/server/db/data";
import { bikes } from "@/server/db/bikes";

export default function sitemap(): MetadataRoute.Sitemap {
  const bikesSitemap: MetadataRoute.Sitemap = bikes.map(({ slug }) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/bikes/${slug}`,
    priority: 0.4,
  }));

  const toursSitemap: MetadataRoute.Sitemap = data.tours.categories.map(
    ({ slug }) => ({
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/tours/${slug}`,
      priority: 0.8,
    })
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/reserve`,
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/tours`,
      priority: 0.8,
    },
    ...toursSitemap,
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-tour`,
      priority: 0.6,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/bikes`,
      priority: 0.4,
    },
    ...bikesSitemap,
  ];
}
