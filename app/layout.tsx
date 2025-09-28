import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import type { Metadata } from "next";

import Header from "./_components/Header";
import ReservationProvider from "./_components/context/ReservationProvider";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "./_components/context/AuthProvider";

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
    <SessionProvider>
      <AuthProvider>
        <html lang="en" className={`${josefinSans.className} antialiased`}>
          <body className="bg-primary-950 text-primary-100 flex min-h-screen flex-col">
            <Header />

            <div className="grid flex-1 px-8 py-12">
              <main className="mx-auto w-full max-w-7xl">
                <ReservationProvider>{children}</ReservationProvider>
              </main>
            </div>
          </body>
        </html>
      </AuthProvider>
    </SessionProvider>
  );
}
