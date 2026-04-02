import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexyrium | Build, Scale & Raise Capital Faster",
  description: "The premium ecosystem for startups to build high-performance products and connect with global investors. Everything a founder needs in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} min-h-screen bg-black antialiased scroll-smooth`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
