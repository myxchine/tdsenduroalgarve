import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CSPostHogProvider } from "@/analytics/provider";

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
    default: "TDS Enduro Bike Tours Algarve, Portugal",
    template: "%s - TDS Enduro Bike Tours Algarve, Portugal",
  },
  description:
    "Experience off-road biking in Algarve with friends, family, or solo. We provide bikes, gear, transport, and routes. Just show up! Hire a motorbike in Faro, Vilamoura, Albufeira, Quarteira, or Loulé.",
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
    <CSPostHogProvider>
      <html lang="en" className={`${inter.variable} ${TDS.variable}`}>
        <body>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </CSPostHogProvider>
  );
}
