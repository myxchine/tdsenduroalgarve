import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/ui/header";
import Footer from "@/ui/footer";
import "@/styles/globals.css";
import { Toaster } from "sonner";
import Phone from "@/components/phone";
import { GoogleAnalytics } from "@next/third-parties/google";
import ContactButton from "@/components/ContactButton";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tdsenduroalgarve.com"),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  title: {
    default:
      "Enduro Portugal | TDS KTM Motorbike Tours in Southern Portugal, Algarve",
    template: "%s | TDS KTM Motorbike Tours in Southern Portugal, Algarve",
  },
  description:
    "Hard Enduro motorbike tour in Algarve. TDS offers an all inclusive service (best bikes, gear, and routes included) for those who want nothing but the best. A curated experience for friends, family or pro riders creatin a unique tailored experience to your needs.",

  openGraph: {
    type: "website",
    url: "https://tdsenduroalgarve.com",
    siteName: "TDS Enduro Motorbike Tours Portugal",
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#fff",
};

const accent = localFont({
  src: "./fonts/TDS.otf",
  variable: "--font-accent",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TDS Enduro Algarve",
    url: "https://tdsenduroalgarve.com",
    logo: "https://tdsenduroalgarve.com/favicon.ico",
    sameAs: ["https://www.instagram.com/", "https://www.facebook.com/"],
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "TDS Enduro Algarve",
    url: "https://tdsenduroalgarve.com",
    telephone: "+351 968 185 407",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PT",
      addressRegion: "Faro",
      addressLocality: "Algarve",
    },
    areaServed: ["Portugal", "United Kingdom", "United States", "Europe"],
    image: "https://tdsenduroalgarve.com/images/new.jpg",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable}  ${accent.variable}  antialiased relative`}
      >
        <Phone />
        <Header />
        <main id="tds-main">{children}</main>
        <Footer />
        <Toaster position="bottom-center" richColors={true} />
      </body>
      <GoogleAnalytics gaId={"G-MHMCJ4Z05X"} />
    </html>
  );
}
