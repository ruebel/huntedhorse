import type { Metadata } from "next";
import { Righteous } from "next/font/google";
import "./globals.css";

const righteous = Righteous({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Hunted Horse",
  description: "Hunted Horse Band Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={righteous.className}>
      <body>{children}</body>
    </html>
  );
}
