import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import ContactButton from "./_components/ContactButton";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const TDS = localFont({
  src: "./TDS.otf",
  display: "swap",
  variable: "--font-tds",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://tdsenduroalgarve.com`),
  title: {
    default: "Enduro Portugal Tours | TDS Enduro Bike Tours Algarve",
    template: "%s | Enduro Portugal Tours | TDS Enduro Bike Tours Algarve",
  },
  description:
    "Welcome to everything Hard Enduro in Portugal from buying, renting and tours. Experience off-road biking in Algarve with friends, family, or solo. We provide bikes, gear, transport, and routes. Just show up! Hire a motorbike in Faro, Vilamoura, Albufeira, Quarteira, or Loulé.",
};
export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 5,
  width: "device-width",
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${TDS.variable}`}>
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
