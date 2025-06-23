import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "UniBox - Platform Multitenancy untuk Bisnis Digital Indonesia",
  description: "Platform terdepan untuk menjual produk digital seperti social media management, top up game, PPOB, dan akun premium. Dapatkan website pribadi dengan subdomain sendiri!",
  keywords: "bisnis digital, multitenancy, social media management, top up game, PPOB, akun premium, reseller, website pribadi",
  authors: [{ name: "UniBox Team" }],
  creator: "UniBox",
  publisher: "UniBox",
  openGraph: {
    title: "UniBox - Platform Multitenancy untuk Bisnis Digital",
    description: "Platform terdepan untuk menjual produk digital dengan website pribadi sendiri",
    url: "https://unibox.id",
    siteName: "UniBox",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UniBox - Platform Multitenancy untuk Bisnis Digital",
    description: "Platform terdepan untuk menjual produk digital dengan website pribadi sendiri",
    creator: "@uniboxid",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
