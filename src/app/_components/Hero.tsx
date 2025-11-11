import { motion } from "motion/react";

import Hyperspeed from "./helper/Hyperspeed";
import Nav from "./Nav";
import SplitText from "./SplitText";
import LayoutTextFlip from "./helper/LayoutTextFlip";
import Stats from "./helper/Stats";
import Button from "./helper/Button";
import ProfileCard from "./helper/ProfileCard";

export default function Hero() {
  return (
    <section id="about" className="relative w-full ">
      <div className="absolute overflow-hidden inset-0 w-full h-full pointer-events-none">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0x131318,
              brokenLines: 0x131318,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3
            },
          }}
        />
      </div>

      <Nav />
      <div className="relative pb-12 mt-12 md:mt-5 z-10 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-16 items-start">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-8 order-1 lg:order-none lg:col-span-7 xl:col-span-7">
            <div className="w-full max-w-2xl">
              <SplitText
                text="Hello, I'm Nipun!"
                className=" text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-tight tracking-tight"
                delay={50}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 50, scale: 0.8 }}
                to={{ opacity: 1, y: 0, scale: 1 }}
                threshold={0.3}
                rootMargin="-50px"
                textAlign="left"
              />
              <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <span className="text-sm sm:text-base font-medium text-neutral-300">
                  I am a
                </span>
                <motion.div className="flex">
                  <LayoutTextFlip
                    text=""
                    words={["Full Stack Developer", "Problem Solver", "Coder"]}
                  />
                </motion.div>
              </div>
            </div>

            <p className="w-full max-w-2xl text-[0.9rem] sm:text-[0.95rem] md:text-base leading-relaxed text-neutral-200/90">
              A 3rd-year undergraduate at the University of Moratuwa with a
              strong interest in Artificial Intelligence, Machine Learning, Data
              Science, and Web Development. I enjoy exploring new technologies
              and finding innovative ways to make life easier and more efficient
              through technology constantly learning, experimenting, and
              building impactful solutions.
            </p>

            <div className="w-full">
              <Stats />
            </div>

            <div className="flex flex-wrap gap-4 w-full max-w-xl justify-center lg:justify-start">
              <Button
                onClick={async () => {
                  await new Promise((resolve) => setTimeout(resolve, 800));

                  const link = document.createElement("a");
                  link.href = "/Nipun_Bandara_CV.pdf";
                  link.download = "Nipun_Bandara_CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download CV
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end lg:col-span-5 xl:col-span-5 order-0 lg:order-none">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <ProfileCard
                name="Nipun Yasas"
                title="3rd Year IT Undergraduate"
                avatarUrl="/profile.png"
                iconUrl="/iconpattern.png"
                grainUrl="/grain.webp"
                behind-gradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), hsla(266, 100%, 90%, var(--card-opacity)) 4%, hsla(266, 50%, 80%, calc(var(--card-opacity) * 0.75)) 10%, hsla(266, 25%, 70%, calc(var(--card-opacity) * 0.5)) 50%, hsla(266, 0%, 60%, 0) 100%), radial-gradient(35% 52% at 55% 20%, #00ffaac4 0%, #073aff00 100%), radial-gradient(100% 100% at 50% 50%, #00c1ffff 1%, #073aff00 76%), conic-gradient(from 124deg at 50% 50%, #c137ffff 0%, #07c6ffff 40%, #07c6ffff 60%, #c137ffff 100%)"
                inner-gradient="linear-gradient(145deg, #60496e8c 0%, #71C4FF44 100%)"
                enableTilt
                enableMobileTilt
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
