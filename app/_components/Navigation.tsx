"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "./context/useAuth";
import Image from "next/image";

const navItems = [
  { name: "Cabins", href: "/cabins" },
  { name: "About", href: "/about" },
  { name: "Guest area", href: "/account" },
];

export default function Navigation() {
  const session = useAuth();

  const pathname = usePathname();
  const firstSection = "/" + (pathname.split("/")[1] || "");

  return (
    <nav className="z-10 w-full flex-1 text-xl">
      <ul className="flex items-center justify-between gap-4 md:justify-end md:gap-10">
        {navItems.map((item) => {
          const isActive = firstSection === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  "flex items-center gap-3 whitespace-nowrap transition-colors",
                  isActive && "text-accent-400",
                  !isActive && "hover:text-accent-400",
                )}
              >
                {item.name}
                {item.name === "Guest area" && session.user?.image && (
                  <span className="relative aspect-square h-9 w-9">
                    <Image
                      src={session.user.image}
                      alt={session.user.name || "User Icon"}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </span>
                )}
              </Link>
            </li>
          );
        })}
        <li></li>
      </ul>
    </nav>
  );
}
