"use client";

import dynamic from "next/dynamic";
import Hero from "./_components/Hero";
import ScrollProgressBar from "./_components/ScrollProgressBar";

// Dynamic imports to reduce initial bundle size
const Education = dynamic(() => import("./_components/Education"), {
  loading: () => <div className="min-h-screen" />,
});
const TechnicalSkills = dynamic(() => import("./_components/TechnicalSkills"), {
  loading: () => <div className="min-h-screen" />,
});
const Logos = dynamic(() => import("./_components/Logos"), {
  loading: () => <div className="min-h-screen" />,
});
const Projects = dynamic(() => import("./_components/Projects"), {
  loading: () => <div className="min-h-screen" />,
});
const Contact = dynamic(() => import("./_components/Contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="min-h-screen" />,
});
const Footer = dynamic(() => import("./_components/Footer"), {
  loading: () => <div className="min-h-screen" />,
});

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
