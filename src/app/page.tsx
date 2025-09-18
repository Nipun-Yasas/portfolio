"use client";

import Nav from "./_components/Nav";
import Particles from "./_components/Particles";
import ProfileCard from "./_components/ProfileCard";
import SplitText from "./_components/SplitText";
import LayoutTextFlip from "./_components/LayoutTextFlip";
import Stats from "./_components/Stats";
import ScrollProgressBar from "./_components/ScrollProgressBar";
import { motion } from "motion/react";

export default function Page() {
  return (
    <>
      <Nav />
      <ScrollProgressBar />

      <section className="relative w-full">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Particles
            particleColors={["#6a37fb", "#ffffff"]}
            particleCount={180}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-0 pt-10 pb-10 sm:pt-14 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-16 items-start">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-8 order-1 lg:order-none lg:col-span-7 xl:col-span-7">
              <div className="w-full max-w-2xl">
                <SplitText
                  text="Hello, I'm Nipun!"
                  className="text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-tight tracking-tight"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-120px"
                  textAlign="left"
                />

                <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <span className="text-sm sm:text-base font-medium text-neutral-300">
                    I am a
                  </span>
                  <motion.div className="flex">
                    <LayoutTextFlip
                      text=""
                      words={[
                        "Full Stack Developer",
                        "Problem Solver",
                        "Coder",
                      ]}
                    />
                  </motion.div>
                </div>
              </div>

              <p className="w-full max-w-2xl text-[0.9rem] sm:text-[0.95rem] md:text-base leading-relaxed text-neutral-200/90">
                I am a 3rd-year undergraduate at the University of Moratuwa with
                a strong interest in Artificial Intelligence, Machine Learning,
                Data Science, and Web Development. I enjoy exploring new
                technologies and finding innovative ways to make life easier and
                more efficient through technology—constantly learning,
                experimenting, and building impactful solutions.
              </p>

              <div className="w-full">
                <Stats />
              </div>

              <div className="flex flex-wrap gap-4 w-full max-w-xl justify-center lg:justify-start">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:ring-offset-2 focus:ring-offset-[#060010] group">
                  <span className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#7f3dff_0%,#ff2fb0_35%,#4f46e5_70%,#7f3dff_100%)] animate-[spin_5s_linear_infinite] opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute inset-[2px] rounded-full bg-gradient-to-br from-[#0f0a1d] via-[#120d26] to-[#1d1339]" />
                  <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-5 sm:px-8 py-2 text-sm font-medium text-white tracking-wide">
                    Download CV
                  </span>
                </button>
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60 focus:ring-offset-2 focus:ring-offset-[#060010] group">
                  <span className="absolute inset-0 bg-[linear-gradient(120deg,#ff2fb0_0%,#7f3dff_45%,#4f46e5_70%,#ff2fb0_100%)] animate-[pulse_4s_ease_in_out_infinite] opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute inset-[2px] rounded-full bg-[linear-gradient(160deg,#130a22_0%,#1d1434_70%)]" />
                  <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-5 sm:px-8 py-2 text-sm font-medium text-white tracking-wide">
                    Hire Me
                  </span>
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end lg:col-span-5 xl:col-span-5 order-0 lg:order-none">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
                <ProfileCard
                  name="Nipun Yasas"
                  title="Software Engineer"
                  handle="nipun"
                  status=""
                  contactText="Contact Me"
                  avatarUrl="/profile.png"
                  iconUrl="https://img.icons8.com/?size=100&id=HqIjKJP5pHjw&format=png&color=000000"
                  grainUrl="https://img.icons8.com/?size=100&id=HqIjKJP5pHjw&format=png&color=000000"
                  showUserInfo
                  enableTilt
                  enableMobileTilt
                  onContactClick={() => console.log("Contact clicked")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
