"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  time: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 20%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      id="#education"
      className="w-full bg-bgcolor font-sans "
      ref={containerRef}
    >
      <div className=" mx-auto ">
        <h2 className="text-[clamp(1.6rem,4vw,2.6rem)] font-semibold tracking-tight bg-gradient-to-r from-indigo-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent ">
          Education
        </h2>
      </div>

      <div ref={ref} className="relative mx-auto ">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10">
            <div className="sticky flex flex-col z-40 items-start top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 shadow-[0_0_0_4px_rgba(255,255,255,0.05)] border border-neutral-700 p-2" />
              </div>
              <div className="hidden md:flex flex-col gap-1 md:pl-20">
                <h3 className="text-xl md:text-3xl font-bold text-neutral-500">
                  {item.title}
                </h3>
                <span className="text-sm md:text-base font-medium text-neutral-400">
                  {item.time}
                </span>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="md:hidden mb-3">
                <h3 className="text-2xl font-bold text-neutral-500 leading-snug">
                  <span className="block">{item.title}</span>
                  <span className="block mt-1 text-sm font-medium text-neutral-400">
                    {item.time}
                  </span>
                </h3>
              </div>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
