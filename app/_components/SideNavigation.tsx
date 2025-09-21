"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "@/app/_components/SignOutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="text-primary-600 h-6 w-6 md:h-5 md:w-5" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: (
      <CalendarDaysIcon className="text-primary-600 h-6 w-6 md:h-5 md:w-5" />
    ),
  },
  {
    name: "Guest Profile",
    href: "/account/profile",
    icon: <UserIcon className="text-primary-600 h-6 w-6 md:h-5 md:w-5" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-primary-900 md: border-t border-b md:border-t-0 md:border-r md:border-b-0">
      <ul className="flex h-full justify-between md:flex-col md:gap-2 md:text-lg">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.name} className="flex-2 cursor-pointer md:grow-0">
              <Link
                href={link.href}
                className={clsx(
                  "hover:bg-primary-900 hover:text-primary-100 flex cursor-pointer justify-center gap-1 px-4 py-3 font-semibold transition-colors md:justify-start md:gap-4 md:px-5",
                  isActive &&
                    "bg-primary-900 text-primary-100 border-b md:border-none",
                  !isActive && "text-primary-200",
                )}
              >
                {link.icon} <span className="hidden md:block">{link.name}</span>
              </Link>
            </li>
          );
        })}

        <li className="mt-auto md:grow-0">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
