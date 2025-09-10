import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import type { Metadata } from "next";

import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import Header from "./_components/Header";

export const metadata: Metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the italian Dolomites, surrounded by beautiful mountains and dark forests",
};

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefinSans.className} antialiased`}>
      <body className="bg-primary-950 text-primary-100 flex min-h-screen flex-col">
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="mx-auto max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
