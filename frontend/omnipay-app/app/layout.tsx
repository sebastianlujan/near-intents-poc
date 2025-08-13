import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import "./globals.css";

const inter = Inter({ subsets: ['latin'] })
/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata: Metadata = {
  title: "OmniPay, Pay With Anything, Receive What You Want",
  description: "Pay button, made simple.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-[#23203E] to-[#0C0C17]`}>
        {children}
      </body>
    </html>
  );
}
