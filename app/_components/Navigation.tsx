"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Cabins", href: "/cabins" },
  { name: "About", href: "/about" },
  { name: "Guest area", href: "/account" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="z-10 w-full flex-1 text-xl">
      <ul className="flex items-center justify-between gap-4 md:justify-end md:gap-10">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  "whitespace-nowrap transition-colors",
                  isActive && "text-accent-400",
                  !isActive && "hover:text-accent-400",
                )}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
