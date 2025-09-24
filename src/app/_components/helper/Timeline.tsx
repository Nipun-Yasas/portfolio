"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  time: string;
  content: React.ReactNode;
}

export default function Timeline({ data }: { data: TimelineEntry[] }) {
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
    offset: ["start 10%", "end 40%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full" ref={containerRef}>
      <h2 className="text-[clamp(1.6rem,4vw,2.6rem)] font-semibold tracking-tight bg-gradient-to-r from-indigo-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-8">
        Education
      </h2>

      <div ref={ref} className="relative">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pb-10 md:pb-12 lg:pb-16">
            <div className="sticky flex flex-col z-40 items-start top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 shadow-[0_0_0_4px_rgba(255,255,255,0.05)] border border-neutral-700 p-2" />
              </div>
              <div className="hidden md:flex flex-col gap-1 md:pl-20">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-neutral-500">
                  {item.title}
                </h3>
                <span className="text-sm md:text-base font-medium text-neutral-400">
                  {item.time}
                </span>
              </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <div className="md:hidden mb-4">
                <h3 className="text-lg font-bold text-neutral-500 leading-tight">
                  {item.title}
                </h3>
                <span className="text-sm font-medium text-neutral-400 mt-1 block">
                  {item.time}
                </span>
              </div>
              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-4 md:p-6 backdrop-blur-sm">
                {item.content}
              </div>
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
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
