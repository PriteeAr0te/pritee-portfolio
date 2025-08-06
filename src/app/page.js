"use client";

import AboutSection from "@/components/ui/AboutSection";
import HeroComponent from "@/components/ui/HeroComponent";
import ProjectsSection from "@/components/ui/ProjectsSection";
import SkillsSection from "@/components/ui/SkillsSection";
import Timeline from "@/components/ui/Timeline";

export default function Home() {

  return (
    <section className="w-screen flex flex-col items-center justify-center text-center">
      <HeroComponent />
      <AboutSection />
      <ProjectsSection />
      <Timeline />
      <SkillsSection/>
    </section>
  );
}
