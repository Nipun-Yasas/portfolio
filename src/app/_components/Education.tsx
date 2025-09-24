import { Timeline } from "./helper/Timeline";
import { EducationCard } from "./EducationCard";
import Hyperspeed from "./helper/Hyperspeed";
import LightRays from "./helper/LightRays";

export default function Education() {
  const data = [
    {
      title: "Higher Education",
      time: "2023 - Present",
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
    {
      title: "Secondary Education",
      time: "2018 - 2021",
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
    
  ];

  return (
    <section id="#about" className="relative w-full ">
      <div className="absolute overflow-hidden inset-0 w-full h-full pointer-events-none">
         <LightRays
          raysOrigin="left"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        </div>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row sm:gap-0 lg:gap-2 xl:gap-10">
          
          <div className="flex-1 min-w-0">
            <Timeline data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
