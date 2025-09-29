"use client";

import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`block md:hidden bg-transparent ${className || ""}`}
      aria-label="Mobile navigation"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-items"
            className="absolute right-1/2 translate-x-1/2 bottom-16 flex flex-col gap-3 items-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, y: 8, transition: { duration: 0.18 } }}
          >
            {items.map((item, idx) => (
              <motion.a
                key={item.title}
                href={item.href}
                className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#003366] backdrop-blur-md border border-white/10 shadow-lg shadow-black/40 transition-colors"
                initial={{ opacity: 0, y: 10, scale: 0.85 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { delay: idx * 0.04, duration: 0.25, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  y: 6,
                  scale: 0.85,
                  transition: { delay: (items.length - 1 - idx) * 0.03, duration: 0.18 },
                }}
              >
                <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md bg-transparent text-[10px] font-medium text-neutral-200 opacity-0 scale-90 origin-bottom whitespace-nowrap transition-all group-hover:opacity-100 group-hover:scale-100">
                  {item.title}
                </span>
                <div className="h-5 w-5 text-neutral-300">{item.icon}</div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle mobile navigation"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#1d1633] to-[#003366] border border-white/10 shadow-lg shadow-black/50 hover:shadow-[#003366]  transition-all relative right-1/2 translate-x-1/2"
      >
        <IconLayoutNavbarCollapse
          className={`h-6 w-6 text-neutral-300 transition-transform ${open ? "rotate-90" : ""
            }`}
        />
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.nav
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      aria-label="Primary navigation"
      className={`bg-transparent hidden md:flex h-20 items-start gap-5 px-6 pt-5 pb-4 ${className || ""}`}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.nav>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-160, 0, 160], [42, 86, 42]);
  const heightTransform = useTransform(distance, [-160, 0, 160], [42, 86, 42]);
  const widthIconTransform = useTransform(distance, [-160, 0, 160], [20, 44, 20]);
  const heightIconTransform = useTransform(distance, [-160, 0, 160], [20, 44, 20]);

  const width = useSpring(widthTransform, { mass: 0.12, stiffness: 160, damping: 14 });
  const height = useSpring(heightTransform, { mass: 0.12, stiffness: 160, damping: 14 });
  const widthIcon = useSpring(widthIconTransform, { mass: 0.12, stiffness: 160, damping: 14 });
  const heightIcon = useSpring(heightIconTransform, { mass: 0.12, stiffness: 160, damping: 14 });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} className="relative">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#241b3d] to-[#003366] border-none shadow-md shadow-black/40 transition-colors"
      >
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-neutral-300"
        >
          {icon}
        </motion.div>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 4 }}
              exit={{ opacity: 0, y: 0 }}
              className="absolute top-full mt-1 left-1/2 -translate-x-1/2 rounded-md border-none bg-transparent backdrop-blur px-2 py-0.5 text-[11px] font-medium text-neutral-200 whitespace-nowrap"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </a>
  );
}
