import CountUp from "./CountUp";
import { IconCode, IconTrophy, IconCalendarStats } from "@tabler/icons-react";

export default function Stats() {
  return (
    <div className="stats stats-vertical sm:stats-horizontal shadow mt-4 w-full max-w-md sm:max-w-none bg-[#0d0a17]/60 backdrop-blur rounded-xl border border-white/10">
      <div className="stat px-4">
        <div className="stat-figure text-secondary">
          <IconCode className="h-8 w-8 text-indigo-400" />
        </div>
        <div className="stat-title text-xs sm:text-sm tracking-wide">
          <p className="text-white">Projects</p>
        </div>
        <div className="stat-value text-lg sm:text-2xl">
          <CountUp
            from={0}
            to={5}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
        </div>
      </div>

      <div className="stat px-4">
        <div className="stat-figure text-secondary">
          <IconTrophy className="h-8 w-8 text-yellow-400" />
        </div>
        <div className="stat-title text-xs sm:text-sm tracking-wide">
          <p className="text-white">Awards</p>
        </div>
        <div className="stat-value text-lg sm:text-2xl">
          <CountUp
            from={0}
            to={5}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
        </div>
      </div>

      <div className="stat px-4">
        <div className="stat-figure text-secondary">
          <IconCalendarStats className="h-8 w-8 text-rose-400" />
        </div>
        <div className="stat-title text-xs sm:text-sm tracking-wide">
          <p className="text-white">Years of Programming</p>
        </div>
        <div className="stat-value text-lg sm:text-2xl">
          <CountUp
            from={0}
            to={10}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />
        </div>
      </div>
    </div>
  );
}
