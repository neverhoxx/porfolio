import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/shared/header";
import ScrollTopBtn from "@/components/ui/scrolltop";
import 'flag-icon-css/css/flag-icons.min.css';


import AOSWrapper from "@/components/shared/AOSWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yehor Kiiakh - Portfolio",
  description: "Web developer from Tallinn",
};

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <AOSWrapper />
        <ScrollTopBtn />
        <Header />
        {children}
      </body>
    </html>
  );
}
