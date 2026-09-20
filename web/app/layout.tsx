import type { Metadata } from "next";
import { Bricolage_Grotesque, Fraunces } from "next/font/google";
import { profile } from "@/lib/profile";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "WONK"],
});

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.title}`,
  description: `${profile.name}, ${profile.title} in ${profile.location}.`,
  metadataBase: new URL("https://heidiherzog.com"),
  openGraph: {
    title: profile.name,
    description: `${profile.title} in ${profile.location}.`,
    images: ["/assets/hero-mobile.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
