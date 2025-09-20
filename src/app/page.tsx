"use client";

import Nav from "./_components/Nav";
import ScrollProgressBar from "./_components/ScrollProgressBar";
import Hero from "./_components/Hero";
import EducationTimeLine from "./_components/EducationTimeLine";
import { TechnicalSkills } from "./_components/TechnicalSkills";
import Logos from "./_components/Logos";

export default function Page() {
  return (
    <>
      <Nav />
      <ScrollProgressBar />

      <Hero />
      <EducationTimeLine />
      <TechnicalSkills />
      <Logos />
    </>
  );
}
