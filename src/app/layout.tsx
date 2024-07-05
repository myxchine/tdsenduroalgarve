import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: {
    default: "TDS Enduro Bike Tours Algarve",
    template: "%s - TDS Enduro Bike Tours Algarve",
  },
  description:
    "Join the fun of riding off road bikes while you're on holiday in Algarve whether it's with friends, family or by yourself. We prepare your bike, gear, transport and route to ride on. All you need to do is show up!",
};
export const viewport: Viewport = {
  initialScale: 1,
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
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
