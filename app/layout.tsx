import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";

export const metadata: Metadata = {
  title: "The Wild Oasis",
  description: "Wild Oasis Registration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
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
