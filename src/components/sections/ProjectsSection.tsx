import React from "react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Text } from "@/components/typography/Text";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";

export const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.isFeatured);

  return (
    <section className="py-24 md:py-36 border-t border-hairline bg-canvas relative">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <Text variant="eyebrow" className="text-lavender mb-5 text-[12px]">
              Case Studies
            </Text>
            <Heading variant="display-lg" className="mb-6 text-[56px] lg:text-[72px] leading-[1.1] tracking-tight">
              Featured Systems
            </Heading>
            <Text variant="body-lg" className="text-ink-muted leading-relaxed text-[18px]">
              A selection of projects focusing on architectural integrity, user intentionality, and technical scalability.
            </Text>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              featured={index === 0} 
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
