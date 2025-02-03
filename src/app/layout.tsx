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
  return (
    <html lang="en">
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
