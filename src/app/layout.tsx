// src/app/layout.tsx
import {
  poppins,
  roboto,
  sairaCondensed,
  bebasNeue,
  pixelifySans,
} from "@/utils/fonts";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/app/header/header";
import Footer from "@/app/footer/footer";
import { getHeaderData } from "@/lib/header/headerData";
import { getFooterData } from "@/lib/footer/footerData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - CV Gibran",
  description: "Curriculum Vitae of Gibran",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerData = await getHeaderData();
  const footerData = await getFooterData();
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${poppins.variable}
          ${roboto.variable}
          ${sairaCondensed.variable}
          ${bebasNeue.variable}
          ${pixelifySans.variable}
          antialiased
        `}
      >
        {/* spread operator to pass all properties */}
        {headerData && <Header {...headerData} />}
        <main className="pt-20">{children}</main>
        {footerData && <Footer {...footerData} />}
      </body>
    </html>
  );
}
