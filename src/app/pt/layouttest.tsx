import type { Metadata } from "next";
import "@/styles/globals.css";
import { metaDict } from "@/data/dictionary";

export async function generateStaticParams() {
  return [{ lang: "pt" }];
}
export async function generateMetadata({
  params,
}: {
  params: { lang: keyof typeof metaDict };
}): Promise<Metadata> {
  return {
    metadataBase: new URL(`https://tdsenduroalgarve.com/${params.lang || ""}`),
    title: {
      default: metaDict[params.lang].title || metaDict.en.title,
      template: metaDict[params.lang].template || metaDict.en.template,
    },
    description: metaDict[params.lang].description || metaDict.en.description,
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: keyof typeof metaDict };
}>) {
  console.log(params);

  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
