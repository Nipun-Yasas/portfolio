import React from "react";
import { Timeline } from "./helper/Timeline";

export default function EducationTimeLine() {
  const data = [
    {
      title: "Secondary Education 2018 - 2021",
      content: (
        <div className="space-y-3">
          <p className="text-[0.8rem] sm:text-[0.85rem] md:text-sm text-neutral-300 leading-relaxed">
            Bandaranayake College, Gampaha
            <br />
            G.C.E. Advanced Level – Physical Science Stream
          </p>
          <p className="text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] text-neutral-500">
            A A B (Z‑Score 1.9577)
          </p>
        </div>
      ),
    },
    {
      title: "Higher Education 2023 - Present",
      content: (
        <div className="space-y-3">
          <p className="text-[0.8rem] sm:text-[0.85rem] md:text-sm text-neutral-300 leading-relaxed">
            University of Moratuwa
            <br />
            B.Sc. (Hons) Information Technology
          </p>
          <p className="text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] text-neutral-500">
            Current CGPA: 3.56
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <Timeline data={data} />
    </div>
  );
}
