import type { Metadata } from "next";
import "@/app/_styles/globals.css";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

export const metadata: Metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 flex min-h-screen flex-col">
        <header>
          <Logo />
        </header>
        <Navigation />
        <main className="flex-1">{children}</main>
        <footer>Copyright by Daniel Muszkiet</footer>
      </body>
    </html>
  );
}
