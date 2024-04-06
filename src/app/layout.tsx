import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Trend",
  description: "Algorithm Tester",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-gradient-to-tr from-[#030008] to-[#000205] ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
