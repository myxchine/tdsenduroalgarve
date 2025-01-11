import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/ui/header";
import Footer from "@/ui/footer";
import "@/styles/globals.css";
import { Toaster } from "sonner";
import Phone from "@/components/phone";

import ContactButton from "@/components/ContactButton";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  title: {
    default:
      "Enduro Portugal | TDS Enduro Algarve Motorbike Tours in Southern Portugal",
    template: "%s | TDS Enduro Algarve Motorbike Tours in Southern Portugal",
  },
  description:
    "Hard Enduro motornike tours & rental in Southern Portugal (Algarve). Experience off-road biking in Algarve with friends, family, or solo. We provide bikes, gear, transport, and routes. Just show up! Hire a motorbike in Faro, Vilamoura, Albufeira, Quarteira, or Loulé.",

  openGraph: {
    type: "website",
    url: "https://tdsenduroalgarve.com",
    siteName: "TDS Enduro Motorbike Tours Algarve",
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
        <div className="fixed bottom-6 right-0  md:hidden w-full flex flex-col items-center justify-center">
          <ContactButton />
        </div>
        <Toaster position="bottom-center" richColors={true} />
      </body>
    </html>
  );
}
