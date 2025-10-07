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
              Even though I could have chosen engineering or AI, I decided to pursue Information Technology because of the curiosity I’ve had about technology since childhood. At the time, I didn’t have a clear idea about AI, so I chose IT as my path. Now, I’ve discovered that I truly enjoy building projects and participating in competitions related to web development, machine learning, and AI.
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
    <section id="education" className="relative py-5 md:py-8 lg:py-10">
      <div className="absolute overflow-hidden inset-0 w-full h-full pointer-events-none">
        <Spotlight 
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(266, 100%, 80%, .08) 0, hsla(266, 80%, 60%, .04) 50%, hsla(266, 60%, 50%, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 70%, .06) 0, hsla(210, 80%, 50%, .03) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(280, 100%, 75%, .05) 0, hsla(280, 80%, 60%, .02) 80%, transparent 100%)"
        />
      </div>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <Timeline data={data} />
      </div>
    </section>
  );
}
