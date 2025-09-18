"use client";

import { FloatingDock } from "./helper/FloatingDock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconUser,
  IconSchool,
  IconCode,
  IconTrophy,
  IconMail,
} from "@tabler/icons-react";

const links = [
  {
    title: "About",
    icon: (
      <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#about",
  },
  {
    title: "Education",
    icon: (
      <IconSchool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#education",
  },
  {
    title: "Projects",
    icon: (
      <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },
  {
    title: "Achievements",
    icon: (
      <IconTrophy className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#achievements",
  },
  {
    title: "Contact",
    icon: (
      <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#contact",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/",
  },
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://linkedin.com/",
  },
];

export default function Nav() {
  return (
    <div className="w-full flex justify-center bg-transparent">
      <FloatingDock
        desktopClassName="mt-2 mx-auto"
        mobileClassName="fixed bottom-4 right-4 z-[120]"
        items={links}
      />
    </div>
  );
}
