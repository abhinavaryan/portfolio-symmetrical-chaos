import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhinav Chauhan | Symmetrical Chaos",
  description: "Portfolio of Abhinav Chauhan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col font-sans text-foreground bg-background">
        <Navbar />
        <main className="flex-grow flex flex-col pt-2xl">
          {children}
        </main>
      </body>
    </html>
  );
}
