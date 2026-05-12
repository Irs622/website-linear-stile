import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechnicalFocus } from "@/components/sections/TechnicalFocus";
import { WritingSection } from "@/components/sections/WritingSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <ProjectsSection />
      <TechnicalFocus />
      <WritingSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

