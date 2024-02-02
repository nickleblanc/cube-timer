"use client";

import { BsFillStopwatchFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { FaList } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Timer", href: "/timer", icon: BsFillStopwatchFill },
  {
    name: "Solves",
    href: "/solves",
    icon: FaList,
  },
  { name: "Stats", href: "/stats", icon: IoStatsChart },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "text-md group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 font-medium transition-colors hover:bg-accent hover:text-accent-foreground  disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
              {
                "bg-accent text-accent-foreground outline-none":
                  pathname === link.href,
              },
            )}
          >
            <LinkIcon className="mr-2 w-5" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
