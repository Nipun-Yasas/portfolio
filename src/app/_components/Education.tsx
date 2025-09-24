import Timeline from "./helper/Timeline";
import LightRays from "./helper/LightRays";

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

            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-purple-400/30">
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
            Successfully passed the G.C.E. Advanced Level Examination on first attempt in the Physical Science stream:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400"></div>
                <span className="text-sm text-neutral-300 font-medium">Combined Maths</span>
                <span className="ml-auto text-sm font-bold text-green-400">A</span>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400"></div>
                <span className="text-sm text-neutral-300 font-medium">Chemistry</span>
                <span className="ml-auto text-sm font-bold text-green-400">A</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400"></div>
                <span className="text-sm text-neutral-300 font-medium">Physics</span>
                <span className="ml-auto text-sm font-bold text-blue-400">B</span>
              </div>

              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400"></div>
                <span className="text-sm text-neutral-300 font-medium">Z Score</span>
                <span className="ml-auto text-sm font-bold text-purple-400">1.95</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="#education" className="relative w-full py-10">
      <div className="absolute overflow-hidden inset-0 w-full h-full pointer-events-none">
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#6a37fb"
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
        <Timeline data={data} />
      </div>
    </section>
  );
}
