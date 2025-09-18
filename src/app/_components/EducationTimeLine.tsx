import { Timeline } from "./helper/Timeline";
import { EducationCard } from "./EducationCard";

export default function EducationTimeLine() {
  const data = [
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
  ];

  return (
    <section id="education" className="relative w-full py-10 sm:py-20">
      <div className="mx-auto max-w-8xl pl-4">
        <div className="flex flex-col md:flex-row sm:gap-0 lg:gap-2 xl:gap-10">
          <div className="hidden md:flex flex-col flex-none w-[250px] lg:w-[400px] xl:w-[500px] transition-[width]">
            <div className="md:scale-[0.8] lg:scale-[0.9] xl:scale-100 origin-top-left">
              <EducationCard />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <Timeline data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
