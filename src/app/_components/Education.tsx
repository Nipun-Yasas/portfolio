import Timeline from "./helper/Timeline";
import {Spotlight} from "./helper/Spotlight";

export default function Education() {
  const data = [
    {
      title: "Higher Education",
      time: "2023 - Present",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-1">
              University of Moratuwa
            </h4>
            <p className="text-sm md:text-base text-neutral-300 font-medium">
              B.Sc. (Hons) Information Technology
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
              Although I qualified for Engineering, I chose to pursue a degree in Information Technology out of my passion for technology. I am currently a 3rd-year undergraduate with a strong interest in Artificial Intelligence (AI), Machine Learning (ML), and Web Development.
            </p>

            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-br from-[#1d1633] to-[#003366]">
              <span className="text-sm font-semibold text-purple-300">
                CGPA: 3.56
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Secondary Education",
      time: "2018 - 2021",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-base md:text-lg font-semibold text-white mb-1">
              Bandaranayake College, Gampaha
            </h4>
            <p className="text-sm md:text-base text-neutral-300 font-medium">
              G.C.E. Advanced Level – Physical Science Stream
            </p>
          </div>

          <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
            Successfully passed the G.C.E. Advanced Level Examination on first attempt in the Physical Science stream
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2.5 rounded-lg">
                <span className="text-sm text-neutral-300 font-medium">Combined Maths</span>
                <span className="ml-auto text-sm font-bold">A</span>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-lg">
                <span className="text-sm text-neutral-300 font-medium">Chemistry</span>
                <span className="ml-auto text-sm font-bold">A</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2.5 rounded-lg">
                <span className="text-sm text-neutral-300 font-medium">Physics</span>
                <span className="ml-auto text-sm font-bold">B</span>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-lg">
                <span className="text-sm text-neutral-300 font-medium">Z Score</span>
                <span className="ml-auto text-sm font-bold">1.95</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="education" className="relative w-full py-10">
      <div className="absolute overflow-hidden inset-0 w-full h-full pointer-events-none">
        <Spotlight />
      </div>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <Timeline data={data} />
      </div>
    </section>
  );
}
