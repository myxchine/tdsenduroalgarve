import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import ContactButton from "./_components/ContactButton";
import { GoogleAnalytics } from "@next/third-parties/google";
import { metaDict } from "@/data/dictionary";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const TDS = localFont({
  src: "../TDS.otf",
  display: "swap",
  variable: "--font-tds",
});

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 5,
  width: "device-width",
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  metadataBase: new URL(`https://tdsenduroalgarve.com/pt`),
  icons: [{ rel: "icon", url: "/favicon.ico" }],

  title: {
    default: metaDict.pt.title,
    template: metaDict.pt.template,
  },
  description: metaDict.pt.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${TDS.variable}`}>
      <body>
        <main className="relative">
          <Header />
          {children}
          <ContactButton />
          <Footer />
        </main>
      </body>
      <GoogleAnalytics gaId={"G-MHMCJ4Z05X"} />
    </html>
  );
}
