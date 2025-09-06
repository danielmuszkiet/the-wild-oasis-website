"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Cabins", href: "/cabins" },
  { name: "About", href: "/about" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex select-none gap-6 bg-gray-900 p-4 text-white">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`border-b-2 pb-1 transition-colors ${
              isActive
                ? "border-blue-400 font-semibold text-blue-400"
                : "border-transparent text-gray-300 hover:border-gray-500 hover:text-white"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
