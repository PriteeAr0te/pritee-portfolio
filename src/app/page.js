"use client";

import AboutSection from "@/components/ui/AboutSection";
import ContactSection from "@/components/ui/ContactSection";
import EducationSection from "@/components/ui/EducationSection";
import HeroComponent from "@/components/ui/HeroComponent";
import ProjectsSection from "@/components/ui/ProjectsSection";
import SkillsSection from "@/components/ui/SkillsSection";
import Timeline from "@/components/ui/Timeline";

export default function Home() {

  return (
    <>
      <section className="w-full overflow-x-hidden flex flex-col items-center justify-center text-center">
        <HeroComponent />
        <AboutSection />
        <ProjectsSection />
        <Timeline />
      </section>
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
