"use client";

import ScrollProgressBar from "./_components/ScrollProgressBar";
import Hero from "./_components/Hero";
import Education from "./_components/Education";
import TechnicalSkills from "./_components/TechnicalSkills";
import Logos from "./_components/Logos";
import { Contact } from "./_components/Contact"
import Projects from "./_components/Projects";
import Footer from "./_components/Footer";

export default function Page() {
  return (
    <>
      <ScrollProgressBar />
      <Hero />
      <Education />
      <TechnicalSkills />
      <Logos />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
