import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const electrolize = Inter({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-electrolize'
})

const share = Inter({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-share'
})

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
    <html lang="en" className={`${inter.variable} ${share.variable} ${electrolize.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
