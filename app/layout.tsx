import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StickyClock from "@/components/Clock";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vaxxnsh",
  description:
    "Portfolio of Akshit Padha (vaxxnsh) — Full-Stack developer building distributed systems, real-time platforms using Go, TypeScript, and modern web stacks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0a0a0a] antialiased`}
      >
      
        
          <StickyClock/>
          {children}    

      </body>
    </html>
  );
}
