import { motion } from "motion/react";

import Hyperspeed from "./helper/Hyperspeed";
import FloatingLines from "./helper/FloatingLines";
import ColorBends from "./helper/ColorBends";
import Nav from "./Nav";
import SplitText from "./SplitText";
import LayoutTextFlip from "./helper/LayoutTextFlip";
import Stats from "./helper/Stats";
import Button from "./helper/Button";
import ProfileCard from "./helper/ProfileCard";

export default function Hero() {
  return (
    <section id="about" className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute overflow-hidden inset-0 w-full pointer-events-none">
        <ColorBends
          colors={[]}
          rotation={0}
          speed={0.2}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={0.5}
          noise={0.1}
          transparent
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

            <p className="w-full max-w-2xl text-[0.9rem] sm:text-[0.95rem] md:text-base leading-relaxed text-white">
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
            <ProfileCard
              name="Nipun Yasas"
              title="3rd Year IT Undergraduate"
              avatarUrl="/profile.png"
              iconUrl="/iconpattern.png"
              grainUrl="/grain.webp"
              enableTilt
              enableMobileTilt
            />
          </div>
        </div>
      </div>
    </section>
  );
}
